"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/data/services";
import { ArrowUpRight, Code, Palette, TrendingUp, Users, Wrench, FileSearch } from "lucide-react";
import Link from "next/link";

// Map icon names to components
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Code,
  Palette,
  TrendingUp,
  Users,
  Wrench,
  FileSearch,
};

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    duration: string;
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative"
    >
      <Link href={`/services#${service.id}`}>
        <div className="relative p-8 md:p-10 bg-white border border-gray/10 transition-all duration-500 hover:border-teal/30 hover:shadow-2xl hover:shadow-teal/5">
          {/* Number indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className="absolute top-6 right-6 text-6xl font-heading font-black text-gray/5 group-hover:text-teal/10 transition-colors duration-500"
          >
            0{index + 1}
          </motion.div>

          {/* Icon */}
          <div className="mb-8">
            <div className="relative inline-flex items-center justify-center w-16 h-16">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-navy to-blue rounded-lg opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                whileHover={{ rotate: 5, scale: 1.05 }}
              />
              <span className="relative text-3xl text-navy">
                {(() => {
                  const IconComponent = iconMap[service.icon];
                  return IconComponent ? <IconComponent className="w-8 h-8" /> : <span>✦</span>;
                })()}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-heading font-bold text-navy mb-4 group-hover:text-blue transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray font-body leading-relaxed mb-6">
            {service.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-red group-hover:text-red-hover transition-colors duration-300">
            <span>Découvrir</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red to-transparent origin-center group-hover:via-teal transition-colors duration-500"
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default function HomeServices() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6 lg:px-12 bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-beige to-transparent" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-red mb-4">
              Nos Services
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-navy leading-[0.9] tracking-tight">
              L&apos;excellence
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-teal">
                à chaque pixel
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-lg text-gray font-body leading-relaxed max-w-md">
              De la stratégie à l&apos;exécution, nous créons des expériences digitales
              qui marquent les esprits et génèrent des résultats mesurables.
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-5 bg-navy text-white font-heading font-bold text-sm tracking-[0.15em] uppercase hover:bg-blue transition-colors duration-300"
          >
            Voir tous les services
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

