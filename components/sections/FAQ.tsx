import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Accordion, type AccordionItem } from '@/components/ui/Accordion'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema } from '@/lib/schema'

export function FAQ() {
  const faqItems: AccordionItem[] = [
    {
      question: "Combien coûte l'installation d'une borne de recharge à domicile ?",
      answer:
        "Le coût moyen d'une installation complète varie généralement entre 900 € et 1 800 € TTC selon la puissance de la borne, la distance entre le tableau électrique et l'emplacement, et les éventuelles réfections à apporter à votre tableau.",
    },
    {
      question: 'Quelle puissance de borne choisir pour mon véhicule ?',
      answer:
        "Pour un usage résidentiel quotidien, la borne 7,4 kW en monophasé est recommandée. Elle permet de recharger ~40 km d'autonomie par heure de charge. Si votre logement est déjà en triphasé et votre véhicule compatible, une borne 11 kW ou 22 kW apporte un confort supplémentaire.",
    },
    {
      question: 'Une borne 7,4 kW est-elle suffisante ?',
      answer:
        'Oui, 7,4 kW est amplement suffisant pour 95 % des conducteurs. En laissant votre voiture branchée la nuit (8h à 10h de charge), vous récupérez entre 300 et 400 km d\'autonomie, ce qui couvre largement tous les besoins quotidiens.',
    },
    {
      question: 'Dois-je obligatoirement avoir un compteur triphasé ?',
      answer:
        "Non. La grande majorité des habitations en France disposent d'un compteur monophasé, parfait pour les bornes jusqu'à 7,4 kW. Le triphasé n'est requis que si vous souhaitez recharger à 11 kW ou 22 kW.",
    },
    {
      question: 'Le délestage dynamique est-il nécessaire ?',
      answer:
        "Il est fortement recommandé. Le délestage ajuste automatiquement la puissance de charge en fonction des appareils en marche dans votre maison. Cela évite d'avoir à souscrire un abonnement électrique plus cher et empêche les disjonctions intempestives.",
    },
    {
      question: 'Peut-on installer une borne de recharge dans une copropriété ?',
      answer:
        "Absolument. Grâce au « droit à la prise » réaffirmé par la loi, tout occupant (propriétaire ou locataire) d'un emplacement de parking en copropriété a le droit d'équiper son emplacement. GALEOHM gère les démarches auprès du syndic.",
    },
    {
      question: 'Quelle distance maximale peut-il y avoir entre le tableau et la borne ?',
      answer:
        "Il n'y a pas de limite stricte. GALEOHM a déjà réalisé des installations avec plus de 30 mètres de distance. La section du câble électrique est adaptée en conséquence pour éviter tout échauffement ou baisse de tension.",
    },
    {
      question: "Combien de temps dure l'intervention d'installation ?",
      answer:
        "Une installation standard prend généralement entre 3 et 5 heures (une demi-journée). Notre technicien effectue la pose, le câblage, la mise en service et vous forme à l'utilisation de l'application.",
    },
    {
      question: 'Quelle borne choisir parmi les modèles du marché ?',
      answer:
        "Nous sélectionnons avec vous la borne la plus fiable et ergonomique (Tesla Wall Connector, Zaptec Go, Wallbox Pulsar Plus, Schneider EVlink) selon votre budget et l'esthétique souhaitée.",
    },
    {
      question: 'Est-il possible de recharger deux véhicules électriques ?',
      answer:
        "Oui. Nous pouvons installer des bornes équipées de deux prises ou configurer deux bornes interconnectées qui se partagent intelligemment la puissance disponible.",
    },
    {
      question: 'Existe-t-il des aides financières pour l\'installation ?',
      answer:
        "En 2026, vous pouvez bénéficier d'un crédit d'impôt (jusqu'à 500 € par borne), de la TVA réduite à 5,5 % pour les logements de plus de 2 ans, et du programme Advenir en copropriété.",
    },
    {
      question: 'Que se passe-t-il si mon installation électrique n\'est pas adaptée ?',
      answer:
        "Lors de notre étude personnalisée, notre technicien identifie les ajustements nécessaires (ajout d'un interrupteur différentiel dédié, mise à la terre, remplacement du tableau) et les intègre au devis sans mauvaise surprise.",
    },
  ]

  const rawSchemaData = faqItems.map((item) => ({
    question: item.question,
    answer: typeof item.answer === 'string' ? item.answer : '',
  }))

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <JsonLd data={faqSchema(rawSchemaData)} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Questions fréquentes"
          title="Tout savoir sur l'installation de votre borne"
          subtitle="Toutes les réponses à vos questions techniques, financières et pratiques."
        />
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}
