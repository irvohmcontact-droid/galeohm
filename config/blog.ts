// Métadonnées des articles de blog GALEOHM

export interface BlogArticle {
  slug: string
  title: string
  h1: string
  description: string
  excerpt: string
  publishDate: string
  updatedDate?: string
  readTime: number
  category: string
  keywords: string[]
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'prix-installation-borne-recharge',
    title: "Prix d'une installation de borne de recharge à domicile en 2025",
    h1: "Quel prix pour installer une borne de recharge à domicile ?",
    description:
      "Découvrez le coût réel d'une installation de borne de recharge à domicile : prix de la borne, main-d'œuvre, câblage. Estimez votre budget avec GALEOHM.",
    excerpt:
      "Le prix d'une installation de borne de recharge dépend de plusieurs facteurs : puissance de la borne, distance entre le tableau et l'emplacement, état de l'installation électrique existante...",
    publishDate: '2025-03-15',
    readTime: 7,
    category: 'Prix & Budget',
    keywords: [
      "prix installation borne recharge",
      "coût borne recharge maison",
      "tarif installation wallbox",
      "budget borne électrique",
    ],
  },
  {
    slug: 'quelle-puissance-borne-recharge',
    title: "Quelle puissance pour une borne de recharge ? 3,7 kW, 7,4 kW, 11 kW ou 22 kW",
    h1: "Quelle puissance choisir pour votre borne de recharge ?",
    description:
      "Choisir la bonne puissance pour votre borne de recharge est essentiel. Comparatif 3,7 kW, 7,4 kW, 11 kW et 22 kW selon votre véhicule et votre installation.",
    excerpt:
      "La puissance de votre borne de recharge détermine la vitesse à laquelle se rechargera votre véhicule. Mais toutes les puissances ne sont pas adaptées à tous les logements...",
    publishDate: '2025-04-02',
    readTime: 8,
    category: 'Conseils techniques',
    keywords: [
      "puissance borne recharge",
      "7kW ou 22kW",
      "quelle puissance wallbox",
      "borne 11kW triphasé",
    ],
  },
  {
    slug: 'borne-7kw-suffisant',
    title: "Une borne 7,4 kW est-elle suffisante pour une voiture électrique ? (2025)",
    h1: "7,4 kW : est-ce suffisant pour recharger votre voiture électrique ?",
    description:
      "Une borne 7,4 kW couvre-t-elle les besoins de la plupart des conducteurs ? Analyse complète selon les véhicules, les usages et les habitudes de recharge.",
    excerpt:
      "La borne 7,4 kW est la solution la plus courante en maison individuelle. Elle permet de recharger la grande majorité des véhicules électriques en une nuit...",
    publishDate: '2025-04-20',
    readTime: 6,
    category: 'Conseils techniques',
    keywords: [
      "borne 7kW suffisante",
      "7,4 kW voiture électrique",
      "wallbox 7kW",
      "recharge nuit domicile",
    ],
  },
  {
    slug: 'monophase-triphase-borne',
    title: "Monophasé ou triphasé pour une borne de recharge : quelle différence ?",
    h1: "Monophasé ou triphasé : quel compteur pour votre borne de recharge ?",
    description:
      "Comprendre la différence entre monophasé et triphasé pour installer la bonne borne de recharge. Impact sur la puissance maximale et les options disponibles.",
    excerpt:
      "Le type de votre compteur électrique conditionne directement la puissance maximale de votre borne de recharge. Monophasé ou triphasé, voici ce que ça change...",
    publishDate: '2025-05-10',
    readTime: 7,
    category: 'Conseils techniques',
    keywords: [
      "monophasé triphasé borne recharge",
      "compteur monophasé électrique voiture",
      "borne recharge triphasé",
      "différence monophasé triphasé",
    ],
  },
  {
    slug: 'delestage-dynamique-fonctionnement',
    title: "Délestage dynamique pour borne de recharge : comment ça fonctionne ?",
    h1: "Comment fonctionne le délestage dynamique sur une borne de recharge ?",
    description:
      "Le délestage dynamique adapte la puissance de votre borne selon votre consommation électrique. Évitez les disjonctions et optimisez votre installation.",
    excerpt:
      "Le délestage dynamique est une fonctionnalité qui permet à votre borne de recharge d'adapter automatiquement sa puissance en fonction de la consommation du reste de votre logement...",
    publishDate: '2025-05-28',
    readTime: 6,
    category: 'Conseils techniques',
    keywords: [
      "délestage dynamique borne recharge",
      "smart charging maison",
      "borne recharge sans disjonction",
      "gestion charge électrique",
    ],
  },
  {
    slug: 'borne-copropriete',
    title: "Installer une borne de recharge en copropriété : droit à la prise et démarches",
    h1: "Peut-on installer une borne de recharge en copropriété ?",
    description:
      "Tout savoir sur le droit à la prise pour installer une borne en copropriété : démarches, rôle du syndic, coûts et solutions collectives disponibles.",
    excerpt:
      "Oui, il est possible d'installer une borne de recharge dans votre emplacement de parking en copropriété. La loi ELAN a instauré un droit à la prise qui protège les résidents...",
    publishDate: '2025-06-15',
    readTime: 9,
    category: 'Copropriété',
    keywords: [
      "borne recharge copropriété",
      "droit à la prise",
      "wallbox appartement",
      "installation IRVE copropriété",
    ],
  },
  {
    slug: 'borne-tesla',
    title: "Quelle borne de recharge choisir pour une Tesla ? (Model 3, Y, S, X)",
    h1: "Quelle borne choisir pour recharger votre Tesla à domicile ?",
    description:
      "Guide complet pour choisir la meilleure borne de recharge pour votre Tesla Model 3, Model Y, Model S ou Model X. Tesla Wall Connector ou alternatives ?",
    excerpt:
      "Les Tesla peuvent se recharger sur n'importe quelle borne de type 2, mais certains équipements sont particulièrement bien adaptés à ces véhicules...",
    publishDate: '2025-07-03',
    readTime: 7,
    category: 'Par marque',
    keywords: [
      "borne recharge Tesla",
      "Tesla Wall Connector installation",
      "recharge Tesla maison",
      "wallbox Tesla Model 3",
    ],
  },
  {
    slug: 'borne-renault',
    title: "Quelle borne de recharge pour une Renault électrique ? (Zoé, Mégane, Kangoo)",
    h1: "Quelle borne choisir pour recharger votre Renault électrique ?",
    description:
      "Guide d'achat pour choisir la borne de recharge adaptée à votre Renault Zoé, Mégane E-Tech, Kangoo ou Twingo électrique. Puissance recommandée et installation.",
    excerpt:
      "Les véhicules électriques Renault ont des caractéristiques de recharge spécifiques qu'il faut connaître pour choisir la bonne borne...",
    publishDate: '2025-07-20',
    readTime: 6,
    category: 'Par marque',
    keywords: [
      "borne recharge Renault",
      "wallbox Renault Zoé",
      "installation borne Mégane E-Tech",
      "recharge Renault électrique maison",
    ],
  },
  {
    slug: 'cout-installation-irve',
    title: "Coût d'une installation IRVE en 2025 : détail complet des tarifs",
    h1: "Combien coûte une installation IRVE ?",
    description:
      "Détail complet du coût d'une installation IRVE (Infrastructure de Recharge de Véhicule Électrique) : matériel, main-d'œuvre, fourreaux, tableau électrique.",
    excerpt:
      "Une installation IRVE (Infrastructure de Recharge de Véhicule Électrique) comprend plusieurs postes de coût qu'il est important de comprendre avant de demander un devis...",
    publishDate: '2025-08-05',
    readTime: 8,
    category: 'Prix & Budget',
    keywords: [
      "coût installation IRVE",
      "prix IRVE 2025",
      "tarif installation borne électrique",
      "devis IRVE",
    ],
  },
  {
    slug: 'distance-tableau-borne',
    title: "Distance entre le tableau électrique et la borne de recharge : ce qu'il faut savoir",
    h1: "Quelle distance maximale entre le tableau électrique et la borne de recharge ?",
    description:
      "La distance entre votre tableau électrique et l'emplacement de la borne impacte le coût et la section des câbles. Nos recommandations par situation.",
    excerpt:
      "Il n'existe pas de distance maximale réglementaire entre le tableau électrique et la borne de recharge, mais la distance influence la section des câbles nécessaires et donc le coût...",
    publishDate: '2025-08-18',
    readTime: 5,
    category: 'Installation',
    keywords: [
      "distance tableau borne recharge",
      "câblage borne électrique",
      "longueur câble wallbox",
      "section câble borne recharge",
    ],
  },
  {
    slug: 'augmenter-puissance-compteur',
    title: "Faut-il augmenter la puissance de son compteur pour une borne de recharge ?",
    h1: "Augmentation de puissance compteur et borne de recharge : est-ce nécessaire ?",
    description:
      "Faut-il augmenter la puissance de son abonnement Enedis pour installer une borne de recharge ? Réponse selon votre situation et solutions pour éviter cette dépense.",
    excerpt:
      "L'augmentation de puissance du compteur n'est pas toujours nécessaire pour installer une borne de recharge. Le délestage dynamique peut souvent vous éviter cette dépense...",
    publishDate: '2025-09-02',
    readTime: 6,
    category: 'Installation',
    keywords: [
      "augmenter puissance compteur borne recharge",
      "abonnement Enedis électrique voiture",
      "puissance compteur wallbox",
      "12kVA borne recharge",
    ],
  },
  {
    slug: 'aides-borne-recharge-2026',
    title: "Aides pour installer une borne de recharge en 2026 : guide complet",
    h1: "Quelles aides pour une borne de recharge en 2026 ?",
    description:
      "Tour d'horizon des aides financières disponibles en 2026 pour installer une borne de recharge : programme Advenir, TVA réduite, aides locales et avantages fiscaux.",
    excerpt:
      "En 2026, plusieurs dispositifs permettent de réduire le coût d'installation d'une borne de recharge. Le programme Advenir, la TVA à taux réduit et certaines aides locales peuvent couvrir une partie significative du budget...",
    publishDate: '2026-01-10',
    updatedDate: '2026-08-01',
    readTime: 8,
    category: 'Aides & Financement',
    keywords: [
      "aides installation borne recharge 2026",
      "programme Advenir",
      "subvention borne électrique",
      "TVA borne recharge",
      "aide état borne recharge",
    ],
  },
]

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return blogArticles.map((article) => article.slug)
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  return blogArticles.filter((article) => article.category === category)
}

export const blogCategories = [
  'Tous',
  'Conseils techniques',
  'Prix & Budget',
  'Installation',
  'Copropriété',
  'Par marque',
  'Aides & Financement',
]
