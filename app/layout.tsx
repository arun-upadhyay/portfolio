import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arun Upadhyay | Senior Software Engineer',
  description:
    'Portfolio of Arun Kumar Upadhyay, Senior Software Engineer with 12+ years of experience in React, TypeScript, PHP, Node.js, Java, and AWS.',
  openGraph: {
    title: 'Arun Upadhyay | Portfolio',
    description:
      'Senior Software Engineer with 12+ years building enterprise web and backend systems.',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
