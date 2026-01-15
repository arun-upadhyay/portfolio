import React from 'react'

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
    <section id={id} className="scroll-mt-24 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-3xl text-white/70">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  )
}
