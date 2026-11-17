/**
 * Configuration Sitemap & Robots.txt
 *
 * Usage:
 *   1. Installer: npm install next-sitemap
 *   2. Ajouter au package.json: "postbuild": "next-sitemap"
 *   3. Build: npm run build
 */

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://tech-bloom-agency.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,

  // Pages à exclure du sitemap
  exclude: [
    "/merci",
    "/mentions-legales",
    "/politique-confidentialite",
    "/admin/*",
  ],

  // Transformation des URLs
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },

  // Configuration robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/merci",
          "/admin/",
        ],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://tech-bloom-agency.vercel.app"}/sitemap.xml`,
    ],
  },
};
