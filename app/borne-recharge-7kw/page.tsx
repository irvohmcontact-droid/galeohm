import React from 'react'
import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Borne de recharge 7,4 kW monophasé | GALEOHM',
  description:
    'Installation de borne de recharge 7.4 kW en monophasé. Le standard idéal pour recharger sa voiture électrique à domicile pendant la nuit.',
}

export default function Borne7kWPage() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Puissance Standard"
            title="Borne de recharge 7,4 kW Monophasé"
            subtitle="La solution de recharge de référence pour la très grande majorité des propriétaires de véhicules électriques."
            headingLevel={1}
          />
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-ink-DEFAULT">
          <h2 className="text-2xl font-bold">Pourquoi choisir une borne 7,4 kW ?</h2>
          <ul className="space-y-3 text-sm text-slate-600 list-disc pl-5 leading-relaxed">
            <li>Compatible avec 100 % des compteurs électriques monophasés (230V).</li>
            <li>Permet de recharger 40 km d'autonomie par heure de charge (soit ~350 km en 8h nocturnes).</li>
            <li>Associée au délestage dynamique pour une sécurité totale de l'installation.</li>
            <li>Éligible au crédit d'impôt de 500 € et à la TVA réduite 5,5 %.</li>
          </ul>
        </div>
      </section>

      <LeadForm />
      <CTABanner />
    </>
  )
}
