'use client'

import React, { useState } from 'react'
import { Zap, Activity, ShieldCheck, Gauge, Sliders, Sparkles } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export function Interactive3DStage() {
  const [selectedPower, setSelectedPower] = useState<'3.7' | '7.4' | '11' | '22'>('7.4')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const powerConfigs = {
    '3.7': {
      label: '3,7 kW Monophasé',
      speed: '~20 km / heure',
      timeFull: '12 heures',
      color: 'from-cyan-500 to-blue-500',
      glow: 'glow-cyan',
      ringColor: '#06b6d4',
      badge: 'Hybrides (PHEV)',
    },
    '7.4': {
      label: '7,4 kW Monophasé',
      speed: '~40 km / heure',
      timeFull: '7h 30min',
      color: 'from-brand-500 to-blue-600',
      glow: 'glow-blue',
      ringColor: '#2563eb',
      badge: 'Standard Domicile (Recommandé)',
    },
    '11': {
      label: '11 kW Triphasé',
      speed: '~65 km / heure',
      timeFull: '5 heures',
      color: 'from-blue-600 to-emerald-500',
      glow: 'glow-emerald',
      ringColor: '#10b981',
      badge: 'Triphasé & Tesla',
    },
    '22': {
      label: '22 kW Triphasé',
      speed: '~120 km / heure',
      timeFull: '2h 30min',
      color: 'from-emerald-500 to-violet-600',
      glow: 'glow-emerald',
      ringColor: '#8b5cf6',
      badge: 'Haute Performance Pro',
    },
  }

  const current = powerConfigs[selectedPower]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white overflow-hidden relative border-b border-slate-800">
      {/* Background 3D grid line glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Expérience 3D Interactive"
          title="Simulateur de puissance & Rendu 3D"
          subtitle="Testez en direct les différentes puissances de recharge et observez le comportement dynamique de la borne GALEOHM."
          className="text-white mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block">
                1. Choisissez la puissance de charge
              </span>
              <div className="grid grid-cols-2 gap-3">
                {(['3.7', '7.4', '11', '22'] as const).map((power) => (
                  <button
                    key={power}
                    onClick={() => setSelectedPower(power)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                      selectedPower === power
                        ? 'border-brand-500 bg-slate-900 text-white shadow-lg shadow-brand-500/20 ring-2 ring-brand-500/40'
                        : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-extrabold">{power} kW</span>
                      {selectedPower === power && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      )}
                    </div>
                    <span className="text-[0.7rem] font-medium block opacity-80">
                      {powerConfigs[power].badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Performance metrics dashboard */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 backdrop-blur shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Performance sélectionnée
                </span>
                <span className="text-xs font-extrabold text-brand-400">{current.label}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                    <Gauge className="w-3.5 h-3.5 text-brand-400" />
                    <span>Vitesse de charge</span>
                  </div>
                  <span className="text-base font-extrabold text-emerald-400 block font-mono">
                    {current.speed}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                    <Activity className="w-3.5 h-3.5 text-brand-400" />
                    <span>Temps (0% → 100%)</span>
                  </div>
                  <span className="text-base font-extrabold text-white block font-mono">
                    {current.timeFull}
                  </span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Protection thermique & ajustement automatique activés</span>
              </div>
            </div>

            <Button href="#devis" variant="primary" size="lg" fullWidth className="shadow-xl shadow-brand-500/25">
              <span>Commander cette configuration</span>
            </Button>
          </div>

          {/* Right Column Interactive 3D Perspective Stage */}
          <div className="lg:col-span-7 perspective-1000">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
              }}
              className="card-3d-tilt relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl flex flex-col items-center justify-center min-h-[460px] group cursor-grab active:cursor-grabbing"
            >
              {/* Interactive 3D Wallbox Model Visual */}
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-3xl bg-slate-950 border-2 border-slate-700/80 shadow-2xl flex flex-col items-center justify-between p-6 overflow-hidden">
                {/* Metallic bevel texture */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40 pointer-events-none" />

                {/* 3D LED Power Ring */}
                <div className="relative mt-4 flex items-center justify-center">
                  <div
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 flex items-center justify-center transition-all duration-500 relative"
                    style={{
                      borderColor: current.ringColor,
                      boxShadow: `0 0 35px ${current.ringColor}60`,
                    }}
                  >
                    <div className="text-center">
                      <Zap className="w-8 h-8 mx-auto text-white animate-pulse" />
                      <span className="text-xs font-extrabold font-mono text-white mt-1 block">
                        {selectedPower} kW
                      </span>
                    </div>
                  </div>
                </div>

                {/* GALEOHM Wordmark on 3D Body */}
                <div className="text-center z-10">
                  <span className="text-xs font-extrabold tracking-[0.25em] text-slate-300 block uppercase">
                    GALEOHM
                  </span>
                  <span className="text-[0.6rem] text-emerald-400 font-mono tracking-widest block uppercase mt-0.5">
                    ● EN CHARGE
                  </span>
                </div>

                {/* Cable Output Node */}
                <div className="w-12 h-5 rounded-t-lg bg-slate-800 border-t border-slate-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-brand-500 animate-ping" />
                </div>
              </div>

              {/* Floating 3D Micro Glass Badges */}
              <div className="absolute top-6 left-6 glass-dark px-3 py-2 rounded-xl text-[0.7rem] font-bold text-slate-300 flex items-center gap-2 border border-slate-700/60 shadow-xl animate-float">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                <span>3D Interactive Stage — Bougez votre souris</span>
              </div>

              <div className="absolute bottom-6 right-6 glass-dark px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-400 flex items-center gap-2 border border-slate-700/60 shadow-xl animate-float-delayed">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Délestage dynamique connecté</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
