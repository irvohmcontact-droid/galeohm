// Données des villes pour les pages locales SEO
// Chaque ville a un contenu différencié pour éviter le duplicate content

export interface CityData {
  slug: string
  name: string
  department: string
  region: string
  description: string
  housingTypes: string[]
  challenges: string[]
  priceRange: { min: number; max: number }
  population: string
  localFAQ: { question: string; answer: string }[]
  seoTitle: string
  seoDescription: string
}

export const cities: CityData[] = [
  {
    slug: 'paris',
    name: 'Paris',
    department: 'Paris (75)',
    region: 'Île-de-France',
    description:
      "À Paris, l'installation d'une borne de recharge présente des spécificités liées à la densité urbaine et au parc immobilier haussmannien. La majorité des installations concernent des copropriétés et des garages souterrains, nécessitant une étude technique approfondie du réseau électrique collectif et l'application du droit à la prise.",
    housingTypes: ['Appartements en copropriété', 'Garages souterrains', 'Immeubles haussmanniens', 'Résidences neuves'],
    challenges: [
      'Installations électriques vétustes dans les immeubles anciens',
      'Procédure de droit à la prise en copropriété',
      "Distances importantes entre le tableau général et l'emplacement de stationnement",
      'Coordination avec le syndic de copropriété',
    ],
    priceRange: { min: 800, max: 2500 },
    population: '2,1 millions',
    seoTitle: "Installation borne de recharge Paris (75) — Devis gratuit | GALEOHM",
    seoDescription:
      "Installez votre borne de recharge à Paris. GALEOHM intervient dans toutes les copropriétés et maisons parisiennes. Étude gratuite, droit à la prise.",
    localFAQ: [
      {
        question: "Peut-on installer une borne de recharge dans un appartement parisien ?",
        answer:
          "Oui, grâce au droit à la prise (loi ELAN), tout locataire ou copropriétaire peut demander l'installation d'une borne dans son emplacement de parking. Le syndic ne peut s'y opposer sans motif sérieux et légitime.",
      },
      {
        question: "Combien coûte une installation en copropriété à Paris ?",
        answer:
          "Le coût varie selon la distance entre le tableau électrique et votre emplacement, et l'état de l'installation collective. Comptez généralement entre 800 € et 2 500 € pour une installation individuelle en copropriété parisienne.",
      },
    ],
  },
  {
    slug: 'sarcelles',
    name: 'Sarcelles',
    department: "Val-d'Oise (95)",
    region: 'Île-de-France',
    description:
      "Sarcelles, ville résidentielle du Val-d'Oise, présente un parc immobilier mixte avec de nombreuses maisons individuelles dans le secteur de Sarcelles-Village et des grands ensembles collectifs. L'installation de bornes de recharge y est facilitée pour les maisons individuelles disposant d'un garage ou d'un emplacement privatif.",
    housingTypes: [
      'Maisons individuelles avec garage',
      'Pavillons avec allée',
      'Appartements en résidence',
      'Grands ensembles collectifs',
    ],
    challenges: [
      'Tableaux électriques anciens dans certains logements',
      'Distances variables selon la configuration du terrain',
      'Accès au réseau triphasé selon les quartiers',
    ],
    priceRange: { min: 600, max: 1800 },
    population: '59 000',
    seoTitle: "Installation borne de recharge Sarcelles (95) — Devis gratuit | GALEOHM",
    seoDescription:
      "GALEOHM installe votre borne de recharge à Sarcelles et dans le Val-d'Oise. Maisons individuelles et copropriétés. Devis gratuit.",
    localFAQ: [
      {
        question: "Intervenez-vous à Sarcelles pour l'installation d'une borne ?",
        answer:
          "Oui, GALEOHM intervient à Sarcelles et dans tout le Val-d'Oise. Nous réalisons l'étude et l'installation pour les maisons individuelles, les pavillons et les résidences collectives.",
      },
      {
        question: "Quel délai pour une installation à Sarcelles ?",
        answer:
          "Après validation du devis, nous intervenons généralement dans un délai de 1 à 3 semaines selon notre planning.",
      },
    ],
  },
  {
    slug: 'val-doise',
    name: "Val-d'Oise",
    department: "Val-d'Oise (95)",
    region: 'Île-de-France',
    description:
      "Le Val-d'Oise est un territoire à dominante pavillonnaire, idéal pour l'installation de bornes de recharge à domicile. Les maisons individuelles avec garage ou allée représentent la majorité de nos interventions dans ce département. Les conditions d'installation sont souvent favorables : tableaux récents, distances courtes, alimentation triphasée disponible dans de nombreux secteurs.",
    housingTypes: [
      'Maisons individuelles avec garage',
      'Pavillons récents',
      'Maisons de village',
      'Résidences collectives',
    ],
    challenges: [
      'Variabilité de la distance tableau/borne selon les propriétés',
      'Parfois nécessité de passer les câbles sous la terrasse ou le jardin',
    ],
    priceRange: { min: 500, max: 1600 },
    population: '1,2 million',
    seoTitle: "Installation borne de recharge Val-d'Oise (95) — Devis gratuit | GALEOHM",
    seoDescription:
      "GALEOHM installe vos bornes de recharge dans tout le Val-d'Oise (95). Maisons, pavillons, copropriétés. Étude personnalisée et devis gratuit.",
    localFAQ: [
      {
        question: "Quelles communes du Val-d'Oise couvrez-vous ?",
        answer:
          "Nous intervenons dans l'ensemble du Val-d'Oise : Cergy, Pontoise, Argenteuil, Sarcelles, Gonesse, Ermont, Enghien-les-Bains, Taverny, Montmorency et toutes les communes du département.",
      },
      {
        question: "Faut-il augmenter la puissance de son compteur pour une borne dans le 95 ?",
        answer:
          "Pas toujours. Pour une borne 7,4 kW, un compteur 9 kVA peut suffire avec un délestage dynamique. Notre technicien évalue votre installation lors de la visite technique gratuite.",
      },
    ],
  },
  {
    slug: 'ile-de-france',
    name: 'Île-de-France',
    department: 'Région',
    region: 'Île-de-France',
    description:
      "GALEOHM intervient dans toute l'Île-de-France pour l'installation de bornes de recharge pour véhicules électriques. Avec plus de 12 millions d'habitants et un parc automobile en pleine mutation vers l'électrique, la région concentre une forte demande en installation IRVE. Nous couvrons les 8 départements franciliens : Paris, Seine-et-Marne, Yvelines, Essonne, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne et Val-d'Oise.",
    housingTypes: [
      'Maisons individuelles',
      'Appartements en copropriété',
      'Résidences neuves',
      'Locaux professionnels',
    ],
    challenges: [
      "Grande diversité des configurations selon les zones (urbaine, périurbaine, rurale)",
      "Réglementations spécifiques selon les copropriétés",
      'Accès triphasé variable selon les quartiers',
    ],
    priceRange: { min: 500, max: 2500 },
    population: '12 millions',
    seoTitle: "Installation borne de recharge Île-de-France — Devis gratuit | GALEOHM",
    seoDescription:
      "GALEOHM installe vos bornes de recharge dans toute l'Île-de-France. 8 départements couverts. Étude personnalisée et devis gratuit.",
    localFAQ: [
      {
        question: "Dans quels départements d'Île-de-France intervenez-vous ?",
        answer:
          "Nous couvrons l'ensemble des 8 départements franciliens : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95).",
      },
      {
        question: "Les délais d'installation sont-ils les mêmes partout en Île-de-France ?",
        answer:
          "Les délais sont similaires sur l'ensemble de notre zone d'intervention, généralement de 1 à 3 semaines après validation du devis.",
      },
    ],
  },
  {
    slug: 'versailles',
    name: 'Versailles',
    department: 'Yvelines (78)',
    region: 'Île-de-France',
    description:
      "Versailles et son agglomération présentent un parc immobilier diversifié : hôtels particuliers, maisons bourgeoises, résidences modernes. La ville attire une clientèle aisée souvent propriétaire de véhicules électriques premium (Tesla, BMW, Mercedes). Les installations concernent principalement des maisons individuelles avec garage, souvent bien équipées électriquement.",
    housingTypes: [
      'Maisons bourgeoises avec garage',
      'Hôtels particuliers',
      'Appartements en résidence moderne',
      'Maisons de ville',
    ],
    challenges: [
      'Bâtiments classés nécessitant une discrétion des câblages',
      'Forte demande en bornes haute puissance (11-22 kW) pour véhicules premium',
    ],
    priceRange: { min: 600, max: 2000 },
    population: '85 000',
    seoTitle: "Installation borne de recharge Versailles (78) — Devis gratuit | GALEOHM",
    seoDescription:
      "GALEOHM installe votre borne de recharge à Versailles et dans les Yvelines. Solutions pour maisons, appartements et résidences. Devis gratuit.",
    localFAQ: [
      {
        question: "Installez-vous des bornes pour Tesla et BMW à Versailles ?",
        answer:
          "Oui, nous installons des bornes compatibles avec tous les véhicules électriques et hybrides rechargeables, y compris Tesla (Wall Connector), BMW Wallbox, Mercedes et Audi. Nous vous conseillons sur le meilleur équipement selon votre véhicule.",
      },
      {
        question: "Peut-on installer une borne dans un immeuble de caractère à Versailles ?",
        answer:
          "Oui, nous adaptons l'installation pour respecter l'esthétique des bâtiments. Pour les immeubles sous contraintes architecturales, nous étudions des solutions de câblage discrètes.",
      },
    ],
  },
  {
    slug: 'cergy',
    name: 'Cergy',
    department: "Val-d'Oise (95)",
    region: 'Île-de-France',
    description:
      "Cergy, ville nouvelle de la région parisienne, dispose d'un parc immobilier majoritairement construit dans les années 70-90. Les installations électriques sont souvent en bon état mais peuvent nécessiter une mise à niveau pour accueillir une borne de recharge puissante. La présence d'importantes zones pavillonnaires facilite l'installation pour les propriétaires de maisons.",
    housingTypes: ['Maisons pavillonnaires', 'Résidences collectives', 'Copropriétés', 'Logements neufs'],
    challenges: [
      'Tableaux électriques des années 80-90 à évaluer',
      'Copropriétés avec règlements variables',
      'Distances parfois importantes entre sous-sols et emplacements',
    ],
    priceRange: { min: 550, max: 1700 },
    population: '65 000',
    seoTitle: "Installation borne de recharge Cergy (95) — Devis gratuit | GALEOHM",
    seoDescription:
      "Installez votre borne de recharge à Cergy avec GALEOHM. Étude gratuite, installation professionnelle en Val-d'Oise. Devis en 24h.",
    localFAQ: [
      {
        question: "Intervenez-vous à Cergy-Pontoise pour les bornes de recharge ?",
        answer:
          "Oui, nous couvrons Cergy, Pontoise, Cergy-Pontoise et l'ensemble de la communauté urbaine. Contactez-nous pour une étude gratuite de votre projet.",
      },
    ],
  },
  {
    slug: 'argenteuil',
    name: 'Argenteuil',
    department: "Val-d'Oise (95)",
    region: 'Île-de-France',
    description:
      "Argenteuil, première ville du Val-d'Oise par sa population, présente un tissu urbain dense avec un mélange de maisons individuelles et de résidences collectives. Notre équipe intervient régulièrement dans cette commune pour des installations en maison individuelle avec allée ou garage, ainsi que pour des copropriétés souhaitant déployer des bornes collectives.",
    housingTypes: ['Maisons avec allée ou garage', 'Pavillons', 'Résidences collectives', 'Immeubles anciens et neufs'],
    challenges: [
      'Mixité du bâti nécessitant des études au cas par cas',
      'Procédures copropriété à respecter pour les immeubles collectifs',
    ],
    priceRange: { min: 550, max: 1800 },
    population: '110 000',
    seoTitle: "Installation borne de recharge Argenteuil (95) — Devis gratuit | GALEOHM",
    seoDescription:
      "GALEOHM installe votre borne de recharge à Argenteuil. Maisons individuelles et copropriétés. Val-d'Oise. Devis gratuit.",
    localFAQ: [
      {
        question: "Quelle borne recommandez-vous pour une maison à Argenteuil ?",
        answer:
          "Pour une maison individuelle avec un compteur monophasé standard, une borne 7,4 kW avec délestage dynamique est généralement la solution idéale. Elle offre une recharge confortable (80 % en une nuit) sans risquer de faire disjoncter votre installation.",
      },
    ],
  },
  {
    slug: 'pontoise',
    name: 'Pontoise',
    department: "Val-d'Oise (95)",
    region: 'Île-de-France',
    description:
      "Pontoise, préfecture du Val-d'Oise et ville historique, dispose d'un parc immobilier varié mêlant centre-ville ancien et zones pavillonnaires récentes. Les installations de bornes de recharge y concernent principalement des maisons individuelles et des résidences de standing. Notre équipe maîtrise les spécificités des installations dans les bâtiments anciens du centre historique.",
    housingTypes: [
      'Maisons de ville anciennes',
      'Pavillons modernes',
      'Résidences de standing',
      'Appartements en centre-ville',
    ],
    challenges: [
      'Bâti ancien avec contraintes de câblage',
      'Accès parfois limité pour le passage de gaines',
    ],
    priceRange: { min: 600, max: 1900 },
    population: '31 000',
    seoTitle: "Installation borne de recharge Pontoise (95) — Devis gratuit | GALEOHM",
    seoDescription:
      "Installez votre borne de recharge à Pontoise avec GALEOHM. Étude personnalisée, installation professionnelle dans le Val-d'Oise.",
    localFAQ: [
      {
        question: "Peut-on installer une borne dans une maison ancienne à Pontoise ?",
        answer:
          "Oui, nous adaptons l'installation à la configuration des bâtiments anciens. Notre technicien réalise une visite préalable pour évaluer le tracé optimal des câbles et vous proposer la solution la plus discrète et la plus sûre.",
      },
    ],
  },
]

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((city) => city.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug)
}
