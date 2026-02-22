'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  once?: boolean
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.2,
  once = true
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -16% 0px'
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold])

  const style = delay
    ? ({ ['--reveal-delay' as string]: `${delay}ms` } as CSSProperties)
    : undefined

  return (
    <div ref={ref} style={style} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
