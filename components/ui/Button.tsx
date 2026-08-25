'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  fullWidth = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-brand-500 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99]'

  const variants = {
    primary:
      'bg-brand-500 text-white hover:bg-brand-600 shadow-sm hover:shadow text-slate-50',
    secondary:
      'bg-ink-DEFAULT text-white hover:bg-ink-muted shadow-sm',
    outline:
      'border-2 border-brand-500 text-brand-500 hover:bg-brand-50 bg-transparent',
    ghost:
      'text-ink-DEFAULT hover:bg-surface-muted hover:text-brand-600 bg-transparent',
  }

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-semibold',
  }

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
