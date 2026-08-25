'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Bornes de recharge', href: '/borne-recharge' },
    { label: 'Installation', href: '/installation-borne-recharge' },
    { label: 'Prix', href: '/prix-borne-recharge' },
    { label: 'Aides', href: '/aides-borne-recharge' },
    { label: 'Professionnels', href: '/professionnels' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100',
        isScrolled ? 'py-3 shadow-sm' : 'py-4 lg:py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Logo variant="full" size={isScrolled ? 34 : 38} />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive
                    ? 'text-brand-600 bg-brand-50 font-semibold'
                    : 'text-ink-muted hover:text-ink-DEFAULT hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-2 text-xs font-semibold text-ink-muted hover:text-brand-600 px-3 py-2 transition-colors"
            title="Appeler notre équipe"
          >
            <Phone className="w-3.5 h-3.5 text-brand-500" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <Button href="/contact#devis" variant="primary" size="sm">
            Obtenir mon devis
          </Button>
        </div>

        {/* Mobile Hamburger & CTA */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button href="/contact#devis" variant="primary" size="sm" className="text-xs px-3 py-1.5">
            Devis
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-ink-muted hover:text-ink-DEFAULT hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-4 py-2.5 rounded-lg text-base font-medium transition-colors',
                  isActive
                    ? 'text-brand-600 bg-brand-50 font-semibold'
                    : 'text-ink-muted hover:text-ink-DEFAULT hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center justify-center gap-2 w-full text-center py-2.5 rounded-lg bg-slate-100 font-semibold text-ink-DEFAULT text-sm"
            >
              <Phone className="w-4 h-4 text-brand-500" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <Button href="/contact#devis" variant="primary" fullWidth size="md">
              Obtenir mon devis gratuit
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
