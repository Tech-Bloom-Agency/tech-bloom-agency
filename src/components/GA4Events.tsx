"use client";

/**
 * Google Analytics 4 - Events Custom
 *
 * Implémente tous les événements requis par le CDN :
 * - cta_click: Tous les boutons CTA
 * - form_submit: Soumission formulaires
 * - portfolio_view: Visite fiche projet
 * - whatsapp_click: Clic bouton WA
 * - calendly_open: Ouverture Calendly
 *
 * Les typages de `window.gtag` / `window.fbq` vivent dans src/types/globals.d.ts
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GA4Events() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views automatiquement
    if (typeof window === "undefined" || !process.env.NEXT_PUBLIC_GA_ID) return;

    if (!window.gtag) {
      const gtag: GtagFn = (...args: unknown[]) => {
        const stub = window.gtag;
        if (!stub) return;
        stub.q = stub.q || [];
        stub.q.push(args);
      };
      window.gtag = gtag;
    }

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pathname,
    });
  }, [pathname]);

  useEffect(() => {
    // Setup event listeners globaux

    // 1. CTA Clicks - Tous les boutons avec data-cta
    const handleCTAClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const ctaButton = target.closest("[data-cta]") as HTMLElement | null;

      if (!ctaButton) return;

      const ctaLabel =
        ctaButton.getAttribute("data-cta") || ctaButton.textContent?.trim() || "Unknown";

      window.gtag?.("event", "cta_click", {
        cta_label: ctaLabel,
        page: pathname,
      });
    };

    document.addEventListener("click", handleCTAClick);

    // 2. WhatsApp Click
    const handleWhatsAppClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const waLink = target.closest('a[href*="wa.me"]') as HTMLAnchorElement | null;

      if (!waLink) return;

      window.gtag?.("event", "whatsapp_click", {
        source: pathname,
      });

      // Track aussi Facebook Pixel Contact
      window.fbq?.("track", "Contact");
    };

    document.addEventListener("click", handleWhatsAppClick);

    // 3. Calendly Open (si popup)
    const handleCalendlyOpen = () => {
      window.gtag?.("event", "calendly_open", {
        source: pathname,
      });
    };

    // Écouter l'événement custom Calendly
    document.addEventListener("calendly_popup_opened", handleCalendlyOpen);

    return () => {
      document.removeEventListener("click", handleCTAClick);
      document.removeEventListener("click", handleWhatsAppClick);
      document.removeEventListener("calendly_popup_opened", handleCalendlyOpen);
    };
  }, [pathname]);

  // Exposer des fonctions globales pour les composants
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.trackGAEvent = (eventName: string, params: Record<string, unknown>) => {
      window.gtag?.("event", eventName, params);
    };

    // Form submit tracking
    window.trackFormSubmit = (service: string) => {
      window.gtag?.("event", "form_submit", { service });

      // Facebook Pixel Lead
      window.fbq?.("track", "Lead");
    };

    // Portfolio view tracking
    window.trackPortfolioView = (projectSlug: string) => {
      window.gtag?.("event", "portfolio_view", {
        project_slug: projectSlug,
      });
    };

    return () => {
      delete window.trackGAEvent;
      delete window.trackFormSubmit;
      delete window.trackPortfolioView;
    };
  }, []);

  return null; // Component headless
}
