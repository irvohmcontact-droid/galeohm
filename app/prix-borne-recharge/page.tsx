import React from 'react'
import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Prix installation borne de recharge domicile 2025 | GALEOHM',
  description:
    'Découvrez les tarifs indicatifs et le coût réel d\'installation d\'une borne de recharge à domicile (matériel, main d\'œuvre, câble, crédit d\'impôt).',
}

export default function PrixPage() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Transparence tarifaire"
            title="Combien coûte l'installation d'une borne de recharge ?"
            subtitle="Décomposition claire du budget nécessaire pour équiper votre logement d'une infrastructure de recharge fiable."
            headingLevel={1}
          />
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block">Formule Standard</span>
              <h3 className="text-xl font-bold text-ink-DEFAULT">Pack 7,4 kW Monophasé</h3>
              <div className="text-3xl font-extrabold text-ink-DEFAULT">950 € à 1 450 € <span className="text-xs font-normal text-slate-500">TTC*</span></div>
              <ul className="text-xs space-y-2 text-slate-600 border-t pt-4">
                <li>• Borne 7,4 kW intelligente</li>
                <li>• Câblage jusqu'à 10 mètres</li>
                <li>• Protections électriques dédiées</li>
                <li>• Délestage dynamique inclus</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-brand-500 text-white shadow-lg space-y-4">
              <span className="text-xs font-bold text-brand-200 uppercase tracking-wider block">Formule Triphasé</span>
              <h3 className="text-xl font-bold">Pack 11 kW / 22 kW</h3>
              <div className="text-3xl font-extrabold">1 350 € à 1 950 € <span className="text-xs font-normal text-brand-200">TTC*</span></div>
              <ul className="text-xs space-y-2 text-brand-100 border-t border-brand-400 pt-4">
                <li>• Borne triphasée 11kW ou 22kW</li>
                <li>• Protection différentielle type B/Hi</li>
                <li>• Câblage triphasé renforcé</li>
                <li>• Configuration application mobile</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Formule Copropriété</span>
              <h3 className="text-xl font-bold text-ink-DEFAULT">Pack Droit à la prise</h3>
              <div className="text-3xl font-extrabold text-ink-DEFAULT">1 100 € à 1 800 € <span className="text-xs font-normal text-slate-500">TTC*</span></div>
              <ul className="text-xs space-y-2 text-slate-600 border-t pt-4">
                <li>• Borne individuelle avec compteur</li>
                <li>• Dossier technique pour le syndic</li>
                <li>• Câblage parking souterrain</li>
                <li>• Aide Advenir déductible</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-slate-500 text-center italic">
            * Prix indicatifs moyens avant déduction du crédit d'impôt de 500 € par borne. Le tarif final est établi sur devis après visite technique.
          </p>
        </div>
      </section>

      <LeadForm />
      <CTABanner />
    </>
  )
}
