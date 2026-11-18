import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { z } from "zod";

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

    // 3. Notification par email
    const delivered = await sendNotificationEmail(data);

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

/** Binding Email de Cloudflare (voir send_email dans wrangler.jsonc). */
interface EmailBinding {
  send(message: {
    to: string;
    from: string;
    subject: string;
    html: string;
    text: string;
    replyTo?: string;
  }): Promise<{ messageId: string }>;
}

/**
 * Notification envoyée uniquement à l'agence.
 * Jamais à l'adresse saisie par le visiteur (sinon relais d'emails exploitable).
 */
async function sendNotificationEmail(data: ContactData): Promise<boolean> {
  const { env } = getCloudflareContext();
  const email = (env as unknown as { EMAIL?: EmailBinding }).EMAIL;

  if (!email) {
    console.error("EMAIL binding not configured");
    return false;
  }

  const notifyTo = process.env.CONTACT_NOTIFY_EMAIL || "contact@techbloom.dev";
  const from = process.env.CONTACT_FROM_EMAIL || "Formulaire techbloom.dev <noreply@techbloom.dev>";

  const champs: [string, string][] = [
    ["Prénom", data.firstName],
    ["Email", data.email],
    ["Téléphone", data.phone || "Non renseigné"],
    ["Service", data.service],
  ];

  const texte = [
    "Nouvelle demande de contact",
    "",
    ...champs.map(([cle, valeur]) => `${cle} : ${valeur}`),
    "",
    "Message :",
    data.message,
  ].join("\n");

  try {
    await email.send({
      to: notifyTo,
      from,
      replyTo: data.email,
      subject: `Nouvelle demande de contact — ${data.service.slice(0, 60)}`,
      text: texte,
      html: `
        <h1>Nouvelle demande de contact</h1>
        <ul>${champs
          .map(([k, v]) => `<li>${k} : ${escapeHtml(v)}</li>`)
          .join("")}</ul>
        <p><strong>Message :</strong></p>
        <blockquote style="white-space:pre-wrap">${escapeHtml(data.message)}</blockquote>
      `,
    });

    return true;
  } catch (emailError) {
    console.error("Cloudflare email send failed:", emailError);
    return false;
  }
}