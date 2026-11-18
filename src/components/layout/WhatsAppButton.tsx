"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK =
  "https://wa.me/261341060802?text=Bonjour%20Sullivan%2C%20je%20souhaite%20discuter%20d%27un%20projet%20digital%20avec%20TBA.";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showRing, setShowRing] = useState(true);

  useEffect(() => {
    // Afficher le bouton après 1s de chargement
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Animation du ring toutes les 3 secondes
    const ringInterval = setInterval(() => {
      setShowRing(true);
      setTimeout(() => setShowRing(false), 1500);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(ringInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-[9999] group"
          aria-label="Contactez-nous sur WhatsApp"
        >
          {/* Ring animation */}
          <AnimatePresence>
            {showRing && (
              <motion.div
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 1.8, opacity: 0 }}
                exit={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-[#25D366]"
                style={{ zIndex: -1 }}
              />
            )}
          </AnimatePresence>

          {/* Bouton principal */}
          <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1DA851] shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95">
            {/* Icône WhatsApp SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-7 h-7 text-white"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v1.92a2.86 2.86 0 0 1-2.86 2.86A18.86 18.86 0 0 1 3 5.14 2.86 2.86 0 0 1 5.86 2.28h1.92a1.43 1.43 0 0 1 1.43 1.14l.48 2.39a1.43 1.43 0 0 1-.38 1.28l-1.15 1.15a18.86 18.86 0 0 0 6.68 6.68l1.15-1.15a1.43 1.43 0 0 1 1.28-.38l2.39.48a1.43 1.43 0 0 1 1.14 1.43Z" />
            </svg>

            {/* Badge notification (optionnel) */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
          </div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          >
            <p className="text-sm font-medium text-navy">Discutons de votre projet !</p>
          </motion.div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
