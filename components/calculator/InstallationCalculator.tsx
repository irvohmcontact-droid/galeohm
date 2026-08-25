'use client'

import React, { useState } from 'react'
import { Check, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export interface CalculatorState {
  logement: string
  proprietaire: string
  vehicule: string
  puissance: string
  compteur: string
  distance: string
  delai: string
}

export function InstallationCalculator() {
  const [step, setStep] = useState<number>(1)
  const [answers, setAnswers] = useState<CalculatorState>({
    logement: '',
    proprietaire: '',
    vehicule: '',
    puissance: '',
    compteur: '',
    distance: '',
    delai: '',
  })

  const stepsData = [
    {
      id: 1,
      question: 'Quel est votre logement ?',
      field: 'logement' as keyof CalculatorState,
      options: ['Maison', 'Appartement', 'Copropriété', 'Entreprise'],
    },
    {
      id: 2,
      question: 'Êtes-vous propriétaire ?',
      field: 'proprietaire' as keyof CalculatorState,
      options: ['Oui', 'Non'],
    },
    {
      id: 3,
      question: 'Quel véhicule possédez-vous (ou allez-vous acquérir) ?',
      field: 'vehicule' as keyof CalculatorState,
      options: [
        'Tesla',
        'Renault',
        'Peugeot',
        'BMW',
        'Mercedes',
        'Volkswagen',
        'Audi',
        'Hyundai',
        'Kia',
        'Autre',
      ],
    },
    {
      id: 4,
      question: 'Quelle puissance souhaitez-vous ?',
      field: 'puissance' as keyof CalculatorState,
      options: ['Je ne sais pas', '3,7 kW', '7,4 kW', '11 kW', '22 kW'],
    },
    {
      id: 5,
      question: 'Quel est votre compteur électrique ?',
      field: 'compteur' as keyof CalculatorState,
      options: ['Monophasé', 'Triphasé', 'Je ne sais pas'],
    },
    {
      id: 6,
      question: 'Distance approximative entre le tableau et la borne',
      field: 'distance' as keyof CalculatorState,
      options: ['moins de 5 m', '5 à 10 m', '10 à 20 m', 'plus de 20 m', 'je ne sais pas'],
    },
    {
      id: 7,
      question: 'Quand souhaitez-vous installer votre borne ?',
      field: 'delai' as keyof CalculatorState,
      options: ['Dès que possible', 'Dans le mois', 'Dans les prochains mois', 'Je me renseigne'],
    },
  ]

  const handleSelect = (field: keyof CalculatorState, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }))
    if (step < 7) {
      setStep(step + 1)
    } else {
      setStep(8) // Summary step
    }
  }

  const reset = () => {
    setStep(1)
    setAnswers({
      logement: '',
      proprietaire: '',
      vehicule: '',
      puissance: '',
      compteur: '',
      distance: '',
      delai: '',
    })
  }

  const currentStepData = stepsData.find((s) => s.id === step)

  return (
    <section id="calculateur" className="py-20 lg:py-28 bg-surface-subtle border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Simulateur d'installation"
          title="Quel type d'installation vous faut-il ?"
          subtitle="Répondez à ces 7 questions pour obtenir une pré-estimation adaptée à votre projet."
        />

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-semibold text-ink-muted mb-2">
              <span>Étape {Math.min(step, 7)} sur 7</span>
              <span>{Math.round((Math.min(step, 7) / 7) * 100)} %</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-500 transition-all duration-300 rounded-full"
                style={{ width: `${(Math.min(step, 7) / 7) * 100}%` }}
              />
            </div>
          </div>

          {/* Active Question Step */}
          {step <= 7 && currentStepData && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl sm:text-2xl font-bold text-ink-DEFAULT text-balance">
                {currentStepData.question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {currentStepData.options.map((opt, idx) => {
                  const isSelected = answers[currentStepData.field] === opt
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(currentStepData.field, opt)}
                      className={`p-4 rounded-xl border text-left font-medium transition-all duration-200 flex items-center justify-between group ${
                        isSelected
                          ? 'border-brand-500 bg-brand-50/50 text-brand-700 font-bold ring-1 ring-brand-500'
                          : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50 text-ink-DEFAULT'
                      }`}
                    >
                      <span className="text-base">{opt}</span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          isSelected ? 'text-brand-600' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  ))}
              </div>

              {step > 1 && (
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted hover:text-ink-DEFAULT"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Question précédente</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Results Step */}
          {step === 8 && (
            <div className="text-center space-y-6 py-4 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-ink-DEFAULT mb-2">
                  Votre installation peut être étudiée.
                </h3>
                <p className="text-sm text-ink-muted max-w-lg mx-auto">
                  Merci ! Vos informations nous permettent de calibrer la solution idéale pour votre véhicule et votre logement.
                </p>
              </div>

              {/* Summary recap */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Logement :</span>
                  <span className="font-semibold">{answers.logement} ({answers.proprietaire})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Véhicule :</span>
                  <span className="font-semibold">{answers.vehicule}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Puissance & Compteur :</span>
                  <span className="font-semibold">{answers.puissance} / {answers.compteur}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Distance & Délai :</span>
                  <span className="font-semibold">{answers.distance} ({answers.delai})</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="#devis" variant="primary" size="lg" className="w-full sm:w-auto shadow-md">
                  Recevoir mon estimation
                </Button>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-ink-DEFAULT"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Recommencer</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
