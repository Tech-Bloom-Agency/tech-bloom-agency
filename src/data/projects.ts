import { Project } from "@/types";

export interface DetailedProject extends Project {
    sector: string;
    summary: string;
    context: string;
    approach: string;
    solutions: string[];
    results: string[];
    testimonial?: {
        quote: string;
        author: string;
    };
}

export const projects: DetailedProject[] = [
    {
        id: "1",
        title: "E-commerce Mode & Textile",
        sector: "Mode & Retail",
        summary: "Refonte complète d'une boutique en ligne pour une marque de prêt-à-porter.",
        description: "Boutique en ligne moderne avec système de paiement intégré et gestion des stocks.",
        category: "E-commerce",
        image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Next.js", "Shopify", "UI/UX"],
        link: "/portfolio/ecommerce-textile",
        context: "La marque souhaitait moderniser son image et augmenter son taux de conversion mobile.",
        approach: "Analyse du parcours utilisateur et mise en place d'un design 'mobile-first' épuré.",
        solutions: ["Développement Next.js", "Intégration Stripe", "Optimisation SEO"],
        results: ["+45% de conversion", "Temps de chargement divisé par 3"],
        testimonial: {
            quote: "Une équipe à l'écoute qui a su transformer notre vision en une plateforme performante.",
            author: "Julie, Fondatrice de Mode-Eco"
        }
    },
    {
        id: "2",
        title: "App de Gestion PME",
        sector: "Services B2B",
        summary: "Automatisation des processus internes pour une entreprise de logistique.",
        description: "Outil de gestion interne pour PME avec tableau de bord analytique.",
        category: "Application web",
        image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "/portfolio/app-gestion",
        context: "L'entreprise gérait ses stocks sur Excel, ce qui entraînait de nombreuses erreurs.",
        approach: "Audit des processus et développement d'une solution SaaS sur-mesure.",
        solutions: ["Dashboard Temps Réel", "Système d'Alertes", "API Rest"],
        results: ["Gain de temps de 15h/semaine", "Erreurs de stock réduites de 90%"],
        testimonial: {
            quote: "L'outil a révolutionné notre quotidien. On ne pourrait plus s'en passer.",
            author: "Marc, Gérant Logis-Tech"
        }
    },
    {
        id: "3",
        title: "Identité Visuelle Tech",
        sector: "Technologie",
        summary: "Création d'une image de marque forte pour une startup en cybersécurité.",
        description: "Création complète de l'identité de marque d'une startup tech.",
        category: "Branding",
        image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Branding", "Logo", "Design System"],
        link: "/portfolio/branding-startup",
        context: "Besoin de transmettre confiance et innovation pour une levée de fonds.",
        approach: "Recherche sur la psychologie des couleurs et création d'un logo iconique.",
        solutions: ["Logo & Charte", "Supports Pitchdeck", "Design Web"],
        results: ["Levée de fonds réussie", "Cohérence de marque sur tous les supports"],
        testimonial: {
            quote: "Notre nouvelle identité nous a permis de nous démarquer immédiatement sur le marché.",
            author: "Sarah, CTO de Cyber-Guard"
        }
    }
];
