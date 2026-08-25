'use client'

import React from 'react'
import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Votre projet',
      description: 'Vous nous indiquez votre véhicule, votre logement et vos besoins via notre outil d\'estimation.',
      image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?w=600&q=80',
    },
    {
      number: '02',
      title: 'Étude technique',
      description: 'Nous analysons votre tableau électrique et définissons la section de câble et le délestage optimal.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    },
    {
      number: '03',
      title: 'Installation IRVE',
      description: 'La borne est posée, raccordée et testée selon la norme NF C 15-100 par notre technicien.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
    },
    {
      number: '04',
      title: 'Recharge & Suivi',
      description: 'Votre borne est configurée sur votre smartphone. Vous rechargez en toute sérénité à domicile.',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Accompagnement de A à Z"
          title="Comment ça marche"
          subtitle="Un parcours fluide et sécurisé de votre première estimation jusqu'à la première recharge à votre domicile."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="card-3d-tilt relative rounded-3xl bg-surface-subtle border border-slate-200/90 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Step Macro Image Header */}
                <div className="macro-zoom-container aspect-[16/10] mb-5 bg-slate-900 shadow-md">
                  <Image
                    src={step.image}
                    alt={`Étape ${step.number} ${step.title} GALEOHM`}
                    fill
                    className="object-cover brightness-95 group-hover:brightness-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-3 font-display font-extrabold text-2xl text-white tracking-wider">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-brand-600 font-bold">
                <span>Étape {idx + 1} / 4</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 group-hover:animate-ping" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
