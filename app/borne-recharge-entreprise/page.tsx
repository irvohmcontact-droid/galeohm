import React from 'react'
import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Borne de recharge pour Entreprises & Flottes | GALEOHM',
  description:
    'Solutions IRVE professionnelles pour entreprises, commerces, hôtels et flottes automobiles. Supervision, monétique et raccordement haute puissance.',
}

export default function EntreprisePage() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Solutions Professionnelles"
            title="Bornes de recharge pour Entreprises & Flottes"
            subtitle="Équipez les parkings de vos collaborateurs, clients et flottes de véhicules d'entreprise avec des bornes supervisées 11 kW à 22 kW."
            headingLevel={1}
          />
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold text-ink-DEFAULT">Services dédiés aux professionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-surface-subtle border border-slate-200 space-y-2">
              <strong className="text-ink-DEFAULT block font-bold text-base">Supervision & RFID</strong>
              <p className="text-slate-600">Badges collaborateurs et suivi précis des consommations par véhicule.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-subtle border border-slate-200 space-y-2">
              <strong className="text-ink-DEFAULT block font-bold text-base">Décret Tertiaire</strong>
              <p className="text-slate-600">Répondez aux obligations légales d'équipement des parkings de bureaux.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-subtle border border-slate-200 space-y-2">
              <strong className="text-ink-DEFAULT block font-bold text-base">Recharge à domicile (T2A)</strong>
              <p className="text-slate-600">Remboursement automatisé des recharges de vos collaborateurs à leur domicile.</p>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <CTABanner />
    </>
  )
}
