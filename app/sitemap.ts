import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { getAllCitySlugs } from '@/config/cities'
import { getAllArticleSlugs } from '@/config/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static main pages
  const staticPages = [
    '',
    '/borne-recharge',
    '/installation-borne-recharge',
    '/borne-recharge-maison',
    '/borne-recharge-copropriete',
    '/borne-recharge-entreprise',
    '/prix-borne-recharge',
    '/aides-borne-recharge',
    '/delestage-dynamique',
    '/borne-recharge-7kw',
    '/borne-recharge-22kw',
    '/faq',
    '/contact',
    '/professionnels',
    '/conseils',
    '/mentions-legales',
    '/politique-confidentialite',
    '/cgv',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // City Local SEO pages
  const cityPages = getAllCitySlugs().map((slug) => ({
    url: `${baseUrl}/installation-borne-recharge/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog article pages
  const blogPages = getAllArticleSlugs().map((slug) => ({
    url: `${baseUrl}/conseils/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...cityPages, ...blogPages]
}
