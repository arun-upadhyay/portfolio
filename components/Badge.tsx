import React from 'react'

export function Badge({children}: { children: React.ReactNode }) {
    return (
        <span
            className="
        inline-flex items-center
        rounded-full
        border border-white/10
        bg-white/[0.05]
        px-3 py-1
        text-xs font-medium
        text-white/80
        transition
        hover:border-white/20
        ">
      {children}
    </span>
    )
}
