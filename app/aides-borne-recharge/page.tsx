import React from 'react'
import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Aides & Subventions borne de recharge 2026 | GALEOHM',
  description:
    'Découvrez toutes les aides financières en 2026 pour financer l\'installation de votre borne de recharge : Crédit d\'impôt, TVA 5.5 %, programme Advenir.',
}

export default function AidesPage() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Financement & Subventions"
            title="Quelles aides pour installer votre borne de recharge en 2026 ?"
            subtitle="Profitez des dispositifs étatiques et régionaux pour réduire votre facture d'installation."
            headingLevel={1}
          />
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-ink-DEFAULT">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-surface-subtle border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block">Crédit d'Impôt</span>
              <h3 className="text-xl font-bold">Jusqu'à 500 € par borne</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Accessible à tous les propriétaires ou locataires pour leur résidence principale ou secondaire, sans condition de ressources.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-subtle border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">TVA Réduite</span>
              <h3 className="text-xl font-bold">TVA à 5,5 %</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Appliquée directement sur le matériel et la pose pour tous les logements achevés depuis plus de 2 ans.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-subtle border border-slate-200 space-y-3 md:col-span-2">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block">Programme Advenir (Copropriété & Entreprise)</span>
              <h3 className="text-xl font-bold">Jusqu'à 50 % de prise en charge</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pour les installations en copropriété ou en entreprise, la prime Advenir couvre une part significative du coût de fourniture et de raccordement de la borne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <CTABanner />
    </>
  )
}
