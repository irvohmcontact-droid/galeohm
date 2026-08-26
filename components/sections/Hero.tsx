'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-28 border-b border-slate-100">
      {/* Dynamic ambient energy glows */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-2/3 bg-gradient-to-bl from-brand-100/50 via-brand-50/20 to-transparent blur-3xl opacity-80 pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-72 h-72 bg-emerald-100/40 blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-50/90 border border-brand-200/80 text-xs font-bold text-brand-700 shadow-2xs backdrop-blur">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 animate-spin-slow" />
              <span>Spécialiste IRVE & Mobilite Électrique en Île-de-France</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.06] text-balance">
              Votre borne de recharge <span className="text-brand-600 bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">installée simplement.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl text-balance font-normal">
              GALEOHM vous accompagne de l'étude technique de votre réseau électrique jusqu'à la mise en service personnalisée de votre borne.
            </p>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="#calculateur" variant="primary" size="lg" className="shadow-lg shadow-brand-500/20 glow-blue">
                <span>Estimer mon installation</span>
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/borne-recharge" variant="outline" size="lg" className="bg-white/80 backdrop-blur">
                Voir nos solutions
              </Button>
            </div>

            {/* Reassurance pills */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded bg-brand-100/80 text-brand-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Étude & Devis sous 24h</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded bg-emerald-100/80 text-emerald-600">
                  <Zap className="w-4 h-4" />
                </div>
                <span>Délestage dynamique</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-500 pulse-ring" />
                <span>Réseau certifié IRVE</span>
              </div>
            </div>
          </div>

          {/* Right Column Macro Photography & Visual Motion Design */}
          <div className="lg:col-span-5 relative">
            <div className="macro-zoom-container shadow-2xl border border-slate-200/80 bg-slate-950 aspect-[4/3] group">
              <Image
                src="/images/teltonika-wall.jpg"
                alt="Installation borne de recharge murale TeltoCharge par GALEOHM"
                fill
                priority
                className="object-cover brightness-95 group-hover:brightness-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

              {/* Glassmorphism Floating Badge Top Right */}
              <div className="absolute top-4 right-4 glass-dark px-3.5 py-2 rounded-xl text-white flex items-center gap-2.5 text-xs font-semibold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Norme NF C 15-100</span>
              </div>

              {/* Energy Flow Motion Overlay */}
              <div className="absolute bottom-4 left-4 right-4 glass-dark rounded-2xl p-4 border border-slate-700/80 text-white shadow-2xl">
                <div className="flex items-center justify-between text-[0.7rem] font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-brand-400" />
                    Flux d'énergie intelligent
                  </span>
                  <span className="text-emerald-400 font-mono flex items-center gap-1">
                    7,4 kW Monophasé
                  </span>
                </div>

                {/* Animated Circuit Node diagram */}
                <div className="relative flex items-center justify-between gap-2 px-3 py-2 bg-slate-950/90 rounded-xl border border-slate-800">
                  <div className="text-center">
                    <span className="block text-[0.6rem] text-slate-400 uppercase">Compteur</span>
                    <span className="text-xs font-bold text-slate-200">Enedis</span>
                  </div>

                  <div className="flex-1 relative h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-emerald-400 animate-pulse" />
                  </div>

                  <div className="text-center px-1">
                    <span className="block text-[0.6rem] text-brand-400 uppercase font-bold">Borne</span>
                    <span className="text-xs font-extrabold text-white">GALEOHM</span>
                  </div>

                  <div className="flex-1 relative h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-brand-400 animate-pulse" />
                  </div>

                  <div className="text-center">
                    <span className="block text-[0.6rem] text-slate-400 uppercase">Batterie</span>
                    <span className="text-xs font-bold text-emerald-400">80 %</span>
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
