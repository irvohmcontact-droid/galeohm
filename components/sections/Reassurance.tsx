import React from 'react'
import { ShieldCheck, FileSearch, Car, BadgeCheck } from 'lucide-react'

export function Reassurance() {
  const items = [
    {
      title: 'Installation professionnelle',
      icon: ShieldCheck,
    },
    {
      title: 'Étude personnalisée',
      icon: FileSearch,
    },
    {
      title: 'Solutions adaptées à votre véhicule',
      icon: Car,
    },
    {
      title: 'Devis gratuit',
      icon: BadgeCheck,
    },
  ]

  return (
    <section className="bg-surface-subtle border-b border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center justify-between">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-center gap-3.5 group">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-brand-500 shadow-2xs group-hover:border-brand-200 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-ink-DEFAULT tracking-tight leading-snug">
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
