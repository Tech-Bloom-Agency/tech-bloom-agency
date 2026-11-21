"use client";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

export default function PortfolioPreview() {
  const featuredProjects = portfolioData.slice(0, 3);

  return (
    <Section id="portfolio" padding="lg" className="bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
      >
        <div className="max-w-2xl space-y-6">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-red block">Portfolio</span>
          <h2 className="text-4xl lg:text-7xl font-heading font-bold text-blue leading-[0.9]">
            Dernières <br />
            <span className="text-navy opacity-50">éclosions.</span>
          </h2>
          <p className="text-lg text-gray font-medium leading-relaxed">
            Découvrez les produits digitaux que nous avons conçus et 
            développés avec passion pour nos clients.
          </p>
        </div>
        <Link
          href="/portfolio"
          className="group inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] text-blue hover:text-red transition-colors pb-2 border-b-2 border-gray/30 hover:border-red"
        >
          <span>Tout le portfolio</span>
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </motion.div>

      {/* Grille CSS pure - 3 colonnes desktop, 1 mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            className="group"
          >
            {/* Carte entière cliquable : l'appel à l'action était un <button>
                sans handler, enfermé dans un survol — inerte au doigt. */}
            <Link
              href={`/portfolio/${project.slug}`}
              className="block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
            >
            {/* Container image avec overlay */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-gray/10 shadow-sm group-hover:shadow-xl transition-all duration-500">
              {project.images.length > 0 ? (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col justify-end bg-navy p-6">
                  <span className="font-body text-[10px] uppercase tracking-[0.25em] text-teal">
                    {project.category}
                  </span>
                  <span className="mt-2 font-heading text-xl font-bold leading-tight text-white">
                    {project.title}
                  </span>
                </div>
              )}
              
              {/* Overlay teal au hover */}
              <div className="absolute inset-0 bg-teal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-white text-2xl font-heading font-bold mb-4">{project.title}</h3>
                  <span className="inline-flex items-center rounded-full border-2 border-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-white">
                    Voir le projet
                  </span>
                </div>
              </div>
            </div>

            {/* Infos projet */}
            <div className="mt-8 space-y-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-red">
                {project.category}
              </span>
              <h3 className="font-heading font-bold text-2xl text-blue group-hover:text-red transition-colors">
                {project.title}
              </h3>
              <p className="text-gray text-xs font-medium leading-relaxed line-clamp-2">
                {project.shortDesc}
              </p>
            </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
