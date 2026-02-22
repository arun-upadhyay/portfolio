import React from 'react'
import { Reveal } from '@/components/Reveal'

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <Reveal className="h-full">
      <div
        className={`
        card-shell
        h-full
        flex flex-col
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-md
        p-6
        transition duration-300
        hover:border-white/20
        hover:-translate-y-0.5
        hover:shadow-[0_18px_45px_rgba(14,165,233,0.12)]
        ${className}
      `}
      >
        {children}
      </div>
    </Reveal>
  )
}
