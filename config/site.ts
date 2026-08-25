// Configuration centrale du site GALEOHM
// Modifier ce fichier pour mettre à jour les coordonnées et informations de l'entreprise

export const siteConfig = {
  name: 'GALEOHM',
  tagline: 'Installation de bornes de recharge pour véhicules électriques',
  description:
    'GALEOHM installe vos bornes de recharge pour véhicules électriques. Étude personnalisée, installation professionnelle, devis gratuit en Île-de-France.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://galeohm.fr',

  // === COORDONNÉES — GALEOHM ===
  contact: {
    phone: '01 84 16 53 75',
    phoneHref: 'tel:+33184165375',
    email: 'contact@galeohm.fr',
    address: 'Adresse à compléter',
    city: 'Île-de-France',
    postalCode: '95000',
  },

  // Réseaux sociaux (laisser vide si non créés)
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },

  // Zones d'intervention principales
  zones: [
    'Paris',
    'Seine-Saint-Denis',
    "Val-d'Oise",
    'Hauts-de-Seine',
    'Yvelines',
    'Seine-et-Marne',
    'Essonne',
    'Val-de-Marne',
  ],

  // Marques de bornes installées
  brands: [
    { name: 'Tesla Wall Connector', power: '11 kW' },
    { name: 'Zaptec Go', power: '22 kW' },
    { name: 'Wallbox Pulsar Plus', power: '22 kW' },
    { name: 'Schneider Electric EVlink', power: '22 kW' },
    { name: 'Hager witty', power: '22 kW' },
    { name: "Legrand Green'up", power: '7,4 kW' },
  ],

  // Services proposés (pour navigation et SEO)
  services: [
    { title: 'Particuliers', slug: 'borne-recharge-maison' },
    { title: 'Copropriétés', slug: 'borne-recharge-copropriete' },
    { title: 'Entreprises', slug: 'borne-recharge-entreprise' },
    { title: 'Installation IRVE', slug: 'installation-borne-recharge' },
  ],

  // SEO global
  seo: {
    titleTemplate: '%s | GALEOHM',
    defaultTitle: 'GALEOHM — Installation de bornes de recharge IRVE',
    defaultDescription:
      'GALEOHM installe vos bornes de recharge pour véhicules électriques. Étude personnalisée, installation professionnelle, devis gratuit en Île-de-France.',
    ogImage: '/og-image.jpg',
    twitterHandle: '@galeohm',
    keywords: [
      'borne de recharge',
      'installation IRVE',
      'véhicule électrique',
      'borne recharge maison',
      'wallbox',
      'IRVE',
      'chargeur voiture électrique',
    ],
  },
}

export type SiteConfig = typeof siteConfig
