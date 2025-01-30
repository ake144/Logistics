"use client"

import { useId } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react" // Import React

interface GridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  offsetX?: number
  offsetY?: number
  children?: React.ReactNode
}

export function GridPattern({ size = 64, offsetX = 0, offsetY = 0, className, children, ...props }: GridPatternProps) {
  const patternId = useId()

  return (
    <div className={cn("", className)} {...props}>
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id={patternId}
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(${offsetX} ${offsetY})`}
          >
            <path
              d={`M${size / 2} 0 L${size} ${size / 2} L${size / 2} ${size} L0 ${size / 2} Z`}
              className="stroke-current fill-transparent"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        {children}
      </svg>
    </div>
  )
}

interface BlockProps extends React.SVGAttributes<SVGRectElement> {
  row?: number
  column?: number
}

GridPattern.Block = function Block({ row = 0, column = 0, className, ...props }: BlockProps) {
  return <motion.rect width={64} height={64} x={64 * column} y={64 * row} className={cn("", className)} {...(props as React.ComponentProps<typeof motion.rect>)} />
}

