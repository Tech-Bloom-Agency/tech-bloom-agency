"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";

interface NavbarProps {
  scrolled: boolean;
}

/**
 * Pages dont le haut de page est un hero sombre (bg-navy) : en haut de page, la navbar est
 * transparente et doit donc passer en logo blanc + liens blancs (contraste, charte v2.0).
 * Toute autre route (mentions légales, fiches portfolio, 404) a un fond clair : logo marine.
 */
const DARK_HERO_ROUTES = ["/", "/a-propos", "/b2b", "/blog", "/contact", "/portfolio", "/services"];

export default function Navbar({ scrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const onDarkHero = !scrolled && DARK_HERO_ROUTES.includes(pathname);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo officiel TBA — version horizontale marine (charte v2.0) */}
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${SITE_CONFIG.name} — retour à l'accueil`}
        >
          <Logo
            variant={onDarkHero ? "horizontal-blanc" : "horizontal"}
            width={180}
            priority
            className={`w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-10"}`}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                onDarkHero
                  ? "text-white hover:text-brand-red-rose"
                  : "text-navy/80 hover:text-red"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary py-3 px-6 text-xs uppercase tracking-widest"
          >
            Réserver un appel
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="lg:hidden p-2 transition-colors"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={28} className="text-navy" />
          ) : (
            <Menu size={28} className={onDarkHero ? "text-white" : "text-navy"} />
          )}
        </button>
      </div>

      {/* Mobile menu (Full screen modern overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col p-8 pt-24 space-y-8"
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="absolute top-6 left-8 flex items-center"
              aria-label={`${SITE_CONFIG.name} — retour à l'accueil`}
            >
              <Logo variant="horizontal" width={140} className="h-8 w-auto" />
            </Link>

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
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-agency-md bg-red py-5 text-center text-lg font-bold text-white transition-colors hover:bg-red-hover"
              >
                Réserver un appel
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
