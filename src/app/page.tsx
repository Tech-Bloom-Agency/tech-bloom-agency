import Hero from "@/components/sections/home/Hero";
import StatsSection from "@/components/sections/home/StatsSection";
import HomeServices from "@/components/sections/home/HomeServices";
import PortfolioPreview from "@/components/sections/home/PortfolioPreview";
import Testimonials from "@/components/sections/home/Testimonials";
import ToolsSection from "@/components/sections/home/ToolsSection";
import B2BPreview from "@/components/sections/home/B2BPreview";
import PageWrapper from "@/components/layout/PageWrapper";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Bloom Agency — Marketing Digital Madagascar | SEO, Social Media, Sites Web",
  description: "Agence marketing digital à Madagascar. SEO, community management, publicité, branding et création de sites web orientés conversion.",
  keywords: [
    "marketing digital Madagascar",
    "community manager Madagascar",
    "agence SEO Madagascar",
    "création site web Madagascar",
    "publicité Facebook Madagascar",
    "agence digitale Madagascar",
  ],
  openGraph: {
    title: "Tech Bloom Agency — Marketing Digital Madagascar",
    description: "SEO, community management, publicité et création de sites web orientés vente à Madagascar.",
    url: "/",
    siteName: "Tech Bloom Agency",
    images: [{ url: "/og/og-home.jpg", width: 1200, height: 630, alt: "Tech Bloom Agency" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Bloom Agency — Marketing Digital Madagascar",
    description: "SEO, social media, publicité et sites web orientés conversion à Madagascar.",
    images: ["/og/og-home.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

// Schema.org JSON-LD
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tech Bloom Agency",
  "alternateName": "TBA",
  "description": "Agence digitale à Madagascar : création de sites web, branding, marketing digital et community management.",
  "url": "https://tech-bloom-agency.vercel.app",
  "logo": "https://tech-bloom-agency.vercel.app/images/logo-tba.png",
  "image": "https://tech-bloom-agency.vercel.app/og/og-home.jpg",
  "telephone": "+261341060802",
  "email": "sullivanjoro3@gmail.com",
  "founder": {
    "@type": "Person",
    "name": "Sullivan Joro Rakotoniaina",
    "jobTitle": "Fondateur et Directeur"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toamasina",
    "addressCountry": "MG"
  },
  "areaServed": ["Madagascar","France","Belgique","Suisse","Afrique francophone"],
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    "https://facebook.com/techbloomagency",
    "https://linkedin.com/company/tech-bloom-agency"
  ]
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tech Bloom Agency",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "3",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Longin — Runrobe" },
      "reviewBody": "L'efficacité du travail fourni par Tech Bloom Agency est satisfaisante.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Erica — Girl's Touch" },
      "reviewBody": "C'était d'une facilité et fluidité optimalement parfait.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }
  ]
};

export default function Page() {
  return (
    <PageWrapper>
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      {/* Luxury Hero with 3D animations and parallax */}
      <Hero />

      {/* Animated stats with counters */}
      <StatsSection />

      {/* Services with luxury card effects */}
      <HomeServices />

      {/* Portfolio preview */}
      <Reveal><PortfolioPreview /></Reveal>

      {/* B2B Preview - Luxury version */}
      <B2BPreview />

      {/* Testimonials */}
      <Reveal><Testimonials /></Reveal>

      {/* Tools/Stack */}
      <Reveal><ToolsSection /></Reveal>
    </PageWrapper>
  );
}
