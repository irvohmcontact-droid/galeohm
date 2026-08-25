import React from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  headingLevel?: 1 | 2 | 3
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  headingLevel = 2,
  className,
}: SectionHeaderProps) {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements

  return (
    <div
      className={cn(
        'max-w-3xl mb-12 lg:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 bg-brand-50 px-3 py-1 rounded-full mb-3">
          {eyebrow}
        </span>
      )}
      <HeadingTag className="text-display-sm sm:text-display-md lg:text-display-lg text-ink-DEFAULT font-bold tracking-tight text-balance">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  )
}
