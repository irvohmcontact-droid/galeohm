import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogArticles } from '@/config/blog'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Conseils & Guides IRVE | GALEOHM',
  description:
    'Retrouvez tous nos guides d\'experts sur les bornes de recharge pour véhicules électriques : prix, puissances, aides 2026, délestage et droit à la prise.',
}

export default function BlogIndexPage() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-surface-subtle border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Conseils & Guides"
            title="Tout comprendre à la recharge électrique"
            subtitle="Nos articles et comparatifs techniques pour réussir votre projet d'installation."
            headingLevel={1}
          />
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <article
                key={article.slug}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="font-bold text-brand-600 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime} min
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-ink-DEFAULT mb-3 line-clamp-2 leading-snug">
                    <Link
                      href={`/conseils/${article.slug}`}
                      className="hover:text-brand-600 transition-colors"
                    >
                      {article.h1}
                    </Link>
                  </h2>

                  <p className="text-sm text-ink-muted leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {new Date(article.publishDate).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>

                  <Link
                    href={`/conseils/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700"
                  >
                    <span>Lire l'article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
