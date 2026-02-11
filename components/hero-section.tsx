'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTypewriter } from '@/hooks/use-typewriter'

export function HeroSection() {
  const { displayedText, isComplete } = useTypewriter({
    text: 'Hi, I am Bandi Bhanu Prakash',
    speed: 80,
    startDelay: 300,
  })
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'resume.pdf'
    link.click()
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-accent/5 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 space-y-2 animate-fade-in">
          <p className="text-primary font-semibold text-lg">Welcome to my portfolio</p>
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary leading-tight min-h-[4rem] md:min-h-[5rem]">
              {displayedText}
              {mounted && (
                <span className={`inline-block w-1 md:w-2 ml-2 h-16 md:h-24 bg-gradient-to-b from-primary to-accent rounded-full shadow-lg ${
                  isComplete ? 'animate-blink' : 'animate-pulse'
                } ${theme === 'dark' ? 'drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]' : ''}`} />
              )}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            Full Stack Developer |  Web Designer
          </p>
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          I specialize in building scalable, modern web applications using React, Next.js, TypeScript, and Tailwind CSS. Passionate about creating intuitive user experiences and clean, maintainable code that solves real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={() => {
              const element = document.getElementById('projects')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            size="lg"
            className="group"
          >
            View My Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={handleDownloadResume}
            variant="outline"
            size="lg"
          >
            Download Resume
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/Bhanuprakash4545"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all p-3 hover:bg-accent rounded-lg hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="www.linkedin.com/in/bandi-bhanu-prakash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all p-3 hover:bg-accent rounded-lg hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:bandibhanuprakash0613@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all p-3 hover:bg-accent rounded-lg hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
