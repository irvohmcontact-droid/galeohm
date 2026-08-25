'use client'

import React, { useState } from 'react'
import { CheckCircle2, Send, AlertCircle, Upload, Zap, User, MessageSquare } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { leadSchema, type LeadFormData } from '@/lib/validations'

export function LeadForm() {
  const [loading, setLoading] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const [formData, setFormData] = useState<LeadFormData>({
    logement: 'Maison individuelle',
    statut_du_bien: 'Propriétaire',
    vehicule: 'oui',
    marque: 'Tesla',
    puissance: '7,4 kW',
    compteur: 'Monophasé',
    distance: '5 à 10 m',
    dlai: 'Dès que possible',
    prenom: '',
    nom: '',
    phone: '',
    email: '',
    adresse: '',
    cp: '',
    ville: '',
    message: '',
    website: '', // Honeypot field
    consent: true,
  })

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)
    setFieldErrors({})

    // Full Zod validation across all fields
    const result = leadSchema.safeParse(formData)
    if (!result.success) {
      const errors: Record<string, string> = {}
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message
        }
      })
      setFieldErrors(errors)
      setErrorMessage('Veuillez vérifier les champs indiqués en rouge ci-dessous.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue lors de l\'envoi.')
      }

      setSubmitted(true)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message)
      } else {
        setErrorMessage('Une erreur inattendue est survenue.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="devis" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Formulaire Devis Express en 1 Étape"
          title="Demander mon étude & Devis gratuit"
          subtitle="Remplissez vos informations ci-dessous pour recevoir votre proposition technique personnalisée sous 24h."
        />

        <div className="bg-surface-subtle rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
          {/* Honeypot hidden input */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* BLOCK 1: VOTRE PROJET */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Zap className="w-5 h-5 text-brand-600" />
                  <h3 className="text-base font-extrabold text-slate-900">1. Votre Projet d'Installation</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Type de logement *
                    </label>
                    <select
                      name="logement"
                      value={formData.logement}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 font-medium"
                    >
                      <option value="Maison individuelle">Maison individuelle</option>
                      <option value="Appartement">Appartement</option>
                      <option value="Copropriété">Copropriété</option>
                      <option value="Entreprise">Entreprise / Local pro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Statut du bien *
                    </label>
                    <select
                      name="statut_du_bien"
                      value={formData.statut_du_bien}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 font-medium"
                    >
                      <option value="Propriétaire">Propriétaire</option>
                      <option value="Locataire">Locataire</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Marque du véhicule
                    </label>
                    <select
                      name="marque"
                      value={formData.marque}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 font-medium"
                    >
                      <option value="Tesla">Tesla</option>
                      <option value="Renault">Renault</option>
                      <option value="Peugeot">Peugeot</option>
                      <option value="BMW">BMW</option>
                      <option value="Mercedes">Mercedes</option>
                      <option value="Volkswagen">Volkswagen</option>
                      <option value="Audi">Audi</option>
                      <option value="Hyundai">Hyundai / Kia</option>
                      <option value="Autre">Autre marque</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Puissance souhaitée
                    </label>
                    <select
                      name="puissance"
                      value={formData.puissance}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 font-medium"
                    >
                      <option value="Je ne sais pas">Je ne sais pas (Conseil GALEOHM)</option>
                      <option value="7,4 kW">7,4 kW (Standard domicile)</option>
                      <option value="11 kW">11 kW (Triphasé)</option>
                      <option value="22 kW">22 kW (Haute performance)</option>
                      <option value="3,7 kW">3,7 kW (Hybride)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Distance tableau / borne
                    </label>
                    <select
                      name="distance"
                      value={formData.distance}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 font-medium"
                    >
                      <option value="Moins de 5 m">Moins de 5 m</option>
                      <option value="5 à 10 m">5 à 10 m</option>
                      <option value="10 à 20 m">10 à 20 m</option>
                      <option value="Plus de 20 m">Plus de 20 m</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* BLOCK 2: VOS COORDONNÉES */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <User className="w-5 h-5 text-brand-600" />
                  <h3 className="text-base font-extrabold text-slate-900">2. Vos Coordonnées de Contact</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      placeholder="Jean"
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500"
                    />
                    {fieldErrors.prenom && (
                      <p className="text-xs text-rose-500 mt-1 font-semibold">{fieldErrors.prenom}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Dupont"
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500"
                    />
                    {fieldErrors.nom && (
                      <p className="text-xs text-rose-500 mt-1 font-semibold">{fieldErrors.nom}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0612345678"
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500"
                    />
                    {fieldErrors.phone && (
                      <p className="text-xs text-rose-500 mt-1 font-semibold">{fieldErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean.dupont@email.com"
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500"
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-rose-500 mt-1 font-semibold">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Adresse d'installation
                    </label>
                    <input
                      type="text"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      placeholder="12 rue des Fleurs"
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Code postal *
                    </label>
                    <input
                      type="text"
                      name="cp"
                      value={formData.cp}
                      onChange={handleChange}
                      placeholder="75008"
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500"
                    />
                    {fieldErrors.cp && (
                      <p className="text-xs text-rose-500 mt-1 font-semibold">{fieldErrors.cp}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Ville *
                  </label>
                  <input
                    type="text"
                    name="ville"
                    value={formData.ville}
                    onChange={handleChange}
                    placeholder="Paris"
                    className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500"
                  />
                  {fieldErrors.ville && (
                    <p className="text-xs text-rose-500 mt-1 font-semibold">{fieldErrors.ville}</p>
                  )}
                </div>
              </div>

              {/* BLOCK 3: PRÉCISIONS & VALIDATION */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <MessageSquare className="w-5 h-5 text-brand-600" />
                  <h3 className="text-base font-extrabold text-slate-900">3. Précisions & Validation</h3>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Informations complémentaires / Message (Optionnel)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Précisions sur votre emplacement de garage, tableau électrique, etc."
                    className="w-full rounded-xl border border-slate-300 p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="p-3.5 rounded-xl border border-dashed border-slate-300 bg-white text-center">
                  <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                  <span className="block text-xs font-semibold text-slate-800">
                    Ajouter des photos du tableau ou du garage (Optionnel)
                  </span>
                  <span className="text-[0.65rem] text-slate-400">JPG, PNG jusqu'à 5 Mo</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-100/90 text-xs text-slate-600 space-y-2">
                  <p>
                    Vos informations sont utilisées uniquement pour vous recontacter concernant votre projet de borne de recharge.
                  </p>
                  <label className="flex items-start gap-2.5 cursor-pointer font-medium text-slate-900">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-0.5 rounded text-brand-600 focus:ring-brand-500"
                    />
                    <span>J'accepte d'être recontacté(e) concernant ma demande de devis. *</span>
                  </label>
                  {fieldErrors.consent && (
                    <p className="text-xs text-rose-500 font-semibold">{fieldErrors.consent}</p>
                  )}
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading} className="shadow-xl shadow-brand-500/25">
                    {loading ? (
                      <span>Traitement de votre demande...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        <span className="text-base font-extrabold">Recevoir mon devis gratuit sous 24h</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            /* SUCCESS CONFIRMATION */
            <div className="text-center py-10 space-y-4 animate-fade-in">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg glow-emerald">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900">
                Votre demande a bien été envoyée.
              </h3>
              <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                GALEOHM vous recontactera rapidement par téléphone au <strong className="text-slate-900">{formData.phone}</strong> pour étudier votre installation et établir votre devis personnalisé.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
