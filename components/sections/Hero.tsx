'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-100">
      {/* Discreet background radial gradient */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-gradient-to-bl from-brand-50/60 to-transparent blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-ink-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Spécialiste de l'installation IRVE à domicile & entreprise</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-DEFAULT leading-[1.08] text-balance">
              Votre borne de recharge <span className="text-brand-600 font-extrabold">installée simplement.</span>
            </h1>

            <p className="text-lg sm:text-xl text-ink-muted leading-relaxed max-w-2xl text-balance font-normal">
              GALEOHM vous accompagne de l'étude de votre installation jusqu'à la mise en service de votre borne de recharge.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="#calculateur" variant="primary" size="lg" className="shadow-md">
                <span>Estimer mon installation</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button href="/borne-recharge" variant="outline" size="lg">
                Voir nos solutions
              </Button>
            </div>

            {/* Reassurance pills */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-ink-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span>Étude & devis gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span>Délestage intelligent</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-brand-500" />
                <span>Intervention Île-de-France</span>
              </div>
            </div>
          </div>

          {/* Right Column Realistic Visual & Micro Energy Flow */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 aspect-[4/3] lg:aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=85"
                alt="Maison contemporaine avec voiture électrique et borne de recharge GALEOHM"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Energy Flow Micro Animation Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-xl p-3.5 border border-slate-700/80 text-white shadow-xl">
                <div className="flex items-center justify-between text-[0.7rem] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  <span>Flux d'énergie dynamique</span>
                  <span className="text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    En charge (7.4 kW)
                  </span>
                </div>

                {/* Micro Circuit Diagram */}
                <div className="relative flex items-center justify-between gap-2 px-2 py-1 bg-slate-950/80 rounded-lg border border-slate-800">
                  <div className="text-center">
                    <span className="block text-[0.65rem] text-slate-400">Compteur</span>
                    <span className="text-xs font-bold text-slate-200">Tableau</span>
                  </div>

                  {/* Flow line 1 */}
                  <div className="flex-1 relative h-1 bg-slate-800 rounded overflow-hidden">
                    <div className="absolute inset-0 bg-brand-500 animate-pulse" />
                  </div>

                  <div className="text-center px-1">
                    <span className="block text-[0.65rem] text-brand-400">Borne</span>
                    <span className="text-xs font-bold text-white">GALEOHM</span>
                  </div>

                  {/* Flow line 2 */}
                  <div className="flex-1 relative h-1 bg-slate-800 rounded overflow-hidden">
                    <div className="absolute inset-0 bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="text-center">
                    <span className="block text-[0.65rem] text-slate-400">Véhicule</span>
                    <span className="text-xs font-bold text-emerald-400">Batterie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
