import React from 'react'
import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Borne de recharge 11 kW & 22 kW triphasé | GALEOHM',
  description:
    'Installation de borne de recharge 11 kW et 22 kW en triphasé pour véhicules électriques compatibles et flottes professionnelles.',
}

export default function Borne22kWPage() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Haute Performance"
            title="Borne de recharge 11 kW & 22 kW Triphasé"
            subtitle="Pour les véhicules compatibles et les installations équipées d'un réseau triphasé 400V."
            headingLevel={1}
          />
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-ink-DEFAULT">
          <h2 className="text-2xl font-bold">Avantages du triphasé 22 kW</h2>
          <ul className="space-y-3 text-sm text-slate-600 list-disc pl-5 leading-relaxed">
            <li>Vitesse de recharge ultra-rapide (jusqu'à 120 km d'autonomie récupérés en 1 heure).</li>
            <li>Indispensable pour exploiter pleinement les chargeurs embarqués des véhicules premium (Tesla, Renault Zoé, Porsche, etc.).</li>
            <li>Idéal pour les entreprises, professions libérales et copropriétés avec réseau triphasé.</li>
          </ul>
        </div>
      </section>

      <LeadForm />
      <CTABanner />
    </>
  )
}
