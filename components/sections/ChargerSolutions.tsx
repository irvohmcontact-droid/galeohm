import React from 'react'
import { Check, HelpCircle, Zap, Shield, Smartphone } from 'lucide-react'
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
      specs: [
        'Puissance : 11 kW à 22 kW',
        'Raccordement : Triphasé (400V)',
        'Vitesse : Jusqu\'à 120 km d\'autonomie / heure',
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

        {/* 3 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 bg-white border transition-all duration-300 flex flex-col justify-between ${
                sol.popular
                  ? 'border-brand-500 shadow-lg ring-1 ring-brand-500'
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant={sol.popular ? 'blue' : 'default'}>{sol.badge}</Badge>
                  {sol.popular && (
                    <span className="text-[0.7rem] font-bold text-brand-600 uppercase tracking-widest">
                      Plus demandé
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-ink-DEFAULT mb-2">{sol.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-6">{sol.description}</p>

                <ul className="space-y-3 mb-6 border-t border-slate-100 pt-6">
                  {sol.specs.map((spec, specIdx) => (
                    <li key={specIdx} className="flex items-start gap-2.5 text-sm text-ink-DEFAULT">
                      <Check className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 mb-4 italic">{sol.compatible}</p>
                <Button href="#calculateur" variant={sol.popular ? 'primary' : 'outline'} fullWidth size="md">
                  Choisir cette configuration
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Don't know which charger to choose block */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-full bg-brand-50 text-brand-600 flex-shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-ink-DEFAULT">
                Vous ne savez pas quelle borne choisir ?
              </h4>
              <p className="text-sm text-ink-muted">
                Notre calculateur interactif détermine en 1 minute la borne et la puissance idéales pour votre véhicule.
              </p>
            </div>
          </div>
          <Button href="#calculateur" variant="secondary" size="md" className="flex-shrink-0">
            Je ne sais pas quelle borne choisir
          </Button>
        </div>

        {/* Brands List */}
        <div className="mt-12 text-center">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-4">
            Marques compatibles et installées régulièrement par nos techniciens
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-75">
            {siteConfig.brands.map((brand, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-bold text-ink-DEFAULT shadow-2xs"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
