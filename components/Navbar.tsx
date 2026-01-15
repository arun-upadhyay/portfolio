'use client'

import { useEffect, useMemo, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const linkItems = useMemo(
    () =>
      links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
          onClick={() => setOpen(false)}
        >
          {l.label}
        </a>
      )),
    []
  )

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="#top" className="font-semibold tracking-tight text-white">
          Arun Upadhyay
        </a>

        <nav className="hidden md:flex items-center gap-1">{linkItems}</nav>

        <button
          className="md:hidden rounded-md border border-white/10 px-3 py-2 text-sm text-white/90 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-white/10">
          <div className="container mx-auto flex flex-col gap-1 py-3">{linkItems}</div>
        </div>
      ) : null}
    </header>
  )
}
