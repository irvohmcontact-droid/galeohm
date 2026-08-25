import React from 'react'
import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité & RGPD | GALEOHM',
  description: 'Politique de protection des données personnelles et d\'utilisation des cookies sur GALEOHM.',
}

export default function PolitiquePage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-ink-DEFAULT text-sm leading-relaxed">
        <SectionHeader title="Politique de Confidentialité (RGPD)" align="left" headingLevel={1} />

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-ink-DEFAULT">1. Collecte des données personnelles</h2>
          <p>
            Les données personnelles renseignées dans notre formulaire de contact (nom, prénom, téléphone, email, adresse, type de véhicule) sont uniquement collectées dans le cadre du traitement de votre demande de devis ou d'étude technique pour l'installation d'une borne de recharge.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-ink-DEFAULT">2. Sécurité & Non-revente des données</h2>
          <p>
            GALEOHM s'engage à ne jamais vendre ni louer vos informations personnelles à des tiers. Vos données sont transmises de manière chiffrée (HTTPS) à nos services de traitement.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-ink-DEFAULT">3. Vos droits informatique et libertés</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données sur simple demande par email à contact@galeohm.fr.
          </p>
        </div>
      </div>
    </div>
  )
}
