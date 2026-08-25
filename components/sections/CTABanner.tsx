import React from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

export function CTABanner() {
  return (
    <section className="bg-ink-DEFAULT text-white py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
          Prêt à recharger votre véhicule en toute simplicité ?
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-balance">
          Obtenez votre estimation gratuite en 2 minutes ou échangez directement avec un technicien GALEOHM.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact#devis" variant="primary" size="lg">
            <span>Estimer mon installation</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-400" />
            <span>Appeler un conseiller ({siteConfig.contact.phone})</span>
          </a>
        </div>
      </div>
    </section>
  )
}
