import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { SITE_CONFIG } from "@/lib/constants";

// Schema de validation (longueurs max pour éviter les payloads abusifs)
const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Le prénom doit contenir au moins 2 caractères").max(100),
  email: z.string().trim().email("Veuillez entrer une adresse email valide").max(254),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Veuillez sélectionner un service").max(100),
  message: z.string().trim().min(20, "Le message doit contenir au moins 20 caractères").max(5000),
  company: z.string().optional(), // Honeypot field
});

type ContactData = z.infer<typeof contactSchema>;

// Rate limiting simple (en mémoire, par instance — best effort uniquement)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 3600000; // 1 heure
const RATE_LIMIT_MAX = 5; // 5 requêtes max par heure

function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Purge des entrées expirées pour éviter une croissance illimitée
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) rateLimitMap.delete(key);
  }

  const limit = rateLimitMap.get(ip);

  if (!limit) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (limit.count >= RATE_LIMIT_MAX) {
    return false; // Rate limit exceeded
  }

  limit.count++;
  return true;
}

// IP client : x-real-ip, sinon la première entrée de x-forwarded-for (définies par le proxy/Vercel)
function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown"
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Trop de tentatives. Veuillez réessayer dans une heure." },
        { status: 429 }
      );
    }

    // Parse body
    const body = await request.json().catch(() => null);

    // 1. Validation Zod
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Honeypot check (anti-spam)
    if (data.company && data.company.trim() !== "") {
      // Si le champ hidden est rempli, c'est un bot
      console.warn("Spam detected (honeypot filled)");
      return NextResponse.json(
        { success: true }, // Retourner succès quand même pour ne pas éveiller les soupçons
        { status: 200 }
      );
    }

    // 3. POST webhook n8n, puis fallback Resend
    const delivered = (await sendToWebhook(data, ip)) || (await sendFallbackEmail(data));

    if (!delivered) {
      console.error("Contact form: no delivery channel succeeded");
      return NextResponse.json(
        { error: "Le message n'a pas pu être envoyé. Veuillez réessayer ou nous écrire directement." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès",
    });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * Envoi vers le webhook n8n (timeout 8s). Retourne true si livré.
 */
async function sendToWebhook(data: ContactData, ip: string): Promise<boolean> {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("N8N_WEBHOOK_URL not configured");
    return false;
  }

  try {
    const { company: _honeypot, ...lead } = data;
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        source: "website_contact",
        timestamp: new Date().toISOString(),
        ip,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook responded with ${webhookResponse.status}`);
    }

    return true;
  } catch (webhookError) {
    console.error("n8n webhook failed:", webhookError);
    return false;
  }
}

/**
 * Fallback si n8n KO : notification envoyée uniquement à l'agence via Resend.
 * Jamais à l'adresse saisie par le visiteur (sinon relais d'emails exploitable).
 */
async function sendFallbackEmail(data: ContactData): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return false;
  }

  const notifyTo = process.env.CONTACT_NOTIFY_EMAIL || SITE_CONFIG.email;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Tech Bloom Agency <contact@techbloomagency.com>",
        to: [notifyTo],
        reply_to: data.email,
        subject: `Nouvelle demande de contact — ${data.service.slice(0, 60)}`,
        html: `
          <h1>Nouvelle demande de contact</h1>
          <ul>
            <li>Prénom : ${escapeHtml(data.firstName)}</li>
            <li>Email : ${escapeHtml(data.email)}</li>
            <li>Téléphone : ${escapeHtml(data.phone || "Non renseigné")}</li>
            <li>Service : ${escapeHtml(data.service)}</li>
          </ul>
          <p><strong>Message :</strong></p>
          <blockquote style="white-space:pre-wrap">${escapeHtml(data.message)}</blockquote>
        `,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error(`Resend responded with ${response.status}`);
    }

    return true;
  } catch (emailError) {
    console.error("Resend fallback failed:", emailError);
    return false;
  }
}
