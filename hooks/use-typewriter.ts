'use client'

import { useState, useEffect } from 'react'

interface UseTypewriterOptions {
  text: string
  speed?: number
  startDelay?: number
}

export function useTypewriter({ text, speed = 100, startDelay = 0 }: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!text) return

    const timeoutId = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.substring(0, index))
          index++
        } else {
          setIsComplete(true)
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(timeoutId)
  }, [text, speed, startDelay])

  return { displayedText, isComplete }
}
