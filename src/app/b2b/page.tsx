import B2BHero from "@/components/sections/b2b/B2BHero";
import B2BChallenges from "@/components/sections/b2b/B2BChallenges";
import B2BSolution from "@/components/sections/b2b/B2BSolution";
import B2BProcess from "@/components/sections/b2b/B2BProcess";
import B2BPricing from "@/components/sections/b2b/B2BPricing";
import B2BPortfolio from "@/components/sections/b2b/B2BPortfolio";
import B2BContactForm from "@/components/sections/b2b/B2BContactForm";
import B2BStack from "@/components/sections/b2b/B2BStack";
import PageWrapper from "@/components/layout/PageWrapper";
import type { Metadata } from "next";

/**
 * La page n'avait ni titre ni description : elle était marquée "use client"
 * alors qu'elle ne fait que composer, ce qui interdit d'exporter `metadata`.
 * Elle imbriquait aussi un second <main> dans celui du layout.
 */
export const metadata: Metadata = {
    title: "Partenaire technique en marque blanche pour agences web",
    description:
        "Tech Bloom Agency développe en marque blanche pour les agences francophones : sites, e-commerce, applications métier, refontes et maintenance. Renfort ponctuel, équipe dédiée ou projet au forfait.",
    alternates: { canonical: "/b2b" },
    openGraph: {
        title: "Partenaire technique en marque blanche | Tech Bloom Agency",
        description:
            "Vous signez les projets, nous écrivons le code. Développement en marque blanche pour les agences web francophones.",
        url: "/b2b",
        type: "website",
        locale: "fr_FR",
    },
};

export default function B2BPage() {
    return (
        <PageWrapper>
            <B2BHero />
            <B2BChallenges />
            <B2BSolution />
            <B2BStack />
            <B2BProcess />
            <B2BPricing />
            <B2BPortfolio />
            <B2BContactForm />
        </PageWrapper>
    );
}
