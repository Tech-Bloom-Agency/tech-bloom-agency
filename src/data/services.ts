export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  duration: string; // Durée estimée
}

export const services: Service[] = [
  {
    id: "marketing",
    title: "Marketing digital",
    description: "Stratégies marketing performantes pour augmenter votre visibilité, votre trafic et vos conversions.",
    icon: "TrendingUp",
    features: [
      "SEO & référencement naturel",
      "Publicité en ligne (Ads)",
      "Stratégie de contenu",
      "Analyse de performance",
      "Optimisation des conversions"
    ],
    duration: "Mensuel"
  },
  {
    id: "community",
    title: "Community management",
    description: "Gestion professionnelle de vos réseaux sociaux pour engager votre audience et transformer l’intérêt en clients.",
    icon: "Users",
    features: [
      "Gestion des réseaux sociaux",
      "Création de contenu",
      "Planning éditorial",
      "Engagement communautaire",
      "Reporting mensuel"
    ],
    duration: "Mensuel"
  },
  {
    id: "creation-web",
    title: "Création de sites web",
    description: "Sites vitrine et landing pages orientés acquisition pour convertir plus efficacement les visiteurs.",
    icon: "Code",
    features: [
      "Sites vitrine professionnels",
      "Boutiques e-commerce",
      "Applications web sur mesure",
      "Landing pages optimisées",
      "Design responsive"
    ],
    duration: "2-4 semaines"
  },
  {
    id: "branding",
    title: "Branding & Identité visuelle",
    description: "Construction d'une identité de marque forte et cohérente qui reflète vos valeurs.",
    icon: "Palette",
    features: [
      "Création de logo",
      "Charte graphique complète",
      "Identité visuelle",
      "Guide de style",
      "Supports de communication"
    ],
    duration: "1-2 semaines"
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "Accompagnement continu pour assurer la performance et la sécurité de vos outils digitaux.",
    icon: "Shield",
    features: [
      "Maintenance technique",
      "Mises à jour régulières",
      "Support réactif",
      "Surveillance 24/7",
      "Sauvegardes automatiques"
    ],
    duration: "Mensuel"
  },
  {
    id: "audit",
    title: "Audit & Accompagnement",
    description: "Expertise et conseils stratégiques pour optimiser votre présence digitale.",
    icon: "Search",
    features: [
      "Audit digital complet",
      "Conseil stratégique",
      "Formation équipes",
      "Accompagnement personnalisé",
      "Roadmap digitale"
    ],
    duration: "1 semaine"
  }
];
