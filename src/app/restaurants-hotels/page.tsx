import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import SecteurConstats from "@/components/sections/secteurs/SecteurConstats";
import FormulesTarifs from "@/components/sections/secteurs/FormulesTarifs";
import DelaiEtPaiement from "@/components/sections/secteurs/DelaiEtPaiement";
import SecteurCTA from "@/components/sections/secteurs/SecteurCTA";
import { SITE_CONFIG } from "@/lib/constants";
import { FORMULES, SECTEURS, DELAI_LIVRAISON } from "@/data/secteurs";

export const metadata: Metadata = {
  title: "Site web pour restaurants et hôtels à Antananarivo — Tarifs | Tech Bloom Agency",
  description:
    "Sites web pour restaurants et hôtels à Madagascar : bouton WhatsApp, visibilité Google locale et réservation en ligne sans commission. Trois formules à partir de 1 750 000 Ar, livrées en 14 jours ouvrés.",
  keywords: [
    "site web restaurant Antananarivo",
    "site web hôtel Madagascar",
    "création site restaurant Madagascar",
    "réservation en ligne restaurant Antananarivo",
    "réservation directe hôtel Madagascar",
    "prix site web Madagascar",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Sites web pour restaurants et hôtels — Tech Bloom Agency",
    description:
      "Trois formules claires, prix affichés en ariary, livraison en 14 jours ouvrés. WhatsApp, visibilité Google et réservation directe.",
    url: "/restaurants-hotels",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Offre restaurants et hôtels — Tech Bloom Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sites web pour restaurants et hôtels — Tech Bloom Agency",
    description:
      "Trois formules, prix affichés, livraison en 14 jours ouvrés à Antananarivo.",
    images: ["/og/default.jpg"],
  },
  alternates: { canonical: "/restaurants-hotels" },
  robots: { index: true, follow: true },
};

/**
 * Catalogue d'offres en données structurées : les prix en ariary sont ainsi
 * lisibles par Google, et non seulement par un visiteur.
 */
const offreSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Création de site web pour restaurants et hôtels",
  "provider": {
    "@type": "ProfessionalService",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.url,
    "telephone": SITE_CONFIG.phoneE164,
    "email": SITE_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": SITE_CONFIG.city,
      "addressRegion": SITE_CONFIG.region,
      "addressCountry": "MG",
    },
  },
  "areaServed": { "@type": "Country", "name": "Madagascar" },
  "audience": [
    { "@type": "Audience", "audienceType": "Restaurants" },
    { "@type": "Audience", "audienceType": "Hôtels" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Formules restaurants et hôtels",
    "itemListElement": FORMULES.map((formule) => ({
      "@type": "Offer",
      "name": formule.nom,
      "description": formule.promesse,
      "price": formule.prixAriary,
      "priceCurrency": "MGA",
      "itemOffered": {
        "@type": "Service",
        "name": formule.nom,
        "description": formule.inclus.join(" · "),
      },
    })),
  },
};

export default function RestaurantsHotelsPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offreSchema) }}
      />

      {/* Hero : le prix le plus bas et le délai sont visibles sans défiler. */}
      <section className="surface-navy-mesh pb-20 pt-36 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.3em] text-teal">
            Restaurants &amp; Hôtels · {SITE_CONFIG.city}
          </span>

          <h1 className="max-w-4xl text-balance font-heading text-[clamp(2.5rem,6.5vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.03em] text-white">
            Un site que vos clients trouvent, lisent et utilisent depuis leur
            téléphone.
          </h1>

          <p className="mt-8 max-w-2xl text-pretty font-body text-lg leading-relaxed text-beige/70 lg:text-xl">
            Bouton WhatsApp sur chaque écran, visibilité sur Google à{" "}
            {SITE_CONFIG.city}, et réservation en direct sans commission. Trois
            formules, prix affichés, livraison en {DELAI_LIVRAISON}.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-body text-sm text-beige/60">
            <span>
              À partir de{" "}
              <span className="font-semibold text-white">
                {FORMULES[0].prixAffiche}
              </span>
            </span>
            <span aria-hidden="true" className="text-beige/25">
              ·
            </span>
            <span>
              Livré en{" "}
              <span className="font-semibold text-white">{DELAI_LIVRAISON}</span>
            </span>
            <span aria-hidden="true" className="text-beige/25">
              ·
            </span>
            <span>
              Paiement en{" "}
              <span className="font-semibold text-white">3 fois</span>
            </span>
          </div>

          {/* Accès direct à son secteur : un gérant ne lit pas la page entière. */}
          <nav aria-label="Votre activité" className="mt-12 flex flex-wrap gap-4">
            {SECTEURS.map((secteur) => (
              <Link
                key={secteur.id}
                href={`#${secteur.ancre}`}
                className="inline-flex min-h-[52px] items-center border-2 border-beige/40 px-7 font-heading text-sm font-bold uppercase tracking-[0.12em] text-beige transition-colors hover:border-beige hover:bg-beige hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-beige"
              >
                Je gère un {secteur.titre.toLowerCase().replace(/s$/, "")}
              </Link>
            ))}
            <Link
              href="#formules"
              className="inline-flex min-h-[52px] items-center px-7 font-heading text-sm font-bold uppercase tracking-[0.12em] text-beige underline underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-beige"
            >
              Voir les tarifs
            </Link>
          </nav>
        </div>
      </section>

      <SecteurConstats />
      <FormulesTarifs />
      <DelaiEtPaiement />
      <SecteurCTA />
    </PageWrapper>
  );
}
