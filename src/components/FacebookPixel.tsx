"use client";

import { useEffect } from "react";

/**
 * Facebook Pixel - Chargé après 3s pour ne pas bloquer le LCP
 *
 * Utilisation:
 * 1. Ajouter NEXT_PUBLIC_FB_PIXEL_ID dans .env.local
 * 2. Importer dans RootLayout ou page.tsx
 * 3. Le composant s'injecte automatiquement après 3 secondes
 *
 * Le typage de `window.fbq` vit dans src/types/globals.d.ts
 */
export default function FacebookPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    if (!pixelId) return;

    // Attendre 3 secondes après hydration pour ne pas impacter le LCP
    const timer = setTimeout(() => {
      if (!window.fbq) {
        const fbq: FbqFn = (...args: unknown[]) => {
          const stub = window.fbq;
          if (!stub) return;
          if (stub.callMethod) {
            stub.callMethod(...args);
            return;
          }
          stub.queue = stub.queue || [];
          stub.queue.push(args);
        };

        fbq.push = fbq;
        fbq.loaded = true;
        fbq.version = "2.0";
        fbq.queue = [];

        window.fbq = fbq;
      }

      if (!window._fbq) window._fbq = window.fbq;

      // Initialisation
      window.fbq("init", pixelId);

      // Track pageview automatique
      window.fbq("track", "PageView");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return null; // Component headless - s'injecte dans le contexte global
}
