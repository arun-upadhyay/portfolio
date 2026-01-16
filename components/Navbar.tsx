'use client'

import { useEffect, useMemo, useState } from 'react'
import { HiMail } from 'react-icons/hi'
import { FiUser, FiLayers, FiBriefcase, FiFolder, FiBookOpen } from 'react-icons/fi'

const links = [
    { href: '#about', label: 'About', icon: FiUser },
    { href: '#skills', label: 'Skills', icon: FiLayers },
    { href: '#experience', label: 'Experience', icon: FiBriefcase },
    { href: '#projects', label: 'Projects', icon: FiFolder },
    { href: '#education', label: 'Education', icon: FiBookOpen },
    { href: '#contact', label: 'Contact', icon: HiMail },
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

    const desktopLinks = useMemo(
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
    const mobileLinks = useMemo(
        () =>
            links.map((l) => {
                const Icon = l.icon
                return (
                    <a
                        key={l.href}
                        href={l.href}
                        className="flex w-full items-center justify-center gap-3 rounded-md px-4 py-3 text-lg font-medium text-white/90 hover:bg-white/10 hover:text-white"
                        onClick={() => setOpen(false)}
                    >
                        <Icon className="h-5 w-5 text-white/70" />
                        {l.label}
                    </a>
                )
            }),
        []
    )

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <a href="#top" className="font-semibold tracking-tight text-white">
                    Arun Upadhyay
                </a>

                <nav className="hidden md:flex items-center gap-1">{desktopLinks}</nav>

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
                    <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-4">
                        {mobileLinks}
                    </div>
                </div>
            ) : null}
        </header>
    )
}
