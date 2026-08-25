import { z } from 'zod'

export const phoneRegex = /^(\+33|0033|0)[1-9](\d{2}){4}$/

export const leadSchema = z.object({
  // Project info
  logement: z.string().min(1, 'Veuillez sélectionner un type de logement'),
  statut_du_bien: z.string().min(1, 'Veuillez préciser votre statut'),
  vehicule: z.string().optional(),
  marque: z.string().optional(),
  puissance: z.string().optional(),
  compteur: z.string().optional(),
  distance: z.string().optional(),
  dlai: z.string().optional(),

  // Contact info
  prenom: z.string().min(2, 'Prénom requis (minimum 2 caractères)').max(50),
  nom: z.string().min(2, 'Nom requis (minimum 2 caractères)').max(50),
  phone: z.string().regex(phoneRegex, 'Numéro de téléphone invalide (ex: 0612345678)'),
  email: z.string().email('Adresse email invalide'),
  adresse: z.string().optional(),
  cp: z.string().regex(/^\d{5}$/, 'Code postal à 5 chiffres requis (ex: 75008)'),
  ville: z.string().min(2, 'Nom de ville requis'),

  // Message & photos
  message: z.string().max(1000, 'Message trop long').optional(),
  
  // Anti-spam honeypot (must remain empty)
  website: z.string().max(0, 'Spam détecté').optional(),

  // Consent
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Vous devez accepter d\'être recontacté' }),
  }),
})

export type LeadFormData = z.infer<typeof leadSchema>

// Server-side validation schema (without consent & honeypot)
export const leadApiSchema = z.object({
  logement: z.string().min(1),
  statut_du_bien: z.string().min(1),
  vehicule: z.string().optional(),
  marque: z.string().optional(),
  puissance: z.string().optional(),
  compteur: z.string().optional(),
  distance: z.string().optional(),
  dlai: z.string().optional(),
  prenom: z.string().min(2).max(50),
  nom: z.string().min(2).max(50),
  phone: z.string().regex(phoneRegex),
  email: z.string().email(),
  adresse: z.string().optional(),
  cp: z.string().regex(/^\d{5}$/),
  ville: z.string().min(2),
  message: z.string().max(1000).optional(),
})

export type LeadApiData = z.infer<typeof leadApiSchema>
