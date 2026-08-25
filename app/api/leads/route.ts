import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { leadApiSchema } from '@/lib/validations'

// In-memory rate limiting map
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5 // max 5 submissions
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // per 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return true
  }
  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }
  record.count += 1
  return true
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer ultérieurement.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Honeypot check: 'website' field must be empty
    if (body.website && body.website.length > 0) {
      // Fake success response for spam bots
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Validate request data with Zod
    const validatedData = leadApiSchema.parse(body)

    // Build payload expected by external CRM
    const crmPayload = {
      nom: `${validatedData.prenom} ${validatedData.nom}`.trim(),
      prenom: validatedData.prenom,
      email: validatedData.email,
      phone: validatedData.phone,
      statut: 'Lead',
      source: 'Site web',
      notes: validatedData.message || '',
      logement: validatedData.logement || 'Maison individuelle',
      statut_du_bien: validatedData.statut_du_bien || 'Propriétaire',
      cp: validatedData.cp || '',
      vehicule: validatedData.vehicule || 'oui',
      marque: validatedData.marque || '',
      puissance: validatedData.puissance || '',
      compteur: validatedData.compteur || '',
      distance: validatedData.distance || '',
      dlai: validatedData.dlai || '',
      adresse: validatedData.adresse || '',
      ville: validatedData.ville || '',
      photos: '',
    }

    const crmApiUrl =
      process.env.CRM_API_URL || 'https://crm-zeta-two-60.vercel.app/api/public/leads'
    const crmApiKey = process.env.CRM_API_KEY

    // If no CRM key configured in env (e.g. initial dev), log warning but return error to user safely
    if (!crmApiKey || crmApiKey === 'VOTRE_CLE_API_ICI') {
      console.warn(
        '[GALEOHM API] Warning: CRM_API_KEY is not set in environment variables. Request logged.'
      )
      // Return clear error without exposing internal details
      return NextResponse.json(
        {
          error:
            "Le service de prise de rendez-vous est temporairement indisponible par formulaire. Contactez-nous par téléphone.",
        },
        { status: 503 }
      )
    }

    // Call CRM securely from server side
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10s timeout

    try {
      const crmRes = await fetch(crmApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': crmApiKey,
          Authorization: `Bearer ${crmApiKey}`,
        },
        body: JSON.stringify(crmPayload),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!crmRes.ok) {
        const errText = await crmRes.text()
        console.error('[GALEOHM API] CRM returned non-ok status:', crmRes.status, errText)
        return NextResponse.json(
          { error: 'Erreur lors du traitement de votre demande par le serveur.' },
          { status: 502 }
        )
      }

      return NextResponse.json({ success: true }, { status: 200 })
    } catch (fetchErr: unknown) {
      clearTimeout(timeoutId)
      if (fetchErr instanceof Error && fetchErr.name === 'AbortError') {
        return NextResponse.json(
          { error: 'Le serveur du CRM n\'a pas répondu dans les temps. Veuillez réespérer.' },
          { status: 504 }
        )
      }
      throw fetchErr
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Données soumises invalides.', details: error.errors },
        { status: 400 }
      )
    }

    console.error('[GALEOHM API] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Une erreur serveur inattendue est survenue.' },
      { status: 500 }
    )
  }
}
