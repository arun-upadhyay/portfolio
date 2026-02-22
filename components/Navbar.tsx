'use client'

import { useEffect, useState } from 'react'
import { HiMail } from 'react-icons/hi'
import { FiAward, FiBookOpen, FiBriefcase, FiFolder, FiLayers, FiUser } from 'react-icons/fi'
import { ThemeToggle } from '@/components/ThemeToggle'

const links = [
  { href: '#impact', label: 'Highlights', icon: FiAward },
  { href: '#about', label: 'About', icon: FiUser },
  { href: '#skills', label: 'Skills', icon: FiLayers },
  { href: '#experience', label: 'Experience', icon: FiBriefcase },
  { href: '#projects', label: 'Projects', icon: FiFolder },
  { href: '#education', label: 'Education', icon: FiBookOpen },
  { href: '#contact', label: 'Contact', icon: HiMail }
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#impact')

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((value): value is Element => value !== null)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActive(`#${visible[0].target.id}`)
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.6]
      }
    )

    sections.forEach((section) => observer.observe(section))

    const onHashChange = () => {
      if (window.location.hash) setActive(window.location.hash)
    }
    window.addEventListener('hashchange', onHashChange)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  return (
    <header className="nav-shell sticky top-0 z-50 border-b backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#top" className="font-semibold tracking-tight text-white">
          Arun Upadhyay
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setOpen(false)
                setActive(link.href)
              }}
              className={[
                'rounded-md px-3 py-2 text-sm transition',
                active === link.href
                  ? 'bg-white/15 text-white shadow-[0_0_20px_rgba(255,255,255,0.08)]'
                  : 'text-white/80 hover:bg-white/5 hover:text-white'
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/90 hover:bg-white/5 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 md:hidden">
          <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-4">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    'flex w-full items-center justify-center gap-3 rounded-md px-4 py-3 text-lg font-medium transition',
                    active === link.href
                      ? 'bg-white/15 text-white'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  ].join(' ')}
                  onClick={() => {
                    setOpen(false)
                    setActive(link.href)
                  }}
                >
                  <Icon className="h-5 w-5 text-white/70" />
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>
      ) : null}
    </header>
  )
}
