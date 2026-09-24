"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const openCalendly = () => {
    const calendlyUrl = SITE_CONFIG.calendlyUrl;
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: calendlyUrl,
      });
    } else {
      window.open(calendlyUrl, "_blank");
    }
  };

  // Letter stagger animation
  const titleText = "Éclosion";
  const titleText2 = "Digitale";

  const letterVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: 0.3 + i * 0.05,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const subtitleWords = ["Marketing", "•", "SEO", "•", "Croissance"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] overflow-hidden bg-navy"
    >
      {/* Background gradient mesh - luxury depth */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(80, 118, 135, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(56, 75, 112, 0.3) 0%, transparent 40%),
              radial-gradient(ellipse at 50% 50%, rgba(13, 42, 64, 0.8) 0%, rgba(13, 42, 64, 1) 70%),
              linear-gradient(180deg, #0D2A40 0%, #1a3a52 50%, #0D2A40 100%)
            `,
          }}
        />
      </div>

      {/* Animated grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating geometric shapes - maximalist decoration */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-[10%] w-32 h-32 border border-teal/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-[15%] w-24 h-24 border border-red/20 rotate-45"
        animate={{
          rotate: [45, 135, 45],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-[20%] w-16 h-16 bg-gradient-to-br from-teal/20 to-transparent rounded-lg"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light rays effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-px h-full bg-gradient-to-b from-teal/10 via-transparent to-transparent"
            style={{
              left: `${20 + i * 15}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 pt-32 pb-20"
      >
        {/* Badge with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <div className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red/0 via-red/10 to-red/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Sparkles className="w-4 h-4 text-red" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">
              Agence Digitale Madagascar
            </span>
          </div>
        </motion.div>

        {/* Main title - 3D letter animation */}
        <div className="relative mb-8 perspective-1000">
          {/* Line 1: Éclosion */}
          <div className="overflow-hidden">
            <h1 className="text-[clamp(4rem,15vw,12rem)] font-heading font-black leading-[0.85] tracking-tighter text-white flex">
              {titleText.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{
                    textShadow: "0 4px 30px rgba(184, 0, 31, 0.3)",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Line 2: Digitale with gradient */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-[clamp(4rem,15vw,12rem)] font-heading font-black leading-[0.85] tracking-tighter"
              style={{
                background: "linear-gradient(135deg, #507687 0%, #FCFAEE 50%, #507687 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 200%",
              }}
            >
              {titleText2}
            </motion.h1>
          </div>

          {/* Decorative underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-red via-teal to-transparent"
            style={{ width: "60%", transformOrigin: "left" }}
          />
        </div>

        {/* Subtitle with word reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {subtitleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1, duration: 0.5 }}
              className={`text-sm md:text-base tracking-[0.15em] uppercase ${
                word === "•" ? "text-red mx-2" : "text-white/60 font-medium"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto text-center font-body leading-relaxed mb-16"
        >
          Nous transformons les visions en expériences digitales d&apos;exception.
          <span className="text-white font-semibold"> Partenaire stratégique</span>
          des entrepreneurs audacieux.
        </motion.p>

        {/* CTA Buttons - Luxury style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Primary CTA - Magnetic button effect */}
          <motion.button
            onClick={openCalendly}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 bg-red text-white font-heading font-bold text-sm tracking-[0.15em] uppercase overflow-hidden rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-3">
              Réserver un appel
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-hover to-red"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Secondary CTA - Outline with glow */}
          <Link
            href="#portfolio"
            className="group relative px-10 py-5 border border-white/30 text-white font-heading font-semibold text-sm tracking-[0.15em] uppercase overflow-hidden transition-colors duration-300 hover:border-teal/50 rounded-sm"
          >
            <span className="relative z-10 group-hover:text-teal transition-colors duration-300">
              Voir nos projets
            </span>
            <motion.div
              className="absolute inset-0 bg-teal/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>

        {/* Scroll indicator - Elegant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-beige to-transparent pointer-events-none" />
    </section>
  );
}
