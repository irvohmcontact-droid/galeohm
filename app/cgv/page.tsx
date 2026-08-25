import React from 'react'
import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente (CGV) | GALEOHM',
  description: 'Conditions générales de vente et de fourniture de prestations d\'installation IRVE par GALEOHM.',
}

export default function CGVPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-ink-DEFAULT text-sm leading-relaxed">
        <SectionHeader title="Conditions Générales de Vente (CGV)" align="left" headingLevel={1} />

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-ink-DEFAULT">1. Champ d'application</h2>
          <p>
            Les présentes CGV régissent les ventes de matériels (bornes de recharge, câbles, protections) et les prestations d'installation IRVE réalisées par GALEOHM pour le compte de clients particuliers et professionnels.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-ink-DEFAULT">2. Devis et Commandes</h2>
          <p>
            Toute prestation fait l'objet d'un devis préalable gratuit valable 30 jours. La commande est ferme dès signature du devis et versement de l'acompte convenu.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-ink-DEFAULT">3. Garanties et Réclamations</h2>
          <p>
            Les bornes installées bénéficient de la garantie constructeur (généralement 2 à 3 ans). Les travaux de raccordement électrique sont couverts par la garantie décennale et la responsabilité civile professionnelle.
          </p>
        </div>
      </div>
    </div>
  )
}
