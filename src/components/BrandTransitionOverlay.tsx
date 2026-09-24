"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tba-premium-intro-seen";

export default function BrandTransitionOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forceIntro = params.get("intro") === "1" || process.env.NODE_ENV === "development";
    const hasSeenIntro = window.localStorage.getItem(STORAGE_KEY) === "true";

    if (forceIntro || !hasSeenIntro) {
      setIsVisible(true);

      const startExit = window.setTimeout(() => {
        setIsLeaving(true);
      }, 8500);

      const hideTimer = window.setTimeout(() => {
        setIsVisible(false);
        if (!forceIntro) {
          window.localStorage.setItem(STORAGE_KEY, "true");
        }
      }, 10000);

      return () => {
        window.clearTimeout(startExit);
        window.clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={isLeaving ? "intro-shell intro-shell--exiting" : "intro-shell intro-shell--visible"}>
      <div className="intro-backdrop" />
      <div className="intro-grid" />
      <div className="intro-glow intro-glow-left" />
      <div className="intro-glow intro-glow-right" />

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
          <h1 className="intro-title">Brand in motion</h1>
          <p className="intro-subtitle">
            Une présence digitale pensée pour captiver, inspirer et transformer l’attention en opportunités concrètes.
          </p>
        </div>

        <div className="intro-progress-wrap">
          <div className="intro-progress-meta">
            <span>Mode futur</span>
            <span>10s</span>
          </div>
          <div className="intro-progress-bar">
            <div className="intro-progress-fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
