import React from 'react'
import Image from 'next/image'
import { ShieldCheck, CloudRain, Smartphone, Cpu, Award } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'

export function TeltoChargeShowcase() {
  const features = [
    {
      icon: CloudRain,
      title: 'Étanchéité IP55 & Résistance IK10',
      description: 'Conçue pour résister aux intempéries extrêmes (pluie, gel, choc), idéale en extérieur ou garage ouvert.',
    },
    {
      icon: Smartphone,
      title: 'Application Mobile Intelligente',
      description: 'Programmation des heures creuses, suivi de la consommation en temps réel et déverrouillage à distance.',
    },
    {
      icon: Cpu,
      title: 'Délestage Dynamique Intégré',
      description: 'Communication directe avec votre compteur pour ajuster la charge sans jamais faire disjoncter votre logement.',
    },
    {
      icon: Award,
      title: 'Design Premium & Finition Aluminium',
      description: 'Esthétique moderne avec clapet de protection épuré et indicateurs LED d\'état personnalisables.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Équipement de référence"
          title="Zoom sur la borne TeltoCharge par GALEOHM"
          subtitle="Alliez technologie de pointe, durabilité exceptionnelle et esthétique scandinave avec notre solution phare."
        />

        {/* Top Grid: Main Image + 2 Highlight Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Main Product Shot */}
          <div className="lg:col-span-7 relative">
            <div className="macro-zoom-container rounded-3xl bg-slate-900 border border-slate-200 shadow-2xl aspect-[16/10] group">
              <Image
                src="/images/teltonika-parking.jpg"
                alt="Installation borne de recharge TeltoCharge sur parking de copropriété par GALEOHM"
                fill
                priority
                className="object-cover brightness-95 group-hover:brightness-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <Badge variant="blue" className="mb-2 bg-white/90 backdrop-blur">
                    Installation sur pied ou murale
                  </Badge>
                  <h3 className="text-xl font-bold">Adaptée à tous les parkings & résidences</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Dual Images */}
          <div className="lg:col-span-5 space-y-6">
            {/* Image 2: Macro Rain Detail */}
            <div className="macro-zoom-container rounded-3xl bg-slate-900 border border-slate-200 shadow-xl aspect-[16/9] group">
              <Image
                src="/images/teltonika-macro.jpg"
                alt="Gros plan étanchéité sous la pluie borne TeltoCharge GALEOHM"
                fill
                className="object-cover brightness-95 group-hover:brightness-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 block mb-0.5">
                  Résistance Extrême
                </span>
                <span className="text-sm font-bold">Châssis haute durabilité IP55</span>
              </div>
            </div>

            {/* Image 3: Wall Mounting Detail */}
            <div className="macro-zoom-container rounded-3xl bg-slate-900 border border-slate-200 shadow-xl aspect-[16/9] group">
              <Image
                src="/images/teltonika-wall.jpg"
                alt="Borne de recharge murale sur façade brique par GALEOHM"
                fill
                className="object-cover brightness-95 group-hover:brightness-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-400 block mb-0.5">
                  Finition Design
                </span>
                <span className="text-sm font-bold">Intégration architecturale élégante</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-subtle border border-slate-200/90 hover:border-brand-300 shadow-2xs hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">{feat.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
