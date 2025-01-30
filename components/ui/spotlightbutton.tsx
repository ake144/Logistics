"use client"

import type React from "react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SpotlightButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  spotlightColor?: string
}

const SpotlightButton = ({
  children,
  className,
  spotlightColor = "rgba(255,255,255,0.1)",
  ...props
}: SpotlightButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const updatePosition = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const button = buttonRef.current
    const rect = button.getBoundingClientRect()

    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={updatePosition}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative overflow-hidden rounded-full bg-zinc-900 px-6 py-3",
        "transition-colors duration-200",
        "border border-zinc-800 hover:border-zinc-700",
        className,
      )}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 100%)`,
        }}
      />
      {children}
    </motion.button>
  )
}

export default SpotlightButton

