import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // La page d'atterrissage de campagne est volontairement hors sitemap et
  // hors index : elle est atteignable par lien direct uniquement, pour que le
  // site ne se présente pas comme une agence spécialisée dans un secteur.
  const routes = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.8 },
    { path: '/portfolio', priority: 0.8 },
    { path: '/b2b', priority: 0.8 },
    { path: '/a-propos', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/blog', priority: 0.6 },
    { path: '/mentions-legales', priority: 0.3 },
  ].map((route) => ({
    url: `${SITE_CONFIG.url}${route.path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }))

  const articles = blogPosts.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [...routes, ...articles]
}
