"use client";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { testimonials, Testimonial } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide toutes les 5 secondes
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Pause au survol
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Navigation manuelle
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="py-32 bg-navy text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-6"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-red block">Témoignages</span>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold leading-[0.9]">
            Ils nous font <br />
            <span className="text-blue/60">évoluer.</span>
          </h2>
        </motion.div>

        {/* Container principal avec auto-slide */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => {
                if (index !== currentIndex) return null;
                return (
                  <TestimonialCard 
                    key={index} 
                    testimonial={testimonial} 
                    index={index}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Indicateurs de navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-red w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Composant individuel de témoignage
function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  // Générer des initiales colorées si pas d'avatar
  const getInitials = (name: string) => name.charAt(0).toUpperCase();
  const colors = ['bg-red', 'bg-blue', 'bg-teal'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="md:col-span-3 max-w-4xl mx-auto"
    >
      <div className="relative space-y-8">
        {/* Guillemets décoratifs */}
        <Quote className="absolute -top-8 -left-4 w-32 h-32 text-white opacity-10 pointer-events-none" strokeWidth={0.5} />
        
        {/* Citation */}
        <p className="text-2xl md:text-3xl font-heading font-medium leading-relaxed italic relative z-10">
          &quot;{testimonial.quote}&quot;
        </p>

        {/* Auteur */}
        <div className="flex items-center gap-6 pt-8 border-t border-white/20">
          {/* Avatar ou initiales */}
          {testimonial.avatar ? (
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={64}
              height={64}
              className="rounded-full object-cover ring-2 ring-white/30"
            />
          ) : (
            <div className={`w-16 h-16 ${colors[index % colors.length]} rounded-full flex items-center justify-center text-white text-2xl font-bold ring-2 ring-white/30`}>
              {getInitials(testimonial.name)}
            </div>
          )}

          {/* Infos */}
          <div className="space-y-1">
            <p className="font-bold text-lg uppercase tracking-widest">{testimonial.name}</p>
            <p className="text-sm text-white/70 font-body">{testimonial.role} - {testimonial.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
