import React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="bg-ink-DEFAULT text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" theme="dark" size={36} />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mt-3">
              {siteConfig.tagline}. Entreprise française spécialisée dans l'étude, la fourniture et l'installation professionnelle d'infrastructures de recharge (IRVE).
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p><strong className="text-slate-300">Zone d'intervention :</strong> Paris & Île-de-France</p>
              <p><strong className="text-slate-300">Email :</strong> {siteConfig.contact.email}</p>
              <p><strong className="text-slate-300">Téléphone :</strong> {siteConfig.contact.phone}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Solutions & Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/borne-recharge" className="text-slate-400 hover:text-white transition-colors">
                  Bornes de recharge
                </Link>
              </li>
              <li>
                <Link href="/borne-recharge-maison" className="text-slate-400 hover:text-white transition-colors">
                  Particuliers (Maison)
                </Link>
              </li>
              <li>
                <Link href="/borne-recharge-copropriete" className="text-slate-400 hover:text-white transition-colors">
                  Copropriétés
                </Link>
              </li>
              <li>
                <Link href="/borne-recharge-entreprise" className="text-slate-400 hover:text-white transition-colors">
                  Entreprises & Pros
                </Link>
              </li>
              <li>
                <Link href="/installation-borne-recharge" className="text-slate-400 hover:text-white transition-colors">
                  Installation IRVE
                </Link>
              </li>
              <li>
                <Link href="/delestage-dynamique" className="text-slate-400 hover:text-white transition-colors">
                  Délestage dynamique
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & SEO Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Informations & Tarifs
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/prix-borne-recharge" className="text-slate-400 hover:text-white transition-colors">
                  Prix & Tarifs 2025
                </Link>
              </li>
              <li>
                <Link href="/aides-borne-recharge" className="text-slate-400 hover:text-white transition-colors">
                  Aides & Subventions 2026
                </Link>
              </li>
              <li>
                <Link href="/conseils" className="text-slate-400 hover:text-white transition-colors">
                  Conseils & Guides SEO
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Foire aux questions (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Demande de devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Local SEO Hub Link & Accreditations Placeholder */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Zones d'intervention
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/installation-borne-recharge/paris" className="hover:text-white">Paris (75)</Link></li>
              <li><Link href="/installation-borne-recharge/sarcelles" className="hover:text-white">Sarcelles (95)</Link></li>
              <li><Link href="/installation-borne-recharge/val-doise" className="hover:text-white">Val-d'Oise (95)</Link></li>
              <li><Link href="/installation-borne-recharge/versailles" className="hover:text-white">Versailles (78)</Link></li>
              <li><Link href="/installation-borne-recharge/cergy" className="hover:text-white">Cergy (95)</Link></li>
              <li><Link href="/installation-borne-recharge/ile-de-france" className="hover:text-white">Île-de-France</Link></li>
            </ul>

            {/* Certification / Accreditation placeholder zone */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-[0.65rem] text-slate-400 uppercase tracking-widest block mb-2">
                Conformité & Réassurance
              </span>
              <div className="p-2.5 rounded border border-dashed border-slate-700 bg-slate-900/50 text-[0.7rem] text-slate-400">
                Normes NF C 15-100 & qualification IRVE. Zone réservée aux certifications officielles et partenariats.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} GALEOHM. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/mentions-legales" className="hover:text-slate-300">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-slate-300">
              Politique de confidentialité
            </Link>
            <Link href="/cgv" className="hover:text-slate-300">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
