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
    id: "cm",
    title: "Community Manager",
    description: "Gestion des publications sur les réseaux sociaux pour maintenir une présence active, cohérente et crédible.",
    icon: "Users",
    features: [
      "Planification des publications",
      "Création visuelle et rédaction",
      "Gestion quotidienne des réseaux",
      "Cohérence de marque",
      "Suivi d'engagement"
    ],
    duration: "Mensuel"
  },
  {
    id: "smm",
    title: "Social Media Manager",
    description: "Gestion stratégique de la présence sur les réseaux sociaux pour attirer, engager et convertir votre audience.",
    icon: "TrendingUp",
    features: [
      "Stratégie social media",
      "Positionnement de marque",
      "Pilotage de contenus",
      "Ciblage et performance",
      "Optimisation continue"
    ],
    duration: "Mensuel"
  },
  {
    id: "creation-web",
    title: "Création de site web",
    description: "Création de sites web modernes et orientés conversion pour donner à votre business une présence digitale crédible.",
    icon: "Code",
    features: [
      "Sites vitrine premium",
      "Landing pages de conversion",
      "Design responsive",
      "UX pensée pour les visiteurs",
      "Mise en ligne et suivi"
    ],
    duration: "2-4 semaines"
  },
  {
    id: "refonte-web",
    title: "Refonte de site web",
    description: "Refonte de votre site pour améliorer son image, son message et son efficacité commerciale.",
    icon: "Palette",
    features: [
      "Audit du site actuel",
      "Refonte structurelle",
      "Amélioration du parcours client",
      "Mise à jour visuelle",
      "Optimisation des conversions"
    ],
    duration: "2-6 semaines"
  },
  {
    id: "accompagnement-digital",
    title: "Accompagnement digital",
    description: "Un accompagnement stratégique pour éclairer vos décisions, faire grandir votre visibilité et exploiter le digital à bon escient.",
    icon: "Search",
    features: [
      "Conseil stratégique",
      "Diagnostic digital",
      "Plan d’action sur mesure",
      "Suivi de performance",
      "Accompagnement personnalisé"
    ],
    duration: "Selon le besoin"
  },
  {
    id: "contenus",
    title: "Services annexes : création de contenus",
    description: "Prise de photo et de vidéos, avec ou sans publication, pour donner vie à votre marque et soutenir votre présence digitale.",
    icon: "Camera",
    features: [
      "Prise de photos",
      "Création de vidéos",
      "Contenus pour les réseaux",
      "Publication ou livraison à part",
      "Supports visuels sur mesure"
    ],
    duration: "Selon le projet"
  }
];
