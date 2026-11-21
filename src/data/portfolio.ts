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
    // Référence anonymisée à la demande de Sullivan : plateforme de
    // réservation d'un groupe de six établissements de beauté et bien-être.
    // Ni nom, ni marque, ni lien, ni visuel — `images` est vide, et
    // l'affichage retombe sur un panneau typographique.
    slug: "plateforme-reservation-beaute",
    title: "Plateforme de réservation",
    client: "Groupe de six établissements de beauté et bien-être",
    category: "Application web",
    shortDesc: "Réservation en ligne pour un groupe de six établissements de beauté et de bien-être à Madagascar.",
    description: "Six établissements réunis sur une même plateforme. Le visiteur choisit l'établissement, la prestation, le praticien puis son créneau, et reçoit sa confirmation sans passer un appel. Les équipes disposent d'un espace de gestion pour leur planning, leurs praticiens, leurs prestations et leurs rendez-vous. Déployé sur Cloudflare Workers.",
    images: [],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Cloudflare Workers"],
    // Périmètre livré, et non des chiffres de performance : aucune mesure
    // n'a été relevée.
    results: [
      "Réservation en ligne pour six établissements",
      "Planning et rendez-vous gérés par les équipes",
      "Prise de rendez-vous sans appel téléphonique"
    ],
    year: 2026
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
