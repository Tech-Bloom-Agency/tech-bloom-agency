export const SITE_CONFIG = {
    name: "Tech Bloom Agency",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://tech-bloom-agency.vercel.app",
    taglineFr: "Marketing digital & croissance locale",
    taglineEn: "Digital Marketing & Local Growth",
    description: "Agence de marketing digital à Madagascar. Stratégie, community management, SEO, publicité et création de sites orientés conversion.",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sullivanjoro3@gmail.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+261 34 10 608 02",
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/sullivan_techbloomagency",
    b2bEmail: process.env.NEXT_PUBLIC_B2B_EMAIL || "sullivanjoro3@gmail.com",
    b2bPhone: process.env.NEXT_PUBLIC_B2B_PHONE || "+261 34 10 608 02",
    address: "Toamasina, Madagascar",
    founder: "Joro Sullivan RAKOTONIAINA",
    social: {
        facebook: "https://www.facebook.com/profile.php?id=61578188340191",
        instagram: "https://www.instagram.com/tech.bloom.agency",
        linkedin: "https://www.linkedin.com/company/tech-bloom-agency",
    }
};

export const SERVICES = [
    {
        id: "web-development",
        title: "Création de sites web",
        description: "Sites vitrine, e-commerce, applications web et landing pages performantes adaptées à vos besoins.",
        icon: "Code",
        features: [
            "Sites vitrine professionnels",
            "Boutiques e-commerce",
            "Applications web sur mesure",
            "Landing pages optimisées",
            "Design responsive"
        ]
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
        ]
    },
    {
        id: "marketing",
        title: "Marketing digital",
        description: "Stratégies marketing performantes pour augmenter votre visibilité et vos conversions.",
        icon: "TrendingUp",
        features: [
            "SEO & référencement naturel",
            "Publicité en ligne (Ads)",
            "Stratégie de contenu",
            "Analyse de performance",
            "Optimisation des conversions"
        ]
    },
    {
        id: "community",
        title: "Community management",
        description: "Gestion professionnelle de vos réseaux sociaux pour engager votre audience.",
        icon: "Users",
        features: [
            "Gestion des réseaux sociaux",
            "Création de contenu",
            "Planning éditorial",
            "Engagement communautaire",
            "Reporting mensuel"
        ]
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
        ]
    },
    {
        id: "consulting",
        title: "Audit & Accompagnement",
        description: "Expertise et conseils stratégiques pour optimiser votre présence digitale.",
        icon: "Search",
        features: [
            "Audit digital complet",
            "Conseil stratégique",
            "Formation équipes",
            "Accompagnement personnalisé",
            "Roadmap digitale"
        ]
    }
];

export const VALUES = [
    {
        title: "Innovation",
        description: "Utilisation des technologies modernes et de l'IA comme leviers de croissance pour propulser vos projets digitaux.",
        icon: "Chart-no-axes-combined"
    },
    {
        title: "Humanisme",
        description: "Accompagnement personnalisé et à l'écoute, car chaque projet mérite une attention humaine et bienveillante.",
        icon: "Heart-handshake"
    },
    {
        title: "Performance",
        description: "Orientation résultats et croissance tangible. Nous mesurons notre succès à travers le vôtre.",
        icon: "Target"
    }
];

export const STATS = [
    {
        value: "90%",
        label: "Satisfaction client"
    },
    {
        value: "20+",
        label: "Projets livrés"
    },
    {
        value: "1+",
        label: "Ans d'expérience"
    }
];

export const NAV_LINKS = [
    { href: "/a-propos", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Projets" },
    { href: "/b2b", label: "Partenaires" },
    { href: "/contact", label: "Contact" }
];
