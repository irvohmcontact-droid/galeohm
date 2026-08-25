import React from 'react'
import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ChargerSolutions } from '@/components/sections/ChargerSolutions'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Bornes de recharge compatibles toutes marques | GALEOHM',
  description:
    'Découvrez les meilleures bornes de recharge pour véhicules électriques : Tesla Wall Connector, Zaptec, Wallbox, Schneider. Solutions 7.4 kW à 22 kW.',
}

export default function BornesRechargePage() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Gamme & Compatibilité"
            title="Quelle borne de recharge choisir pour votre véhicule ?"
            subtitle="GALEOHM sélectionne les bornes les plus fiables du marché. Nous vous conseillons l'équipement parfaitement adapté à votre véhicule et à votre abonnement électrique."
            headingLevel={1}
          />
        </div>
      </section>

      <ChargerSolutions />

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-ink-DEFAULT">
          <h2 className="text-2xl font-bold">Comment choisir la puissance de sa borne ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-ink-muted leading-relaxed">
            <div className="p-6 rounded-2xl border border-slate-200 bg-surface-subtle space-y-3">
              <h3 className="text-base font-bold text-ink-DEFAULT">Borne 7,4 kW Monophasé</h3>
              <p>
                C'est le choix privilégié pour 90 % des maisons individuelles. Elle permet de recharger une batterie standard de 60 kWh en 8h environ, parfaitement adapté au temps de stationnement nocturne.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-surface-subtle space-y-3">
              <h3 className="text-base font-bold text-ink-DEFAULT">Borne 11 kW à 22 kW Triphasé</h3>
              <p>
                Recommandée pour les véhicules dotés d'un puissant chargeur embarqué (comme les Tesla ou Porsche) et pour les logements disposant déjà d'un raccordement triphasé 400V.
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
