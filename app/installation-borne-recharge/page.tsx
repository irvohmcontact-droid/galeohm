import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ShieldCheck, MapPin } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'
import { cities } from '@/config/cities'

export const metadata: Metadata = {
  title: "Installation borne de recharge IRVE à domicile | GALEOHM",
  description:
    "Installation professionnelle de bornes de recharge pour véhicules électriques. Normes NF C 15-100, étude technique préalable, devis gratuit.",
}

export default function InstallationPage() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Expertise IRVE"
            title="Installation professionnelle de bornes de recharge"
            subtitle="Une installation réalisée dans les règles de l'art par des techniciens qualifiés pour garantir la sécurité électrique de votre logement."
            headingLevel={1}
          />
        </div>
      </section>

      <HowItWorks />

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-ink-DEFAULT mb-4">
              Sécurité électrique & Norme NF C 15-100
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-6">
              L'installation d'une borne de recharge exige des protections électriques dédiées dans votre tableau (interrupteur différentiel type Hi/ASI et disjoncteur courbe C adaptables) pour éviter toute surcharge sur vos circuits domestiques.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-ink-DEFAULT">
                  Ligne électrique blindée dédiée depuis le tableau
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-ink-DEFAULT">
                  Vérification préalable du piquet de mise à la terre
                </span>
              </div>
            </div>
          </div>

          {/* Local SEO Cities Hub */}
          <div className="pt-12 border-t border-slate-200">
            <h3 className="text-lg font-bold text-ink-DEFAULT mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-500" />
              <span>Nos zones d'intervention locales</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/installation-borne-recharge/${city.slug}`}
                  className="p-3 rounded-lg bg-surface-subtle border border-slate-200 hover:border-brand-300 text-xs font-semibold text-ink-DEFAULT hover:text-brand-600 transition-colors"
                >
                  Installation {city.name} ({city.department})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <CTABanner />
    </>
  )
}
