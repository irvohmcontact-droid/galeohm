import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Demande envoyée avec succès | GALEOHM',
  description: 'Merci pour votre demande d\'étude de borne de recharge.',
}

export default function MerciPage() {
  return (
    <div className="py-20 lg:py-28 bg-white text-center">
      <div className="max-w-xl mx-auto px-4 space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-extrabold text-ink-DEFAULT">Votre demande a bien été enregistrée.</h1>
        <p className="text-base text-ink-muted leading-relaxed">
          Un conseiller GALEOHM analyse votre projet et vous recontactera très rapidement pour étudier votre installation électrique et établir votre étude personnalisée.
        </p>

        <div className="pt-6">
          <Button href="/" variant="primary" size="md">
            <span>Retour à l'accueil</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
