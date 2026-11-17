// @ts-check

import bundleAnalyzer from "@next/bundle-analyzer";

/**
 * Analyse du bundle : `npm run build:analyze` (ANALYZE=true)
 */
const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
        ],
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    // Security Headers
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
                    { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
                    { key: "X-DNS-Prefetch-Control", value: "on" },
                ],
            },
        ];
    },
};

export default withBundleAnalyzer(nextConfig);