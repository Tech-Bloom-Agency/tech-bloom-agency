export const SITE_CONFIG = {
    name: "Tech Bloom Agency",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://techbloom.dev",
    taglineFr: "Marketing digital & croissance locale",
    description: "Agence de marketing digital à Antananarivo, Madagascar. Sites web, visibilité locale et réservation en ligne pour restaurants, hôtels et PME.",

    // Adresse de contact principale (celle utilisée dans les emails signés).
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sullivan@techbloom.dev",
    // Seconde adresse, toujours active : boîte générique de l'agence.
    emailAlt: process.env.NEXT_PUBLIC_CONTACT_EMAIL_ALT || "contact@techbloom.dev",

    // Numéro affiché, et sa forme E.164 pour les liens tel: et wa.me.
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+261 34 10 608 02",
    phoneE164: "+261341060802",
    whatsapp: "261341060802",

    // Prise de rendez-vous : page de réservation Google Agenda
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendar.app.google/CNDmBAwBJGos824k6",

    b2bEmail: process.env.NEXT_PUBLIC_B2B_EMAIL || "contact@techbloom.dev",
    b2bPhone: process.env.NEXT_PUBLIC_B2B_PHONE || "+261 34 10 608 02",

    // Ville affichée et ciblée en SEO local.
    city: "Antananarivo",
    region: "Analamanga",
    country: "Madagascar",
    address: "Antananarivo, Madagascar",

    founder: "Sullivan Joro RAKOTONIAINA",
    social: {
        facebook: "https://www.facebook.com/profile.php?id=61578188340191",
        instagram: "https://www.instagram.com/tech.bloom.agency",
        linkedin: "https://www.linkedin.com/company/tech-bloom-agency",
    }
};

/** Message pré-rempli du bouton WhatsApp flottant. */
export const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Bonjour Sullivan, je souhaite discuter d'un projet digital avec TBA."
)}`;

export const NAV_LINKS = [
    { href: "/restaurants-hotels", label: "Restaurants & Hôtels" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Projets" },
    { href: "/b2b", label: "Partenaires" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" }
];
