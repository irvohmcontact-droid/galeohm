import React from 'react'
import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Mentions Légales | GALEOHM',
  description: 'Mentions légales et informations éditoriales du site GALEOHM.',
}

export default function MentionsLegalesPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-ink-DEFAULT text-sm leading-relaxed">
        <SectionHeader title="Mentions Légales" align="left" headingLevel={1} />

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-ink-DEFAULT">1. Éditeur du site</h2>
          <p>
            Le présent site internet GALEOHM est édité par la société GALEOHM SASU, spécialisée dans la vente et l'installation de bornes de recharge pour véhicules électriques.
          </p>
          <p>
            • Siège social : {siteConfig.contact.address}, {siteConfig.contact.postalCode} {siteConfig.contact.city}<br />
            • Email : {siteConfig.contact.email}<br />
            • Téléphone : {siteConfig.contact.phone}<br />
            • Directeur de la publication : Équipe Direction GALEOHM
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-ink-DEFAULT">2. Hébergement</h2>
          <p>
            Le site est hébergé sur la plateforme sécurisée Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-ink-DEFAULT">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus (textes, logos SVG, illustrations, structures) du site GALEOHM sont protégés par le droit d'auteur. Toute reproduction totale ou partielle sans autorisation expresse est interdite.
          </p>
        </div>
      </div>
    </div>
  )
}
