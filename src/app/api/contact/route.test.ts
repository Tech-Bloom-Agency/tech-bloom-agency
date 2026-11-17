import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
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
  return new NextRequest("https://tech-bloom-agency.vercel.app/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", "x-real-ip": ip },
    body: raw ?? JSON.stringify(body),
  });
}

const fetchMock = vi.fn();

beforeEach(() => {
  fetchMock.mockReset();
  vi.stubGlobal("fetch", fetchMock);
  vi.stubEnv("N8N_WEBHOOK_URL", "https://n8n.example.com/webhook/contact");
  vi.stubEnv("RESEND_API_KEY", "");
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("POST /api/contact — validation", () => {
  it("rejette un payload vide avec 400", async () => {
    const response = await POST(makeRequest({}));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({ error: "Validation failed" });
    expect(fetchMock).not.toHaveBeenCalled();
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
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe("POST /api/contact — livraison n8n", () => {
  it("transmet le lead au webhook et répond 200", async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 200 }));
    const ip = nextIp();

    const response = await POST(makeRequest(VALID_PAYLOAD, ip));

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://n8n.example.com/webhook/contact");

    const sent = JSON.parse(init.body as string);
    expect(sent).toMatchObject({
      firstName: "Sullivan",
      email: "contact@example.com",
      source: "website_contact",
      ip,
    });
    // Le champ honeypot ne doit jamais partir vers n8n.
    expect(sent).not.toHaveProperty("company");
  });

  it("répond 502 si n8n échoue et qu'aucun fallback n'est configuré", async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 500 }));

    const response = await POST(makeRequest(VALID_PAYLOAD));

    expect(response.status).toBe(502);
  });

  it("répond 502 si le webhook n'est pas configuré", async () => {
    vi.stubEnv("N8N_WEBHOOK_URL", "");

    const response = await POST(makeRequest(VALID_PAYLOAD));

    expect(response.status).toBe(502);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe("POST /api/contact — fallback Resend", () => {
  beforeEach(() => {
    vi.stubEnv("RESEND_API_KEY", "re_test_key");
    vi.stubEnv("CONTACT_NOTIFY_EMAIL", "agence@example.com");
  });

  it("bascule sur Resend quand n8n échoue", async () => {
    fetchMock
      .mockResolvedValueOnce(new Response(null, { status: 500 }))
      .mockResolvedValueOnce(new Response(null, { status: 200 }));

    const response = await POST(makeRequest(VALID_PAYLOAD));

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(2);

    const [url, init] = fetchMock.mock.calls[1];
    expect(url).toBe("https://api.resend.com/emails");

    const sent = JSON.parse(init.body as string);
    // La notification part vers l'agence, jamais vers l'adresse du visiteur,
    // sinon la route devient un relais d'emails exploitable.
    expect(sent.to).toEqual(["agence@example.com"]);
    expect(sent.reply_to).toBe("contact@example.com");
  });

  it("échappe le HTML fourni par le visiteur", async () => {
    fetchMock
      .mockResolvedValueOnce(new Response(null, { status: 500 }))
      .mockResolvedValueOnce(new Response(null, { status: 200 }));

    const payload = {
      ...VALID_PAYLOAD,
      firstName: "<script>alert(1)</script>",
      message: "Bonjour, voici une balise <img src=x onerror=alert(1)> dans mon message.",
    };

    await POST(makeRequest(payload));

    const sent = JSON.parse(fetchMock.mock.calls[1][1].body as string);
    expect(sent.html).not.toContain("<script>");
    expect(sent.html).toContain("&lt;script&gt;");
    expect(sent.html).not.toContain("<img src=x");
  });
});

describe("POST /api/contact — rate limit", () => {
  it("bloque la 6e requête d'une même IP avec 429", async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 200 }));
    const ip = "198.51.100.42";

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const response = await POST(makeRequest(VALID_PAYLOAD, ip));
      expect(response.status).toBe(200);
    }

    const blocked = await POST(makeRequest(VALID_PAYLOAD, ip));
    expect(blocked.status).toBe(429);
    expect(fetchMock).toHaveBeenCalledTimes(5);
  });
});
