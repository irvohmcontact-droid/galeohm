import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { Reassurance } from '@/components/sections/Reassurance'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ChargerSolutions } from '@/components/sections/ChargerSolutions'
import { DynamicLoadBalancing } from '@/components/sections/DynamicLoadBalancing'
import { InstallationCalculator } from '@/components/calculator/InstallationCalculator'
import { TrustSection } from '@/components/sections/TrustSection'
import { FAQ } from '@/components/sections/FAQ'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reassurance />
      <HowItWorks />
      <ChargerSolutions />
      <DynamicLoadBalancing />
      <InstallationCalculator />
      <TrustSection />
      <FAQ />
      <LeadForm />
      <CTABanner />
    </>
  )
}
