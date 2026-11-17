"use client";

import { ArrowRight, Zap, Shield, Target } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PARTNERSHIP_PERKS = [
  {
    title: "Marque Blanche",
    description: "Intégration invisible dans vos processus. Livraison sous votre nom.",
    icon: Shield,
  },
  {
    title: "Délai Express",
    description: "Une équipe agile capable de respecter vos deadlines les plus serrées.",
    icon: Zap,
  },
  {
    title: "Marges Préservées",
    description: "Une organisation optimisée pour vous permettre de rester compétitif.",
    icon: Target,
  },
];

export default function B2BPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 lg:px-12 bg-navy overflow-hidden">
      {/* Background pattern - luxury grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(80, 118, 135, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(80, 118, 135, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red/5 rounded-full blur-3xl" />

      <div ref={containerRef} className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="space-y-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
            >
              <Shield className="w-4 h-4 text-teal" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/70">
                Partenariats B2B
              </span>
            </motion.div>

            {/* Title */}
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-black text-white leading-[0.9] tracking-tight">
              Agence débordée ?{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-blue">
                Déléguez sans stress.
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-white/60 font-body leading-relaxed max-w-xl">
              Nous accompagnons les agences européennes et internationales en
              sous-traitance premium et marque blanche. Qualité irréprochable,
              délais respectés.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <Link
                href="/b2b"
                className="group relative px-10 py-5 bg-red text-white font-heading font-bold text-sm tracking-[0.15em] uppercase overflow-hidden rounded-sm inline-flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explorer solutions B2B
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-hover to-red"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <Link
                href="/contact"
                className="group px-10 py-5 border border-white/30 text-white font-heading font-semibold text-sm tracking-[0.15em] uppercase transition-colors duration-300 hover:border-teal/50 hover:text-teal inline-flex items-center justify-center"
              >
                Parler de votre projet
              </Link>
            </motion.div>
          </motion.div>

          {/* Right perks */}
          <div className="space-y-6">
            {PARTNERSHIP_PERKS.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.3 + index * 0.15,
                  duration: 0.7,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-teal/40 hover:bg-white/10"
              >
                {/* Number indicator */}
                <span className="absolute top-4 right-4 text-5xl font-heading font-black text-white/5 group-hover:text-teal/10 transition-colors duration-500">
                  0{index + 1}
                </span>

                <div className="flex items-start gap-6 relative z-10">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                    className="w-14 h-14 rounded-sm bg-gradient-to-br from-teal/20 to-blue/20 flex items-center justify-center group-hover:from-teal/30 group-hover:to-blue/30 transition-all duration-500"
                  >
                    <perk.icon className="w-7 h-7 text-teal" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-teal transition-colors duration-300">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-white/50 font-medium leading-relaxed uppercase tracking-wide">
                      {perk.description}
                    </p>
                  </div>
                </div>

                {/* Accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.15, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent origin-left group-hover:via-red/50 transition-colors duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
