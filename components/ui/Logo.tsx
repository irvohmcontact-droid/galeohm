import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'full' | 'symbol'
  theme?: 'light' | 'dark'
  size?: number
  className?: string
}

export function Logo({
  variant = 'full',
  theme = 'light',
  size = 40,
  className,
}: LogoProps) {
  const isDark = theme === 'dark'

  // Colors
  const primaryColor = isDark ? '#ffffff' : '#0f172a' // Text color
  const accentColor = '#2563eb' // Electric blue accent
  const greenAccent = '#10b981' // Subtle energy green accent

  return (
    <div className={cn('inline-flex items-center gap-3 select-none', className)}>
      {/* Symbol Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="GALEOHM Logo Symbol"
      >
        {/* Outer orbital arc (representing grid / circle / G shape) */}
        <path
          d="M 38 18 C 36 10 28 6 19 8 C 10 10 5 19 6 29 C 7 38 16 44 26 43 C 34 42 41 36 42 27"
          stroke={accentColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dynamic Charging Pulse / Node (Connection point) */}
        <circle cx="42" cy="26" r="3" fill={greenAccent} />

        {/* Energy Wave / Connection flow inside G */}
        <path
          d="M 18 24 L 26 24 M 26 24 L 22 18 M 26 24 L 22 30"
          stroke={isDark ? '#ffffff' : '#0f172a'}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Subtle charge dot */}
        <circle cx="18" cy="24" r="2" fill={accentColor} />
      </svg>

      {/* Wordmark (GALEOHM) */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <span
            className={cn(
              'font-display font-extrabold tracking-[0.18em] leading-none uppercase text-xl',
              isDark ? 'text-white' : 'text-ink-DEFAULT'
            )}
          >
            GALEOHM
          </span>
          <span
            className={cn(
              'text-[0.6rem] font-medium tracking-[0.25em] uppercase leading-tight mt-0.5',
              isDark ? 'text-slate-400' : 'text-ink-muted'
            )}
          >
            MOBILITÉ ÉLECTRIQUE
          </span>
        </div>
      )}
    </div>
  )
}
