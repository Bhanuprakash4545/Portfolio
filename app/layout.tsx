import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Developer - Full Stack Developer Portfolio',
  description: 'Professional portfolio showcasing projects, skills, education, and experience in full-stack web development. Built with Next.js, React, and TypeScript.',
  generator: 'v0.app',
  keywords: ['developer', 'portfolio', 'full stack', 'react', 'nextjs', 'typescript', 'web development', 'frontend', 'backend'],
  authors: [{ name: 'Alex Developer' }],
  openGraph: {
    title: 'Alex Developer - Full Stack Developer',
    description: 'Explore my work, projects, and expertise in modern web development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
