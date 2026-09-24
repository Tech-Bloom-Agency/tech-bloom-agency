import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import FacebookPixel from "@/components/FacebookPixel";
import { Bitter, Montserrat } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { SITE_CONFIG } from "@/lib/constants";
import ScrollProgress from "@/components/ui/ScrollProgress";
import GA4Events from "@/components/GA4Events";
import BrandTransitionOverlay from "@/components/BrandTransitionOverlay";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-body",
    display: "swap",
    preload: true,
});

const bitter = Bitter({
    subsets: ["latin"],
    weight: ["400", "600", "700", "900"],
    variable: "--font-heading",
    display: "swap",
    preload: true,
});

export const metadata: Metadata = {
    title: {
        default: "Tech Bloom Agency – Agence digitale premium",
        template: `%s | ${SITE_CONFIG.name}`,
    },
    description:
        "Concevoir des produits digitaux performants. Agence experte en UX/UI, développement Next.js et stratégie SEO.",
    metadataBase: SITE_CONFIG.url ? new URL(SITE_CONFIG.url) : null,
    alternates: {
        canonical: '/',
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    },
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: SITE_CONFIG.url,
        title: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        siteName: SITE_CONFIG.name,
        images: [
            {
                url: "/og/default.jpg",
                width: 1200,
                height: 630,
                alt: SITE_CONFIG.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        images: ["/og/default.jpg"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <html lang="fr" className={`${montserrat.variable} ${bitter.variable}`}>
            <body className="bg-white text-navy min-h-screen antialiased font-body">
                <BrandTransitionOverlay />
                <ScrollProgress />
                <Header />
                <main>{children}</main>
                <Footer />
                <WhatsAppButton />
                <FacebookPixel />
                <GA4Events />
                {gaId && <GoogleAnalytics gaId={gaId} />}
            </body>
        </html>
    );
}
