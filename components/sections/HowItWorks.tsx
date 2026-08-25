'use client'

import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Votre projet',
      description: 'Vous nous indiquez votre véhicule, votre logement et vos besoins via notre outil d\'estimation.',
    },
    {
      number: '02',
      title: 'Étude',
      description: 'Nous analysons votre installation électrique et définissons la configuration technique optimale.',
    },
    {
      number: '03',
      title: 'Installation',
      description: 'La borne est installée, raccordée et configurée selon les normes par un technicien spécialisé.',
    },
    {
      number: '04',
      title: 'Recharge',
      description: 'Votre borne est opérationnelle. Vous rechargez votre véhicule en toute sécurité à domicile.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Accompagnement"
          title="Comment ça marche"
          subtitle="Un parcours simple et transparent de la première étude jusqu'à la première recharge."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-surface-subtle border border-slate-200/80 hover:border-brand-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="block text-4xl font-extrabold text-brand-500 font-display tracking-tight mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-ink-DEFAULT mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
