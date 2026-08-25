import React from 'react'
import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Borne de recharge en copropriété (Droit à la prise) | GALEOHM',
  description:
    'Faites valoir votre droit à la prise en copropriété. GALEOHM gère le dossier technique auprès de votre syndic pour installer votre borne en parking souterrain.',
}

export default function CoproprietePage() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Droit à la prise"
            title="Installer une borne de recharge en copropriété"
            subtitle="Le droit à la prise vous permet d'équiper votre emplacement de stationnement privatif en copropriété. GALEOHM prend en charge le dossier technique pour le syndic."
            headingLevel={1}
          />
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-ink-DEFAULT">
          <h2 className="text-2xl font-bold">Les 3 étapes du Droit à la prise en copropriété</h2>
          <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-ink-DEFAULT block mb-1">1. Notification au Syndic</strong>
              <span>Envoi d'un dossier descriptif avec schémas de câblage et convention d'installation préparés par GALEOHM.</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-ink-DEFAULT block mb-1">2. Délai légal de 3 mois</strong>
              <span>Le syndic dispose de 3 mois pour s'opposer au projet (uniquement s'il existe une solution collective existante).</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-ink-DEFAULT block mb-1">3. Travaux et mise en service</strong>
              <span>Nos techniciens installent votre sous-compteur individuel et votre borne sur votre place de parking.</span>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <CTABanner />
    </>
  )
}
