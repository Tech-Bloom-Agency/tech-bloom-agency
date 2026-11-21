import Hero from "@/components/sections/home/Hero";
import SecteursPreview from "@/components/sections/home/SecteursPreview";
import HomeServices from "@/components/sections/home/HomeServices";
import PortfolioPreview from "@/components/sections/home/PortfolioPreview";
import Testimonials from "@/components/sections/home/Testimonials";
import ToolsSection from "@/components/sections/home/ToolsSection";
import B2BPreview from "@/components/sections/home/B2BPreview";
import PageWrapper from "@/components/layout/PageWrapper";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

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

// Schema.org JSON-LD — ProfessionalService (sous-type de LocalBusiness) pour
// le référencement local à Antananarivo. L'ancien bloc publiait l'email Gmail
// personnel du fondateur, inversait son prénom et pointait vers une page
// Facebook inexistante ; il n'avait pas non plus de ville.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": SITE_CONFIG.name,
  "alternateName": "TBA",
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "logo": `${SITE_CONFIG.url}/logo/TBA-logo-horizontal.png`,
  "image": `${SITE_CONFIG.url}/og/og-home.jpg`,
  "telephone": SITE_CONFIG.phoneE164,
  "email": SITE_CONFIG.email,
  "founder": {
    "@type": "Person",
    "name": SITE_CONFIG.founder,
    "jobTitle": "Fondateur et Directeur"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": SITE_CONFIG.city,
    "addressRegion": SITE_CONFIG.region,
    "addressCountry": "MG"
  },
  "areaServed": [
    "Antananarivo",
    "Madagascar",
    "France",
    "Belgique",
    "Suisse",
    "Afrique francophone"
  ],
  "sameAs": [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.linkedin
  ]
};

export default function Page() {
  return (
    <PageWrapper>
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Luxury Hero with 3D animations and parallax */}
      <Hero />

      {/* Entrée vers l'offre restaurants & hôtels */}
      <SecteursPreview />

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
