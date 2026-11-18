import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Projets & Réalisations | Tech Bloom Agency",
  description: "Découvrez nos réalisations : sites web, identité visuelle et stratégies marketing pour entrepreneurs et PME malgaches et internationaux.",
  keywords: [
    "réalisations agence digitale Madagascar",
    "portfolio web Madagascar",
    "exemples sites entreprises Madagascar",
    "création site web Madagascar",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Portfolio — Tech Bloom Agency",
    description: "Sites web, branding et marketing digital pour PME et entrepreneurs.",
    url: "/portfolio",
    siteName: "Tech Bloom Agency",
    images: [{ url: "/og/og-portfolio.jpg", width: 1200, height: 630, alt: "Portfolio Tech Bloom Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Tech Bloom Agency",
    description: "Réalisations web, branding et marketing digital.",
    images: ["/og/og-portfolio.jpg"],
  },
  alternates: { canonical: "/portfolio" },
  robots: { index: true, follow: true },
};

export default function PortfolioPage() {
  return (
    <PageWrapper>
      {/* Luxury Hero */}
      <PageHero
        title="Nos réalisations"
        description="Découvrez comment Tech Bloom Agency transforme les visions de ses clients en succès digitaux concrets : sites web, branding, marketing et optimisation."
      />

      {/* Portfolio Grid avec Filtres */}
      <section className="py-32 px-6 lg:px-12 bg-beige">
        <PortfolioGrid />
      </section>
    </PageWrapper>
  );
}

