import React from 'react'
import type { Metadata } from 'next'
import { FAQ } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Foire Aux Questions (FAQ) borne de recharge | GALEOHM',
  description:
    'Retrouvez toutes les réponses aux questions les plus fréquentes sur l\'installation, le prix, le délestage et le droit à la prise des bornes de recharge.',
}

export default function FAQPage() {
  return (
    <>
      <FAQ />
      <CTABanner />
    </>
  )
}
