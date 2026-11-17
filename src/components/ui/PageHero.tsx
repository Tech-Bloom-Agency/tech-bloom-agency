"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  description,
}: PageHeroProps) {
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
      className="relative pt-40 pb-32 overflow-hidden bg-navy"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
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

      {/* Animated grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating shapes */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="absolute top-20 left-[10%] w-24 h-24 border border-teal/20 rounded-full"
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
        className="absolute top-40 right-[15%] w-16 h-16 border border-red/20 rotate-45"
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
        className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-red bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10">
            {badge}
          </span>
        </motion.div>

        {/* Title with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[clamp(3rem,10vw,6rem)] font-heading font-black text-white leading-[0.9] tracking-tighter mb-6"
        >
          {title}
        </motion.h1>

        {/* Subtitle with gradient text */}
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <span
              className="text-[clamp(2rem,8vw,4rem)] font-heading font-bold text-beige leading-[0.9]"
            >
              {subtitle}
            </span>
          </motion.div>
        )}

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto font-body leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-beige to-transparent pointer-events-none" />
    </section>
  );
}
