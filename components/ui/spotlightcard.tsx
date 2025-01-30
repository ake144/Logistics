"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  from?: string
  via?: string
  size?: number
  children?: React.ReactNode
}

export function SpotlightCard({
  from = "#1cd1c6",
  via = "#407cff",
  size = 300,
  className,
  children,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden", className)}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
      
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${from}, ${via}, transparent 50%)`,
        }}
      />
      {children}
    </motion.div>
  )
}

