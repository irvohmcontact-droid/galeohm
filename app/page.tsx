import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { Reassurance } from '@/components/sections/Reassurance'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ChargerSolutions } from '@/components/sections/ChargerSolutions'
import { Interactive3DStage } from '@/components/sections/Interactive3DStage'
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
      <Interactive3DStage />
      <DynamicLoadBalancing />
      <InstallationCalculator />
      <TrustSection />
      <FAQ />
      <LeadForm />
      <CTABanner />
    </>
  )
}
