/**
 * Utilitaires pour générer les schemas Schema.org JSON-LD
 */

import { SITE_CONFIG } from "./constants";

/**
 * Schema LocalBusiness — Pour homepage et /a-propos
 */
export const LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tech Bloom Agency",
  "alternateName": "TBA",
  "description": "Agence digitale à Madagascar : création de sites web, branding, marketing digital et community management.",
  "url": SITE_CONFIG.url || "https://tech-bloom-agency.vercel.app",
  "logo": `${SITE_CONFIG.url}/images/logo-tba.png`,
  "image": `${SITE_CONFIG.url}/og/og-home.jpg`,
  "telephone": "+261341060802",
  "email": "sullivanjoro3@gmail.com",
  "founder": {
    "@type": "Person",
    "name": "Sullivan Joro Rakotoniaina",
    "jobTitle": "Fondateur et Directeur"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toamasina",
    "addressCountry": "MG"
  },
  "areaServed": ["Madagascar", "France", "Belgique", "Suisse", "Afrique francophone"],
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    "https://facebook.com/techbloomagency",
    "https://linkedin.com/company/tech-bloom-agency"
  ]
};

/**
 * Schema AggregateRating + Reviews — Pour homepage
 */
export const AggregateRatingSchema = (ratingValue = "4.9", reviewCount = "3") => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tech Bloom Agency",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": ratingValue,
    "reviewCount": reviewCount,
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Longin — Runrobe" },
      "reviewBody": "L'efficacité du travail fourni par Tech Bloom Agency est satisfaisante.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Erica — Girl's Touch" },
      "reviewBody": "C'était d'une facilité et fluidité optimalement parfait.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }
  ]
});

/**
 * Schema Service — Pour page /services
 */
export const ServiceSchema = (service: {
  name: string;
  description: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tech Bloom Agency",
    "url": SITE_CONFIG.url || "https://tech-bloom-agency.vercel.app"
  },
  "areaServed": "Madagascar",
});

/**
 * Schema BreadcrumbList — Pour toutes les pages internes
 */
export const BreadcrumbSchema = (items: Array<{
  position: number;
  name: string;
  item?: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item) => ({
    "@type": "ListItem",
    "position": item.position,
    "name": item.name,
    "item": item.item
  }))
});

/**
 * Schema BlogPosting — Pour articles de blog
 */
export const BlogPostingSchema = (article: {
  headline: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
  dateModified: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.headline,
  "description": article.description,
  "image": article.image,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tech Bloom Agency",
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_CONFIG.url}/images/logo-tba.png`
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "url": article.url,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

/**
 * Helper pour injecter un schema JSON-LD dans une page
 */
export const createJsonLd = (schema: object) => ({
  __html: JSON.stringify(schema)
});
