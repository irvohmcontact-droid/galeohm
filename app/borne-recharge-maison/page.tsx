import React from 'react'
import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ChargerSolutions } from '@/components/sections/ChargerSolutions'
import { DynamicLoadBalancing } from '@/components/sections/DynamicLoadBalancing'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Borne de recharge pour maison individuelle | GALEOHM',
  description:
    'Installation de borne de recharge en maison individuelle. Solution sur-mesure 7.4 kW avec délestage dynamique. Étude technique et devis gratuit.',
}

export default function MaisonPage() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Propriétaires de maison"
            title="Votre borne de recharge à domicile en maison individuelle"
            subtitle="Rechargez votre véhicule dans votre garage ou sur votre allée en toute tranquillité, sans risque de surchauffe ou de coupure de courant."
            headingLevel={1}
          />
        </div>
      </section>

      <ChargerSolutions />
      <DynamicLoadBalancing />
      <LeadForm />
      <CTABanner />
    </>
  )
}
