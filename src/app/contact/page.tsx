import { ContactFormWrapper } from "@/components/sections/contact/ContactFormWrapper";
import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/ui/PageHero";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Tech Bloom Agency | Madagascar",
  description: "Contactez Tech Bloom Agency pour votre projet digital. Formulaire de contact, prise de rendez-vous en ligne et coordonnées directes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Contact — Tech Bloom Agency",
    description: "Contactez-nous pour votre projet digital : sites web, branding, marketing et accompagnement à Madagascar.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Luxury Hero */}
      <PageHero
        title="Parlons de votre projet."
        description="Faites le premier pas vers une présence digitale premium. Que vous soyez une PME ou un entrepreneur, nous sommes là pour transformer vos idées en réalité."
      />

      {/* Section Principale - 2 Colonnes */}
      <section className="py-32 px-6 lg:px-12 bg-beige">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Colonne Gauche : Formulaire */}
          <div>
            <ContactFormWrapper />
          </div>

          {/* Colonne droite : coordonnées et prise de rendez-vous */}
          <div className="space-y-12">
            {/* Coordonnées */}
            <div className="bg-white p-8 rounded-md shadow-lg border border-gray/20">
              <h2 className="text-2xl font-heading font-bold text-navy mb-8">
                Coordonnées
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue to-teal rounded-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-lg font-semibold text-navy hover:text-blue transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue to-teal rounded-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray uppercase tracking-wider mb-1">
                      Téléphone
                    </p>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-lg font-semibold text-navy hover:text-blue transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue to-teal rounded-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray uppercase tracking-wider mb-1">
                      Localisation
                    </p>
                    <p className="text-lg font-semibold text-navy">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires & Réseaux */}
            <div className="bg-white p-8 rounded-md shadow-lg border border-gray/20">
              <h2 className="text-2xl font-heading font-bold text-navy mb-8">
                Horaires & Réseaux
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue to-teal rounded-md flex items-center justify-center shadow-sm">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray uppercase tracking-wider mb-1">
                      Disponibilité
                    </p>
                    <p className="text-base font-medium text-navy">
                      Lundi - Vendredi : 08h00 - 18h00
                    </p>
                    <p className="text-base font-medium text-navy">
                      Samedi : 09h00 - 12h00
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-blue to-teal rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  >
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-blue to-teal rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  >
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-blue to-teal rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  >
                    <Linkedin size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Prise de rendez-vous */}
            <div className="bg-white p-8 rounded-md shadow-lg border border-gray/20">
              <h2 className="text-2xl font-heading font-bold text-navy mb-6">
                Réserver un appel
              </h2>
              <p className="text-gray mb-6">
                Choisissez directement un créneau qui vous convient dans notre
                calendrier.
              </p>
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-block px-8 py-4 text-sm uppercase tracking-widest"
              >
                Voir les créneaux disponibles
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
