import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  fullWidth?: boolean
}

export function Button({ variant = 'primary', fullWidth, className = '', children, ...rest }: Props) {
  const base = 'px-4 py-2 text-sm font-medium border border-primary transition-colors cursor-pointer disabled:opacity-50'
  const variants = {
    primary: 'bg-primary text-white hover:bg-[#c94f38]',
    outline: 'bg-transparent text-primary hover:bg-primary hover:text-white',
  }
  return (
    <button
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
