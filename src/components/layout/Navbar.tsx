"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Calendly integration
  const openCalendly = () => {
    const calendlyUrl = SITE_CONFIG.calendlyUrl;
    // @ts-ignore - Calendly widget
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      window.open(calendlyUrl, "_blank");
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo minimaliste avec losange dégradé TBA */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue to-teal rounded-agency-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-sm">
            <span className="text-white text-sm font-bold tracking-tighter">TBA</span>
          </div>
          <span className={`font-serif font-bold text-xl tracking-tight transition-colors ${
            scrolled || isOpen ? "text-navy" : "text-navy"
          }`}>
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-red ${
                scrolled ? "text-navy/80" : "text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={openCalendly}
            className="btn-primary py-3 px-6 text-xs uppercase tracking-widest"
          >
            Réserver un appel
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden p-2 transition-colors"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} className="text-navy" /> : <Menu size={28} className={scrolled ? "text-navy" : "text-navy"} />}
        </button>
      </div>

      {/* Mobile menu (Full screen modern overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] md:hidden flex flex-col p-8 pt-24 space-y-8"
          >
             <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-navy"
              aria-label="Fermer le menu"
            >
              <X size={32} />
            </button>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-4xl font-bold text-navy hover:text-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-8 mt-auto border-t border-gray-100">
               <button
                onClick={() => {
                  setIsOpen(false);
                  openCalendly();
                }}
                className="w-full block text-center bg-red text-white py-5 rounded-agency-md text-lg font-bold hover:bg-red-hover transition-colors"
              >
                Réserver un appel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
