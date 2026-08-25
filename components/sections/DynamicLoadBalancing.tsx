'use client'

import React, { useState } from 'react'
import { Zap, Home, Car, Activity, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export function DynamicLoadBalancing() {
  const [houseDemand, setHouseDemand] = useState<'high' | 'low'>('high')

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              eyebrow="Sécurité & Économies"
              title="Rechargez votre voiture sans faire disjoncter votre installation."
              subtitle="Le délestage dynamique adapte automatiquement la puissance de votre borne selon la consommation instantanée de votre logement."
              align="left"
              className="mb-6"
            />

            <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
              <p>
                Lorsque vos appareils ménagers gourmands en énergie fonctionnent en même temps (four, plaques de cuisson, pompe à chaleur), la borne GALEOHM réduit instantanément sa puissance de charge.
              </p>
              <p>
                Dès que la consommation de votre maison diminue (par exemple pendant la nuit), la borne reprend automatiquement sa puissance maximale de recharge.
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-sm font-medium text-ink-DEFAULT">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Pas d'abonnement Enedis supplémentaire à payer</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-ink-DEFAULT">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Zéro risque de coupure de courant générale</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-ink-DEFAULT">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Recharge optimisée sur les heures creuses</span>
              </div>
            </div>

            <div className="pt-4">
              <Button href="#calculateur" variant="primary" size="md">
                Vérifier si mon installation est compatible
              </Button>
            </div>
          </div>

          {/* Right Column Interactive Dynamic Animation */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-brand-400" />
                  <span className="text-sm font-bold tracking-wide uppercase text-slate-200">
                    Simulateur de délestage
                  </span>
                </div>
                {/* Toggle buttons */}
                <div className="flex bg-slate-800 p-1 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => setHouseDemand('high')}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      houseDemand === 'high'
                        ? 'bg-amber-500 text-slate-950 font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Forte consommation (Four + PAC)
                  </button>
                  <button
                    onClick={() => setHouseDemand('low')}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      houseDemand === 'low'
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Nuit (Consommation basse)
                  </button>
                </div>
              </div>

              {/* Dynamic Diagram */}
              <div className="py-8 space-y-6">
                {/* Node 1: House */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center gap-3">
                    <Home className="w-6 h-6 text-slate-300" />
                    <div>
                      <span className="text-xs text-slate-400 block">Consommation logement</span>
                      <span className="text-sm font-bold text-white">
                        {houseDemand === 'high' ? '6.0 kW (Élevée)' : '1.5 kW (Faible)'}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-bold uppercase ${
                      houseDemand === 'high'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    {houseDemand === 'high' ? 'Priorité Maison' : 'Maison au repos'}
                  </span>
                </div>

                {/* Arrow / Smart module */}
                <div className="flex items-center justify-center text-center">
                  <div className="px-4 py-2 rounded-lg bg-brand-600/30 border border-brand-500/40 text-brand-300 text-xs font-mono">
                    ⚡ Capteur dynamique GALEOHM : Ajustement automatique
                  </div>
                </div>

                {/* Node 2: Charger & Vehicle */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center gap-3">
                    <Car className="w-6 h-6 text-brand-400" />
                    <div>
                      <span className="text-xs text-slate-400 block">Puissance transmise à la borne</span>
                      <span className="text-base font-extrabold text-white">
                        {houseDemand === 'high' ? '3.0 kW (Régulée)' : '7.4 kW (Vitesse max)'}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-emerald-400 block">0 Disjonction</span>
                    <span className="text-[0.65rem] text-slate-400">Compteur 9 kVA protégé</span>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2 border-t border-slate-800">
                <p className="text-xs text-slate-400">
                  Cliquez sur les boutons ci-dessus pour observer l'adaptation dynamique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
