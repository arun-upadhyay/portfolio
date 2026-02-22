'use client'

import { useEffect, useState } from 'react'
import { FiDroplet } from 'react-icons/fi'

type ThemeId = 'noir' | 'ocean' | 'ember'

const STORAGE_KEY = 'portfolio-theme'

const themes: Array<{ id: ThemeId; label: string }> = [
  { id: 'noir', label: 'Noir' },
  { id: 'ocean', label: 'Ocean' },
  { id: 'ember', label: 'Ember' }
]

function isTheme(value: string | null): value is ThemeId {
  return value === 'noir' || value === 'ocean' || value === 'ember'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeId>('noir')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    const initial = isTheme(saved) ? saved : 'noir'
    document.documentElement.setAttribute('data-theme', initial)
    setTheme(initial)
  }, [])

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((item) => item.id === theme)
    const next = themes[(currentIndex + 1) % themes.length].id
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  const currentLabel = themes.find((item) => item.id === theme)?.label ?? 'Noir'

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="theme-toggle inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-white/90 transition hover:text-white"
      aria-label={`Switch template. Current template: ${currentLabel}`}
      title={`Template: ${currentLabel}`}
    >
      <FiDroplet className="h-4 w-4" />
      <span className="hidden sm:inline">{currentLabel}</span>
    </button>
  )
}
