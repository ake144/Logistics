"use client"

import { motion } from "framer-motion"

export const HeroText = ({ text }: { text: string }) => {
  return (
    <div className="relative">
      {/* Background Text (Glowing Effect) */}
      <motion.span
        className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        {text}
      </motion.span>

      {/* Main Text */}
      <motion.span
        className="relative bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {text}
      </motion.span>
    </div>
  )
}

