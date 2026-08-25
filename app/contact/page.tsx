import React from 'react'
import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LeadForm } from '@/components/form/LeadForm'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Contact & Devis gratuit installation borne | GALEOHM',
  description:
    'Contactez l\'équipe GALEOHM pour toute question sur l\'installation de votre borne de recharge en Île-de-France. Devis sous 24h.',
}

export default function ContactPage() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contact & Devis"
            title="Parlez de votre projet avec un expert GALEOHM"
            subtitle="Notre équipe est à votre disposition pour analyser vos contraintes techniques et vous établir une proposition sans engagement."
            headingLevel={1}
          />
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-surface-subtle border border-slate-200 text-center space-y-3">
              <Phone className="w-8 h-8 text-brand-500 mx-auto" />
              <h3 className="text-base font-bold text-ink-DEFAULT">Téléphone</h3>
              <p className="text-sm font-semibold text-brand-600">
                <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
              </p>
              <span className="text-xs text-slate-500 block">Du lundi au samedi de 8h à 19h</span>
            </div>

            <div className="p-6 rounded-2xl bg-surface-subtle border border-slate-200 text-center space-y-3">
              <Mail className="w-8 h-8 text-brand-500 mx-auto" />
              <h3 className="text-base font-bold text-ink-DEFAULT">Email</h3>
              <p className="text-sm font-semibold text-brand-600">
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </p>
              <span className="text-xs text-slate-500 block">Réponse garantie sous 24 heures</span>
            </div>

            <div className="p-6 rounded-2xl bg-surface-subtle border border-slate-200 text-center space-y-3">
              <MapPin className="w-8 h-8 text-brand-500 mx-auto" />
              <h3 className="text-base font-bold text-ink-DEFAULT">Zone d'intervention</h3>
              <p className="text-sm font-semibold text-ink-DEFAULT">Paris & Toute l'Île-de-France</p>
              <span className="text-xs text-slate-500 block">Interventions à domicile et entreprise</span>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </>
  )
}
