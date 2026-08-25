import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next'
import Link from 'next/link'
import { MapPin, Home, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react'
import { getCityBySlug, getAllCitySlugs } from '@/config/cities'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Accordion } from '@/components/ui/Accordion'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema, localBusinessSchema } from '@/lib/schema'

interface LocalPageProps {
  params: {
    ville: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((ville) => ({ ville }))
}

export async function generateMetadata({ params }: LocalPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.ville)
  if (!city) return {}

  return {
    title: city.seoTitle,
    description: city.seoDescription,
  }
}

export default function LocalCityPage({ params }: LocalPageProps) {
  const city = getCityBySlug(params.ville)

  if (!city) {
    notFound()
  }

  const faqItems = city.localFAQ.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(city.localFAQ)} />

      {/* Local Hero Header */}
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-bold text-brand-700 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Zone d'intervention : {city.name} ({city.department})</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-DEFAULT tracking-tight text-balance mb-4">
            Installation de borne de recharge à {city.name}
          </h1>

          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-3xl text-balance">
            {city.description}
          </p>
        </div>
      </section>

      {/* Local Specifics Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Housing Types */}
            <div className="p-6 rounded-2xl bg-surface-subtle border border-slate-200 space-y-4">
              <h2 className="text-lg font-bold text-ink-DEFAULT flex items-center gap-2">
                <Home className="w-5 h-5 text-brand-500" />
                <span>Logements typiques à {city.name}</span>
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {city.housingTypes.map((ht, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{ht}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Installation Challenges */}
            <div className="p-6 rounded-2xl bg-surface-subtle border border-slate-200 space-y-4">
              <h2 className="text-lg font-bold text-ink-DEFAULT flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <span>Spécificités techniques locales</span>
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {city.challenges.map((ch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing Estimation for City */}
          <div className="p-8 rounded-2xl bg-brand-50 border border-brand-200 text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 block">
              Budget moyen estimé à {city.name}
            </span>
            <p className="text-3xl font-extrabold text-brand-900">
              {city.priceRange.min} € à {city.priceRange.max} € TTC
            </p>
            <p className="text-xs text-brand-700 max-w-md mx-auto">
              (Avant déduction du crédit d'impôt de 500 €). Le tarif dépend de la distance de câblage et du type d'emplacement.
            </p>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      {city.localFAQ.length > 0 && (
        <section className="py-16 bg-surface-subtle border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="FAQ Locale"
              title={`Questions sur l'installation à ${city.name}`}
            />
            <Accordion items={faqItems} />
          </div>
        </section>
      )}

      <LeadForm />
      <CTABanner />
    </>
  )
}
