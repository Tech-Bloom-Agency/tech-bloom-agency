"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tba-premium-intro-seen";

export default function BrandTransitionOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // WCAG 2.2.2 : du mouvement de plus de 5 s doit pouvoir être arrêté. L'intro
    // dure maintenant 2,4 s et porte un bouton « Passer », donc le critère est
    // tenu sans mécanisme supplémentaire. Qui a demandé moins d'animation ne la
    // voit pas du tout.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const params = new URLSearchParams(window.location.search);
    const forceIntro = params.get("intro") === "1" || process.env.NODE_ENV === "development";
    const hasSeenIntro = window.localStorage.getItem(STORAGE_KEY) === "true";

    if (forceIntro || !hasSeenIntro) {
      // Dépend de localStorage / URL : non calculable au premier rendu serveur.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);

      const startExit = window.setTimeout(() => {
        setIsLeaving(true);
      }, 1300);

      const hideTimer = window.setTimeout(() => {
        setIsVisible(false);
        if (!forceIntro) {
          window.localStorage.setItem(STORAGE_KEY, "true");
        }
      }, 2400);

      return () => {
        window.clearTimeout(startExit);
        window.clearTimeout(hideTimer);
      };
    }
  }, []);

  // shortcut: le contenu derrière le voile reste dans l'ordre de lecture des
  // lecteurs d'écran (pas d'aria-hidden ni d'inert), à traiter si l'intro
  // redevient longue ou non passable.
  if (!isVisible) return null;

  return (
    <div className={isLeaving ? "intro-shell intro-shell--exiting" : "intro-shell intro-shell--visible"}>
      <div className="intro-backdrop" />
      <div className="intro-grid" />
      <div className="intro-glow intro-glow-left" />
      <div className="intro-glow intro-glow-right" />

      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 z-10 min-h-[44px] px-4 text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Passer
      </button>

      <div className="intro-content">
        <div className="intro-orbit">
          <div className="intro-ring intro-ring-one" />
          <div className="intro-ring intro-ring-two" />
          <div className="intro-core">
            <span className="intro-label">Soon</span>
            <span className="intro-mark">TBA</span>
          </div>
        </div>

        <div className="intro-copy">
          <p className="intro-kicker">Tech Bloom Agency</p>
          <p className="intro-title">Brand in motion</p>
          <p className="intro-subtitle">
            Une présence digitale pensée pour captiver, inspirer et transformer l’attention en opportunités concrètes.
          </p>
        </div>

        <div className="intro-progress-wrap">
          <div className="intro-progress-meta">
            <span>Mode futur</span>
            <span>2s</span>
          </div>
          <div className="intro-progress-bar">
            <div className="intro-progress-fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
