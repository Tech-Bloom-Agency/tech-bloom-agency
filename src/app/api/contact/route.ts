import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema de validation
const contactSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().optional().or(z.literal("")),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z.string().min(20, "Le message doit contenir au moins 20 caractères"),
  company: z.string().optional(), // Honeypot field
});

// Rate limiting simple (en mémoire)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 3600000; // 1 heure
const RATE_LIMIT_MAX = 5; // 5 requêtes max par heure

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (now > limit.resetTime) {
    // Reset window
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (limit.count >= RATE_LIMIT_MAX) {
    return false; // Rate limit exceeded
  }

  limit.count++;
  rateLimitMap.set(ip, limit);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Récupérer l'IP du client (pour rate limiting)
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Trop de tentatives. Veuillez réessayer dans une heure." },
        { status: 429 }
      );
    }

    // Parse body
    const body = await request.json();

    // 1. Validation Zod
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.issues
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Honeypot check (anti-spam)
    if (data.company && data.company.trim() !== "") {
      // Si le champ hidden est rempli, c'est un bot
      console.log("🤖 Spam detected from IP:", ip);
      return NextResponse.json(
        { success: true }, // Retourner succès quand même pour ne pas éveiller les soupçons
        { status: 200 }
      );
    }

    // 3. POST webhook n8n avec timeout 8s
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("N8N_WEBHOOK_URL not configured");
      // Fallback: Email via Resend si configuré
      if (process.env.RESEND_API_KEY) {
        try {
          await sendFallbackEmail(data);
          return NextResponse.json({
            success: true,
            message: "Message envoyé avec succès"
          });
        } catch (emailError) {
          console.error("Resend fallback failed:", emailError);
          return NextResponse.json(
            { error: "Delivery failed" },
            { status: 500 }
          );
        }
      }
      return NextResponse.json(
        { error: "Configuration error" },
        { status: 500 }
      );
    }

    // Timeout 8 secondes max
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "website_contact",
          timestamp: new Date().toISOString(),
          ip: ip,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!webhookResponse.ok) {
        throw new Error(`Webhook responded with ${webhookResponse.status}`);
      }

      console.log("✅ Contact form submitted to n8n:", data.email);

    } catch (webhookError) {
      console.error("⚠️ n8n webhook failed, using Resend fallback:", webhookError);

      if (process.env.RESEND_API_KEY) {
        try {
          await sendFallbackEmail(data);
          return NextResponse.json({
            success: true,
            message: "Message envoyé avec succès"
          });
        } catch (fallbackError) {
          console.error("Resend fallback failed after webhook error:", fallbackError);
          return NextResponse.json(
            { error: "Delivery failed" },
            { status: 500 }
          );
        }
      }

      console.error("No fallback available - logging data:", data);
      return NextResponse.json(
        { error: "Delivery failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès"
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
 * Fallback email via Resend si n8n KO
 */
async function sendFallbackEmail(data: any) {
  const resendDateUrl = "https://api.resend.com/emails";

  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  await fetch(resendDateUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `Tech Bloom Agency <${fromEmail}>`,
      to: [data.email],
      cc: ["sullivanjoro3@gmail.com"],
      subject: "Votre demande a bien été reçue — Tech Bloom Agency",
      html: `
        <h1>Merci pour votre demande</h1>
        <p>Bonjour ${data.firstName},</p>
        <p>Nous avons bien reçu votre demande concernant le service : <strong>${data.service}</strong>.</p>
        <p>Notre équipe vous répondra sous 24 heures ouvrées.</p>
        <hr/>
        <p><strong>Vos coordonnées :</strong></p>
        <ul>
          <li>Email: ${data.email}</li>
          <li>Téléphone: ${data.phone || "Non renseigné"}</li>
        </ul>
        <p><strong>Message :</strong></p>
        <blockquote>${data.message}</blockquote>
        <hr/>
        <p>Cordialement,<br/>L'équipe Tech Bloom Agency</p>
      `,
    }),
  });

  console.log("✅ Fallback email sent via Resend");
}
