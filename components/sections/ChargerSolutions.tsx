import React from 'react'
import Image from 'next/image'
import { Check, HelpCircle, Zap, Shield, Smartphone, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

export function ChargerSolutions() {
  const solutions = [
    {
      title: 'Monophasé — 7,4 kW',
      popular: true,
      badge: 'Le standard recommandé',
      description: 'Idéal pour la majorité des maisons individuelles et appartements. Recharge complète en une nuit.',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
      specs: [
        'Puissance : 7,4 kW',
        'Raccordement : Monophasé (230V)',
        'Vitesse : ~40 km d\'autonomie / heure',
        'Délestage dynamique inclus',
        'Application mobile iOS & Android',
      ],
      compatible: 'Compatible tous véhicules (Tesla, Renault, Peugeot, etc.)',
    },
    {
      title: 'Triphasé — 11 kW & 22 kW',
      popular: false,
      badge: 'Performance & Entreprises',
      description: 'Pour les logements équipés en triphasé ou les usages intensifs. Vitesse de recharge maximale.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      specs: [
        'Puissance : 11 kW à 22 kW',
        'Raccordement : Triphasé (400V)',
        'Vitesse : Jusqu\'à 120 km / heure',
        'Gestion intelligente de charge',
        'Badges RFID & contrôle d\'accès',
      ],
      compatible: 'Pour véhicules avec chargeur embarqué triphasé',
    },
    {
      title: 'Usage quotidien — 3,7 kW',
      popular: false,
      badge: 'Économique & Hybrides',
      description: 'Parfait pour les véhicules hybrides rechargeables ou les petits trajets quotidiens.',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      specs: [
        'Puissance : 3,7 kW',
        'Raccordement : Monophasé standard',
        'Vitesse : ~20 km d\'autonomie / heure',
        'Protection électrique dédiée',
        'Installation simple et rapide',
      ],
      compatible: 'Idéal pour hybrides rechargeables (PHEV)',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-surface-subtle border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Solutions sur-mesure"
          title="Une borne adaptée à votre véhicule et votre installation"
          subtitle="Nous sélectionnons et installons les meilleures bornes du marché (Tesla Wall Connector, Zaptec Go, Wallbox, Schneider) selon vos contraintes électriques."
        />

        {/* 3 Solution Cards with Macro Close-up Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 bg-white border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                sol.popular
                  ? 'border-brand-500 shadow-xl ring-2 ring-brand-500/20'
                  : 'border-slate-200 hover:border-slate-300 shadow-md'
              }`}
            >
              <div>
                {/* Macro Close-up Image */}
                <div className="macro-zoom-container aspect-[16/10] mb-5 bg-slate-900">
                  <Image
                    src={sol.image}
                    alt={`Gros plan ${sol.title} borne de recharge GALEOHM`}
                    fill
                    className="object-cover brightness-95 group-hover:brightness-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <Badge variant={sol.popular ? 'blue' : 'default'} className="backdrop-blur bg-white/90">
                      {sol.badge}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-extrabold text-slate-900">{sol.title}</h3>
                  {sol.popular && (
                    <span className="text-[0.65rem] font-extrabold text-brand-600 uppercase tracking-widest bg-brand-50 px-2 py-0.5 rounded-md">
                      Recommandé
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">{sol.description}</p>

                <ul className="space-y-3 mb-6 border-t border-slate-100 pt-5">
                  {sol.specs.map((spec, specIdx) => (
                    <li key={specIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <Check className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 mb-4 italic">{sol.compatible}</p>
                <Button href="#calculateur" variant={sol.popular ? 'primary' : 'outline'} fullWidth size="md">
                  <span>Configurer ce choix</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Don't know which charger to choose block */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-brand-50 text-brand-600 flex-shrink-0 glow-blue">
              <HelpCircle className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Vous ne savez pas quelle borne choisir ?
              </h4>
              <p className="text-sm text-slate-600">
                Notre calculateur interactif détermine en 1 minute la borne et la puissance idéales pour votre véhicule.
              </p>
            </div>
          </div>
          <Button href="#calculateur" variant="secondary" size="md" className="flex-shrink-0">
            Estimer en 1 minute
          </Button>
        </div>

        {/* Brands List */}
        <div className="mt-12 text-center">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-4">
            Marques compatibles et installées régulièrement par nos techniciens
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 opacity-85">
            {siteConfig.brands.map((brand, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs hover:border-brand-300 transition-colors"
              >
                {brand.name} ({brand.power})
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
