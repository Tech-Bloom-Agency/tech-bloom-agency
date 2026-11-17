"use client";

/**
 * Utilitaire pour ouvrir Calendly en popup
 * 
 * Usage:
 *   import { openCalendlyPopup } from "@/lib/calendly";
 *   
 *   <button onClick={openCalendlyPopup}>Réserver un appel</button>
 */

export const openCalendlyPopup = (url?: string) => {
  const calendlyUrl = url || process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/sullivan_techbloomagency/appel-decouverte";

  // Charger le script si pas déjà fait
  if (!document.getElementById("calendly-script")) {
    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    
    script.onload = () => {
      initAndOpen(calendlyUrl);
    };
    
    document.body.appendChild(script);
  } else {
    initAndOpen(calendlyUrl);
  }
};

const initAndOpen = (url: string) => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url });
    
    // Dispatch event pour tracking GA4
    const event = new CustomEvent("calendly_popup_opened");
    document.dispatchEvent(event);
  }
};

/**
 * Personnaliser les couleurs de la popup Calendly
 * Via URL params : https://calendly.com/[user]/[type]?background_color=fcfaee&primary_color=b8001f
 */
export const getCustomizedCalendlyUrl = (options?: {
  backgroundColor?: string;
  primaryColor?: string;
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/sullivan_techbloomagency/appel-decouverte";
  
  if (!options) return baseUrl;
  
  const params = new URLSearchParams();
  
  if (options.backgroundColor) {
    params.set('background_color', options.backgroundColor);
  }
  
  if (options.primaryColor) {
    params.set('primary_color', options.primaryColor);
  }
  
  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};
