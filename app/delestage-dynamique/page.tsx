import React from 'react'
import type { Metadata } from 'next'
import { DynamicLoadBalancing } from '@/components/sections/DynamicLoadBalancing'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Délestage dynamique borne de recharge | GALEOHM',
  description:
    'Comprendre le délestage dynamique pour borne électrique. Évitez de disjoncter sans augmenter votre abonnement Enedis.',
}

export default function DelestagePage() {
  return (
    <>
      <DynamicLoadBalancing />
      <LeadForm />
      <CTABanner />
    </>
  )
}
