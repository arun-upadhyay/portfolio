import React from 'react'

export function Card({ children }: { children: React.ReactNode }) {
  return (
      <div
          className="
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-md
        p-6
        transition
        hover:border-white/20
      "      >
        {children}
      </div>
  )
}
