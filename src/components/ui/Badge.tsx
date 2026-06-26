import React from 'react'

type BadgeVariant = 'ok' | 'warn' | 'due' | 'default'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  ok: 'bg-sage-soft text-sage',
  warn: 'bg-amber-soft text-amber-deep',
  due: 'bg-terracotta-soft text-terracotta',
  default: 'bg-paper text-ink-soft',
}

export default function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`text-[10.5px] font-bold px-[9px] py-1 rounded-full whitespace-nowrap ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
