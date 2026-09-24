"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function B2BHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(80, 118, 135, 0.4) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(56, 75, 112, 0.3) 0%, transparent 40%),
          radial-gradient(ellipse at 50% 50%, rgba(13, 42, 64, 0.8) 0%, rgba(13, 42, 64, 1) 70%),
          linear-gradient(180deg, #0D2A40 0%, #1a3a52 50%, #0D2A40 100%)
        `,
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating shapes */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
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
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
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

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 text-center space-y-12"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-red bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10">
            Votre présence digitale mérite mieux
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[clamp(2.5rem,8vw,5.5rem)] font-heading font-black leading-[0.9] tracking-tight text-white mb-8"
        >
          Votre image.<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-blue">
            Votre voix. Votre croissance.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto font-body font-medium leading-relaxed"
        >
          On clarifie votre message. On structure votre présence. On donne à votre marque le niveau qu’elle mérite.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
        >
          <button className="group relative px-10 py-5 bg-red text-white font-heading font-bold text-sm tracking-[0.15em] uppercase overflow-hidden rounded-sm">
            <span className="relative z-10">Parler de votre projet</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-hover to-red"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
          <button className="group px-10 py-5 border border-white/30 text-white font-heading font-semibold text-sm tracking-[0.15em] uppercase transition-colors duration-300 hover:border-teal/50 hover:text-teal">
            Nos réalisations
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-beige to-transparent pointer-events-none" />
    </section>
  );
}