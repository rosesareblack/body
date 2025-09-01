"use client"

import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  via?: string
  to?: string
}

export function GradientText({ 
  children, 
  className, 
  from = "from-purple-600", 
  via = "via-pink-600", 
  to = "to-blue-600" 
}: GradientTextProps) {
  return (
    <span
      className={cn(
        `inline-block bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent`,
        className
      )}
    >
      {children}
    </span>
  )
}