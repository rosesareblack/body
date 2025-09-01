"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypingTextProps {
  text: string | string[]
  className?: string
  speed?: number
  delay?: number
  repeat?: boolean
  cursor?: boolean
}

export function TypingText({ 
  text, 
  className, 
  speed = 50, 
  delay = 1000,
  repeat = false,
  cursor = true 
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  const texts = Array.isArray(text) ? text : [text]
  const currentText = texts[currentTextIndex]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else if (texts.length > 1 || repeat) {
          setTimeout(() => setIsDeleting(true), delay)
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(currentText.slice(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((currentTextIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timer)
  }, [currentIndex, currentText, isDeleting, speed, delay, texts, currentTextIndex, repeat])

  useEffect(() => {
    if (cursor) {
      const cursorTimer = setInterval(() => {
        setShowCursor(!showCursor)
      }, 500)
      return () => clearInterval(cursorTimer)
    }
  }, [showCursor, cursor])

  return (
    <span className={cn("", className)}>
      {displayedText}
      {cursor && <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>}
    </span>
  )
}