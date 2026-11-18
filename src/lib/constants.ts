export const SITE_CONFIG = {
    name: "Tech Bloom Agency",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://techbloom.dev",
    taglineFr: "Marketing digital & croissance locale",
    taglineEn: "Digital Marketing & Local Growth",
    description: "Agence de marketing digital à Madagascar. Stratégie, community management, SEO, publicité et création de sites orientés conversion.",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@techbloom.dev",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+261 34 10 608 02",
    // Prise de rendez-vous : page de réservation Google Agenda
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendar.app.google/CNDmBAwBJGos824k6",
    b2bEmail: process.env.NEXT_PUBLIC_B2B_EMAIL || "contact@techbloom.dev",
    b2bPhone: process.env.NEXT_PUBLIC_B2B_PHONE || "+261 34 10 608 02",
    address: "Madagascar",
    founder: "Joro Sullivan RAKOTONIAINA",
    social: {
        facebook: "https://www.facebook.com/profile.php?id=61578188340191",
        instagram: "https://www.instagram.com/tech.bloom.agency",
        linkedin: "https://www.linkedin.com/company/tech-bloom-agency",
    }
};

export const NAV_LINKS = [
    { href: "/a-propos", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Projets" },
    { href: "/b2b", label: "Partenaires" },
    { href: "/contact", label: "Contact" }
];
