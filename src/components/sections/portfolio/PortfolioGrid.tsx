"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, portfolioData, PortfolioProject } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  // Filtrage client-side
  const filteredProjects = activeCategory === "Tous"
    ? portfolioData
    : portfolioData.filter((project) => project.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* Filtres Pills */}
      <div className="flex flex-wrap gap-3 justify-center">
        <FilterPill
          label="Tous"
          isActive={activeCategory === "Tous"}
          onClick={() => setActiveCategory("Tous")}
        />
        {categories.map((category) => (
          <FilterPill
            key={category}
            label={category}
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      {/* Grid avec animations */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-fill minmax(300px, 1fr) gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// Composant Filter Pill
function FilterPill({
  label,
  isActive,
  onClick
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
        isActive
          ? "bg-navy text-white shadow-md scale-105"
          : "bg-gray/10 text-gray hover:bg-gray/20"
      }`}
    >
      {label}
    </button>
  );
}

// Composant Portfolio Card
function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer"
    >
      <Link href={`/portfolio/${project.slug}`}>
        {/* Container Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-gray/10 shadow-sm group-hover:shadow-xl transition-all duration-500">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay teal au hover */}
          <div className="absolute inset-0 bg-teal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm uppercase tracking-widest mb-2">
                {project.category}
              </p>
              <h3 className="text-white text-2xl font-heading font-bold mb-4">
                {project.title}
              </h3>
              <span className="inline-flex items-center text-white text-xs font-bold uppercase tracking-widest border-2 border-white px-6 py-3 rounded-full">
                Voir le projet
              </span>
            </div>
          </div>
        </div>

        {/* Infos Projet */}
        <div className="mt-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-red">
              {project.category}
            </span>
            <span className="text-xs text-gray font-medium">{project.year}</span>
          </div>
          <h3 className="font-heading font-bold text-2xl text-blue group-hover:text-red transition-colors">
            {project.title}
          </h3>
          <p className="text-gray text-sm font-medium leading-relaxed line-clamp-2">
            {project.shortDesc}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="text-[10px] uppercase tracking-wider px-3 py-1 bg-gray/10 text-gray rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.socialLinks && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.socialLinks.facebook && (
                <a 
                  href={project.socialLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[10px] uppercase tracking-wider px-3 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                  Facebook
                </a>
              )}
              {/* Site livré et public : la preuve la plus directe. */}
              {project.socialLinks.website && (
                <span className="inline-flex items-center rounded-full bg-teal/10 px-3 py-1 text-[10px] uppercase tracking-wider text-teal">
                  Site en ligne
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
