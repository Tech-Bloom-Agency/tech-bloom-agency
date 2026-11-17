// @vitest-environment jsdom
import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import BrandTransitionOverlay from "./BrandTransitionOverlay";

// jsdom n'implémente pas matchMedia : on le remplace pour piloter la préférence.
function stubReducedMotion(reduce: boolean) {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: reduce && query.includes("prefers-reduced-motion"),
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
}

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("BrandTransitionOverlay", () => {
  it("ne s'affiche pas si le visiteur a demandé moins d'animation", () => {
    stubReducedMotion(true);

    render(<BrandTransitionOverlay />);

    expect(screen.queryByText("Brand in motion")).toBeNull();
  });

  it("s'affiche à la première visite quand le mouvement est autorisé", () => {
    stubReducedMotion(false);

    render(<BrandTransitionOverlay />);

    expect(screen.getByText("Brand in motion")).not.toBeNull();
  });

  it("disparaît au clic sur « Passer »", () => {
    stubReducedMotion(false);

    render(<BrandTransitionOverlay />);
    fireEvent.click(screen.getByRole("button", { name: "Passer" }));

    expect(screen.queryByText("Brand in motion")).toBeNull();
  });

  it("ne réapparaît pas une fois vue", () => {
    stubReducedMotion(false);
    window.localStorage.setItem("tba-premium-intro-seen", "true");

    render(<BrandTransitionOverlay />);

    expect(screen.queryByText("Brand in motion")).toBeNull();
  });

  it("ne porte pas de <h1>, réservé au titre de la page", () => {
    stubReducedMotion(false);

    render(<BrandTransitionOverlay />);

    expect(screen.queryByRole("heading", { level: 1 })).toBeNull();
  });
});
