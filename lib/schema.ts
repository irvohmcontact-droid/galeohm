import { siteConfig } from '@/config/site'
import { BlogArticle } from '@/config/blog'
import { CityData } from '@/config/cities'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: 'FR',
    },
    areaServed: siteConfig.zones.map((zone) => ({
      '@type': 'AdministrativeArea',
      name: zone,
    })),
    priceRange: '€€',
    knowsAbout: [
      'Borne de recharge électrique',
      'Installation IRVE',
      'Wallbox',
      'Délestage dynamique',
    ],
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

export function articleSchema(article: BlogArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.h1,
    description: article.description,
    datePublished: article.publishDate,
    dateModified: article.updatedDate || article.publishDate,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/conseils/${article.slug}`,
    },
  }
}

export function serviceSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: title,
    description: description,
    provider: {
      '@type': 'Electrician',
      name: siteConfig.name,
    },
    areaServed: {
      '@type': 'State',
      name: 'Île-de-France',
    },
    url: `${siteConfig.url}${url}`,
  }
}
