"use client";

import { useEffect, useState } from "react";

export function CalendlyEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Charger le script Calendly au montage
    if (document.getElementById("calendly-script")) {
      // Le script peut déjà être dans le DOM (navigation client) : état non dérivable du rendu.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoaded(true);
      return;
    }

    try {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      
      script.onload = () => {
        setIsLoaded(true);
      };
      
      script.onerror = () => {
        setHasError(true);
        console.error("Erreur chargement Calendly");
      };

      document.body.appendChild(script);
    } catch (error) {
      setHasError(true);
      console.error("Erreur:", error);
    }
  }, []);

  return (
    <div className="space-y-6">
      {!isLoaded && !hasError && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[var(--color-blue)]/30 border-t-[var(--color-blue)] rounded-full animate-spin" />
            <p className="text-[var(--color-gray)] font-medium">Chargement du calendrier...</p>
          </div>
        </div>
      )}

      {hasError && (
        <div className="bg-[var(--color-red)]/10 border border-[var(--color-red)]/30 rounded-md p-6 text-center">
          <p className="text-[var(--color-red)] font-medium mb-4">
            Impossible de charger le calendrier
          </p>
          <a
            href="https://calendly.com/sullivan_techbloomagency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[var(--color-red)] font-bold hover:underline"
          >
            Réserver un appel directement →
          </a>
        </div>
      )}

      {/* Widget Calendly inline embed - Charte TBA */}
      <div 
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/sullivan_techbloomagency"
        style={{ 
          minWidth: "320px", 
          height: "700px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        }}
      />
    </div>
  );
}
