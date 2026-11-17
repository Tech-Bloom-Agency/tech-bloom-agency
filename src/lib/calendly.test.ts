import { afterEach, describe, expect, it, vi } from "vitest";
import { getCustomizedCalendlyUrl } from "./calendly";

const FALLBACK = "https://calendly.com/sullivan_techbloomagency/appel-decouverte";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("getCustomizedCalendlyUrl", () => {
  it("retourne l'URL de repli sans options ni variable d'environnement", () => {
    vi.stubEnv("NEXT_PUBLIC_CALENDLY_URL", "");

    expect(getCustomizedCalendlyUrl()).toBe(FALLBACK);
  });

  it("utilise NEXT_PUBLIC_CALENDLY_URL quand elle est définie", () => {
    vi.stubEnv("NEXT_PUBLIC_CALENDLY_URL", "https://calendly.com/tba/audit");

    expect(getCustomizedCalendlyUrl()).toBe("https://calendly.com/tba/audit");
  });

  it("ajoute les couleurs de la charte en query params", () => {
    vi.stubEnv("NEXT_PUBLIC_CALENDLY_URL", "https://calendly.com/tba/audit");

    const url = new URL(
      getCustomizedCalendlyUrl({ backgroundColor: "fcfaee", primaryColor: "b8001f" })
    );

    expect(url.searchParams.get("background_color")).toBe("fcfaee");
    expect(url.searchParams.get("primary_color")).toBe("b8001f");
  });

  it("n'ajoute que les paramètres fournis", () => {
    vi.stubEnv("NEXT_PUBLIC_CALENDLY_URL", "https://calendly.com/tba/audit");

    expect(getCustomizedCalendlyUrl({ primaryColor: "b8001f" })).toBe(
      "https://calendly.com/tba/audit?primary_color=b8001f"
    );
  });
});
