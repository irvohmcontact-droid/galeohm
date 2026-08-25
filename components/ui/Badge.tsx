import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'green' | 'outline'
  className?: string
}

export function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  const variants = {
    default: 'bg-surface-muted text-ink-muted border border-slate-200',
    blue: 'bg-brand-50 text-brand-700 border border-brand-200',
    green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    outline: 'bg-transparent text-ink-muted border border-slate-300',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
