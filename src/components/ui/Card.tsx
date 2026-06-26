import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export default function Card({ children, className = '', dark = false }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl border
        ${dark
          ? 'bg-ink border-ink text-paper'
          : 'bg-paper-raised border-line'
        }
        ${className}
      `}
    >
      {children}
    </div>
  )
}
