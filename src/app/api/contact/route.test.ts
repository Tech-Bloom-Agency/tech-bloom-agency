import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Le binding Email n'existe qu'à l'exécution sur Workers : on le simule.
const { emailSend, ctx } = vi.hoisted(() => {
  const emailSend = vi.fn();
  return {
    emailSend,
    ctx: { env: { EMAIL: { send: emailSend } } as Record<string, unknown> },
  };
});

vi.mock("@opennextjs/cloudflare", () => ({
  getCloudflareContext: () => ctx,
}));

import { POST } from "./route";

const VALID_PAYLOAD = {
  firstName: "Sullivan",
  email: "contact@example.com",
  phone: "+261 34 10 608 02",
  service: "Site vitrine",
  message: "Bonjour, je souhaite un devis pour un site vitrine de cinq pages.",
};

// Le rate limit est un Map au niveau module : chaque test utilise une IP distincte
// pour rester indépendant des autres.
let ipCounter = 0;
function nextIp() {
  ipCounter += 1;
  return `203.0.113.${ipCounter}`;
}

function makeRequest(body: unknown, ip = nextIp(), raw?: string) {
  return new NextRequest("https://techbloom.dev/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", "x-real-ip": ip },
    body: raw ?? JSON.stringify(body),
  });
}

beforeEach(() => {
  emailSend.mockReset();
  emailSend.mockResolvedValue({ messageId: "msg_test" });
  ctx.env = { EMAIL: { send: emailSend } };
  vi.stubEnv("CONTACT_NOTIFY_EMAIL", "agence@example.com");
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("POST /api/contact — validation", () => {
  it("rejette un payload vide avec 400", async () => {
    const response = await POST(makeRequest({}));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({ error: "Validation failed" });
    expect(emailSend).not.toHaveBeenCalled();
  });

  it("rejette un email invalide", async () => {
    const response = await POST(makeRequest({ ...VALID_PAYLOAD, email: "pas-un-email" }));

    expect(response.status).toBe(400);
  });

  it("rejette un message trop court", async () => {
    const response = await POST(makeRequest({ ...VALID_PAYLOAD, message: "Trop court" }));

    expect(response.status).toBe(400);
  });

  it("rejette un corps qui n'est pas du JSON", async () => {
    const response = await POST(makeRequest(null, nextIp(), "ceci n'est pas du json"));

    expect(response.status).toBe(400);
  });
});

describe("POST /api/contact — honeypot", () => {
  it("répond 200 sans rien envoyer quand le champ piège est rempli", async () => {
    const response = await POST(makeRequest({ ...VALID_PAYLOAD, company: "Bot Corp" }));

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ success: true });
    expect(emailSend).not.toHaveBeenCalled();
  });
});

describe("POST /api/contact — envoi via le binding Cloudflare", () => {
  it("envoie la notification à l'agence et répond 200", async () => {
    const response = await POST(makeRequest(VALID_PAYLOAD));

    expect(response.status).toBe(200);
    expect(emailSend).toHaveBeenCalledTimes(1);

    const message = emailSend.mock.calls[0][0];
    // La notification part vers l'agence, jamais vers l'adresse du visiteur,
    // sinon la route devient un relais d'emails exploitable.
    expect(message.to).toBe("agence@example.com");
    expect(message.replyTo).toBe("contact@example.com");
    expect(message.text).toContain("Sullivan");
  });

  it("répond 502 si l'envoi échoue", async () => {
    emailSend.mockRejectedValue(new Error("boom"));

    const response = await POST(makeRequest(VALID_PAYLOAD));

    expect(response.status).toBe(502);
  });

  it("répond 502 si le binding est absent", async () => {
    ctx.env = {};

    const response = await POST(makeRequest(VALID_PAYLOAD));

    expect(response.status).toBe(502);
    expect(emailSend).not.toHaveBeenCalled();
  });

  it("échappe le HTML fourni par le visiteur", async () => {
    const payload = {
      ...VALID_PAYLOAD,
      firstName: "<script>alert(1)</script>",
      message: "Bonjour, voici une balise <img src=x onerror=alert(1)> dans mon message.",
    };

    await POST(makeRequest(payload));

    const { html } = emailSend.mock.calls[0][0];
    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
    expect(html).not.toContain("<img src=x");
  });
});

describe("POST /api/contact — rate limit", () => {
  it("bloque la 6e requête d'une même IP avec 429", async () => {
    const ip = "198.51.100.42";

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const response = await POST(makeRequest(VALID_PAYLOAD, ip));
      expect(response.status).toBe(200);
    }

    const blocked = await POST(makeRequest(VALID_PAYLOAD, ip));
    expect(blocked.status).toBe(429);
    expect(emailSend).toHaveBeenCalledTimes(5);
  });
});
