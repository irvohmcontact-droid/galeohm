import React from 'react'
import { FileText, Wrench, Compass, Headphones } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function TrustSection() {
  const pillars = [
    {
      title: 'Étude personnalisée',
      description:
        'Chaque logement est unique. Nous étudions votre tableau électrique et vos habitudes de trajet pour définir l\'installation exacte nécessaire.',
      icon: FileText,
    },
    {
      title: 'Installation professionnelle',
      description:
        'Pose effectuée selon la norme NF C 15-100 avec des composants de protection électrique haut de gamme dédiés à la recharge.',
      icon: Wrench,
    },
    {
      title: 'Conseils sur le choix de la borne',
      description:
        'Indépendance vis-à-vis des fabricants. Nous sélectionnons la borne la plus pertinente pour votre véhicule et votre usage.',
      icon: Compass,
    },
    {
      title: 'Accompagnement de A à Z',
      description:
        'Du premier conseil téléphonique jusqu\'au paramétrage de votre application mobile et l\'explication de la prise en main.',
      icon: Headphones,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-surface-subtle border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Rigueur & Qualité"
          title="Pourquoi faire confiance à GALEOHM ?"
          subtitle="Une démarche transparente et exigeante centrée sur la sécurité de votre réseau électrique."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-brand-300 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-ink-DEFAULT mb-2">{p.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{p.description}</p>
              </div>
            )
          })}
        </div>

        {/* Accreditation & Customer Reviews Placeholder Zone */}
        <div className="rounded-2xl border border-dashed border-slate-300 p-8 bg-white/60 text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block">
            Espace Certifications & Avis Clients
          </span>
          <p className="text-xs text-slate-500 leading-relaxed max-w-lg mx-auto">
            Emplacement réservé à l'intégration des logos officiels de qualifications IRVE, labels Qualit'EnR, assurances décennales et avis vérifiés Google après validation.
          </p>
        </div>
      </div>
    </section>
  )
}
