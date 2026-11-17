// @vitest-environment jsdom
import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { useScrollHeader } from "./useScrollHeader";

function scrollTo(y: number) {
  act(() => {
    Object.defineProperty(window, "scrollY", { value: y, writable: true, configurable: true });
    window.dispatchEvent(new Event("scroll"));
  });
}

afterEach(() => {
  scrollTo(0);
});

describe("useScrollHeader", () => {
  it("démarre à false", () => {
    const { result } = renderHook(() => useScrollHeader());

    expect(result.current).toBe(false);
  });

  it("passe à true au-delà du seuil par défaut (80px)", () => {
    const { result } = renderHook(() => useScrollHeader());

    scrollTo(81);
    expect(result.current).toBe(true);

    scrollTo(40);
    expect(result.current).toBe(false);
  });

  it("respecte un seuil personnalisé", () => {
    const { result } = renderHook(() => useScrollHeader(200));

    scrollTo(150);
    expect(result.current).toBe(false);

    scrollTo(201);
    expect(result.current).toBe(true);
  });

  it("retire l'écouteur au démontage", () => {
    const { result, unmount } = renderHook(() => useScrollHeader());

    unmount();
    scrollTo(500);

    expect(result.current).toBe(false);
  });
});
