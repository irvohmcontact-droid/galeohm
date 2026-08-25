'use client'

import React, { useState, useEffect } from 'react'
import { Phone, FileText } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/Button'

export function MobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 p-3 shadow-lg animate-fade-in">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={siteConfig.contact.phoneHref}
          className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-ink-DEFAULT font-semibold text-xs transition-colors hover:bg-slate-50"
        >
          <Phone className="w-4 h-4 text-brand-500" />
          <span>Appeler</span>
        </a>
        <Button href="/contact#devis" variant="primary" size="sm" className="w-full text-xs py-2.5">
          <FileText className="w-4 h-4" />
          <span>Devis gratuit</span>
        </Button>
      </div>
    </div>
  )
}
