import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { getArticleBySlug, getAllArticleSlugs } from '@/config/blog'
import { LeadForm } from '@/components/form/LeadForm'
import { CTABanner } from '@/components/sections/CTABanner'
import { JsonLd } from '@/components/seo/JsonLd'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}

  return {
    title: `${article.title} | GALEOHM`,
    description: article.description,
    keywords: article.keywords,
  }
}

export default function BlogArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Conseils', url: '/conseils' },
    { name: article.title, url: `/conseils/${article.slug}` },
  ]

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <article className="py-12 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/conseils"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à tous les guides</span>
          </Link>

          <header className="space-y-4 mb-10 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="font-bold text-brand-600 uppercase tracking-wider">
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime} min de lecture
              </span>
              <span>•</span>
              <span>
                Mis à jour le{' '}
                {new Date(article.updatedDate || article.publishDate).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-DEFAULT tracking-tight leading-tight text-balance">
              {article.h1}
            </h1>

            <p className="text-lg text-ink-muted leading-relaxed font-normal text-balance">
              {article.description}
            </p>
          </header>

          {/* Body Content */}
          <div className="prose prose-slate max-w-none text-ink-DEFAULT space-y-6 leading-relaxed text-sm sm:text-base">
            <h2 className="text-xl sm:text-2xl font-bold text-ink-DEFAULT mt-8 mb-4">
              Synthèse de l'étude & Recommandations GALEOHM
            </h2>

            <p>{article.excerpt}</p>

            <p>
              L'installation d'une borne de recharge pour véhicule électrique (IRVE) doit respecter scrupuleusement la norme de sécurité <strong>NF C 15-100</strong>. L'utilisation d'une simple prise domestique standard expose à des risques d'échauffement sur de longues durées de charge (8h à 12h).
            </p>

            <div className="p-6 rounded-2xl bg-surface-subtle border border-slate-200 my-6 space-y-3">
              <h3 className="text-lg font-bold text-ink-DEFAULT">Les points clés à retenir :</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Un tableau électrique équipé de protections dédiées (Interrupteur différentiel Hi/ASI + Disjoncteur).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Un module de délestage dynamique conseillé pour préserver la puissance globale du compteur.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                  <span>L'éligibilité au crédit d'impôt de 500 € et à la TVA réduite à 5,5 %.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-ink-DEFAULT mt-8 mb-4">
              L'avis technique de notre expert IRVE
            </h2>

            <p>
              Avant toute décision d'achat de matériel, nous vous recommandons de réaliser une visite technique préalable. Cela permet d'évaluer la section de câble exacte nécessaire selon la distance entre le tableau électrique et l'emplacement de stationnement.
            </p>

            <div className="p-6 rounded-2xl bg-brand-50 border border-brand-200 my-8 text-center space-y-4">
              <h3 className="text-lg font-bold text-brand-900">
                Vous souhaitez concrétiser votre projet d'installation ?
              </h3>
              <p className="text-sm text-brand-700 max-w-lg mx-auto">
                Nos techniciens certifiés se déplacent chez vous en Île-de-France pour établir une étude et un devis gratuit sans engagement.
              </p>
              <div className="pt-2">
                <Link
                  href="#devis"
                  className="inline-block px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  Demander une étude gratuite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <LeadForm />
      <CTABanner />
    </>
  )
}
