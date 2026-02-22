import React from 'react'
import { Reveal } from '@/components/Reveal'

export function Section({
  id,
  title,
  subtitle,
  children
}: {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="section-shell scroll-mt-24 py-8 md:py-9">
      <Reveal>
        <div className="mb-6 md:mb-7">
          <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
          {subtitle ? <p className="mt-2 max-w-3xl text-white/70">{subtitle}</p> : null}
        </div>
      </Reveal>
      {children}
    </section>
  )
}
