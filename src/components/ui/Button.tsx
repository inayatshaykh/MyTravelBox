import React from 'react'

type ButtonVariant = 'primary' | 'ghost' | 'dark' | 'outline'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fullWidth?: boolean
  children: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-amber text-white hover:opacity-90 border-transparent',
  ghost: 'bg-transparent text-ink border border-line hover:border-ink',
  dark: 'bg-ink text-paper hover:opacity-90 border-transparent',
  outline: 'bg-transparent text-amber-deep border border-amber hover:bg-amber-soft',
}

export default function Button({
  variant = 'primary',
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        font-inter font-bold text-[13.5px] rounded-[10px] cursor-pointer
        inline-flex items-center justify-center gap-2 px-5 py-[11px]
        transition-all duration-150 active:scale-[0.98]
        focus-visible:ring-2 focus-visible:ring-amber focus-visible:outline-none
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
