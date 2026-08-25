'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface AccordionItem {
  question: string
  answer: string | React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]) // First open by default

  const toggle = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index))
    } else {
      setOpenIndices([...openIndices, index])
    }
  }

  return (
    <div className={cn('divide-y divide-slate-200 border-y border-slate-200', className)}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx)
        return (
          <div key={idx} className="py-5">
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between text-left focus:outline-none group"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-semibold text-ink-DEFAULT group-hover:text-brand-600 transition-colors pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 flex-shrink-0 text-slate-400 group-hover:text-brand-500 transition-transform duration-200',
                  isOpen && 'transform rotate-180 text-brand-500'
                )}
              />
            </button>
            {isOpen && (
              <div className="mt-3 pr-6 text-slate-600 text-sm sm:text-base leading-relaxed animate-fade-in">
                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
