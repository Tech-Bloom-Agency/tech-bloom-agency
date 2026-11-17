export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  category: string;
  shortDesc: string;
  description: string;
  images: string[];
  stack: string[];
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    website?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  results: string[];
  year: number;
}

export const portfolioData: PortfolioProject[] = [
  {
    slug: "ecommerce-mode-textile",
    title: "E-commerce Mode & Textile",
    client: "Mode-Eco",
    category: "E-commerce",
    shortDesc: "Refonte complète d'une boutique en ligne pour une marque de prêt-à-porter.",
    description: "Boutique en ligne moderne avec système de paiement intégré et gestion des stocks. Nous avons repensé l'ensemble du parcours utilisateur pour optimiser le taux de conversion mobile.",
    images: [
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    stack: ["Next.js", "Shopify", "Tailwind CSS", "Stripe"],
    testimonial: {
      quote: "Une équipe à l'écoute qui a su transformer notre vision en une plateforme performante.",
      author: "Julie",
      role: "Fondatrice de Mode-Eco"
    },
    results: ["+45% de conversion", "Temps de chargement ÷3", "+80% trafic mobile"],
    year: 2025
  },
  {
    slug: "app-gestion-pme",
    title: "App de Gestion PME",
    client: "Logis-Tech",
    category: "Application web",
    shortDesc: "Automatisation des processus internes pour une entreprise de logistique.",
    description: "Outil de gestion interne pour PME avec tableau de bord analytique. L'entreprise gérait ses stocks sur Excel, ce qui entraînait de nombreuses erreurs. Nous avons développé une solution SaaS sur-mesure.",
    images: [
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    testimonial: {
      quote: "L'outil a révolutionné notre quotidien. On ne pourrait plus s'en passer.",
      author: "Marc",
      role: "Gérant Logis-Tech"
    },
    results: ["Gain de 15h/semaine", "Erreurs stock -90%", "ROI en 3 mois"],
    year: 2025
  },
  {
    slug: "branding-startup-tech",
    title: "Identité Visuelle Tech",
    client: "Cyber-Guard",
    category: "Branding",
    shortDesc: "Création d'une image de marque forte pour une startup en cybersécurité.",
    description: "Création complète de l'identité de marque d'une startup tech. Besoin de transmettre confiance et innovation pour une levée de fonds. Recherche sur la psychologie des couleurs et création d'un logo iconique.",
    images: [
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    stack: ["Figma", "Adobe Illustrator", "Brand Strategy"],
    testimonial: {
      quote: "Notre nouvelle identité nous a permis de nous démarquer immédiatement sur le marché.",
      author: "Sarah",
      role: "CTO de Cyber-Guard"
    },
    results: ["Levée de fonds réussie", "Cohérence 100%", "Reconnaissance marque +60%"],
    year: 2024
  },
  {
    slug: "marketing-digital-bio",
    title: "Marketing Digital Bio",
    client: "L'Atelier Bio",
    category: "Marketing digital",
    shortDesc: "Stratégie marketing 360° pour une marque de produits biologiques.",
    description: "Déploiement d'une stratégie marketing multi-canaux : SEO, Google Ads, Social Media. Augmentation significative de la visibilité et du trafic qualifié.",
    images: [
      "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    stack: ["Google Analytics", "SEMrush", "Meta Ads", "Content Strategy"],
    testimonial: {
      quote: "Mon site web est magnifique et mes ventes ont décollé !",
      author: "Sophie",
      role: "Gérante - L'Atelier Bio"
    },
    results: ["+120% trafic organique", "+85% conversions", "ROAS 4.5x"],
    year: 2025
  },
  {
    slug: "community-management-resto",
    title: "Community Management Resto",
    client: "Le Gourmet",
    category: "Community management",
    shortDesc: "Gestion complète des réseaux sociaux pour un restaurant gastronomique.",
    description: "Création de contenu, planning éditorial, engagement communautaire et reporting mensuel. Transformation digitale complète de la présence en ligne.",
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    stack: ["Instagram", "Facebook", "Canva Pro", "Later"],
    testimonial: {
      quote: "Le community management a transformé notre présence en ligne.",
      author: "Thomas",
      role: "Directeur - Le Gourmet"
    },
    results: ["+5K abonnés", "+40% engagement", "Réservations +55%"],
    year: 2025
  },
  {
    slug: "runrobe",
    title: "RunRobe",
    client: "RunRobe",
    category: "Community management",
    shortDesc: "Gestion des réseaux sociaux pour une boutique de robes de mariée et de soirée à Tamatave.",
    description: "Gestion complète des réseaux sociaux pour RunRobe, une boutique spécialisée dans les robes de mariée, classiques, de soirée et de tennis à Tamatave. Création de contenu visuel attractif, stratégie de croissance ciblée et engagement communautaire local.",
    images: [
      "/RunRobe.jpeg"
    ],
    stack: ["Facebook", "Community Management", "Contenu Visuel", "Marketing Local"],
    socialLinks: {
      facebook: "https://web.facebook.com/runrobe.tamatave"
    },
    results: ["Croissance de la communauté locale", "Engagement renforcé avec les clientes", "Visibilité accrue pour les événements spéciaux"],
    year: 2026
  },
  {
    slug: "l-homme-imparfait",
    title: "L'Homme Imparfait",
    client: "L'Homme Imparfait",
    category: "Community management",
    shortDesc: "Gestion des réseaux sociaux pour une page de développement personnel.",
    description: "Gestion complète des réseaux sociaux pour L'Homme Imparfait, une page dédiée au développement personnel et à la croissance individuelle.",
    images: [
      "/L'homme imparfait.jpeg"
    ],
    stack: ["Facebook", "Développement Personnel", "Contenu Éducatif"],
    socialLinks: {
      facebook: "https://web.facebook.com/profile.php?id=61567011397577"
    },
    results: ["Communauté engagée", "Contenu partagé régulièrement", "Impact positif sur les followers"],
    year: 2026
  },
  {
    slug: "girls-touch-erica",
    title: "Girl's Touch Erica",
    client: "Girl's Touch Erica",
    category: "Community management",
    shortDesc: "Gestion des réseaux sociaux pour une page de coaching féminin.",
    description: "Gestion complète des réseaux sociaux pour Girl's Touch Erica, une page dédiée au coaching féminin, à l'autonomisation et au développement personnel des femmes.",
    images: [
      "/Girl's touc Erica.jpeg"
    ],
    stack: ["Facebook", "Coaching Féminin", "Empowerment"],
    socialLinks: {
      facebook: "https://web.facebook.com/profile.php?id=100086552594108"
    },
    results: ["Communauté féminine forte", "Contenu inspirant", "Engagement significatif"],
    year: 2026
  }
];

// Extraire toutes les catégories uniques
export const categories = Array.from(
  new Set(portfolioData.map((p) => p.category))
);
