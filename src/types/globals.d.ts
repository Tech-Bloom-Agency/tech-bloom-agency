/**
 * Déclarations globales pour les scripts tiers injectés côté client
 * (Google Analytics 4, Meta Pixel, Calendly). Évite les `@ts-ignore`
 * dispersés dans les composants de tracking.
 */

declare global {
    type GtagCommand = "config" | "event" | "set" | "consent" | "js";

    interface GtagFn {
        (command: GtagCommand, ...args: unknown[]): void;
        q?: unknown[][];
    }

    interface FbqFn {
        (command: string, ...args: unknown[]): void;
        callMethod?: (...args: unknown[]) => void;
        queue?: unknown[][];
        push?: FbqFn;
        loaded?: boolean;
        version?: string;
    }

    interface Window {
        dataLayer?: unknown[];
        Calendly?: {
            initPopupWidget: (options: { url: string }) => void;
            initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
        };
        gtag?: GtagFn;
        fbq?: FbqFn;
        _fbq?: FbqFn;
        trackGAEvent?: (eventName: string, params: Record<string, unknown>) => void;
        trackFormSubmit?: (service: string) => void;
        trackPortfolioView?: (projectSlug: string) => void;
    }
}

export {};
