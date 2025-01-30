"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Loader2, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const SearchBox = () => {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [trackingResult, setTrackingResult] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrackingNumber(e.target.value)
    setError("")
    setTrackingResult("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number")
      return
    }
    setIsLoading(true)
    setError("")
    setTrackingResult("")

    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (Math.random() > 0.5) {
      setTrackingResult("Your package is in transit. Estimated delivery: Tomorrow")
    } else {
      setError("Invalid tracking number. Please try again.")
    }
    setIsLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="relative"
    >
      <form onSubmit={handleSubmit} className="relative z-10">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              type="text"
              name="tracking"
              value={trackingNumber}
              onChange={handleInputChange}
              placeholder="Tracking Number or InfoNotice"
              className={cn(
                "w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 pl-10 h-12",
                "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                "transition-all duration-300 ease-in-out",
              )}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            {trackingNumber && (
              <button
                type="button"
                onClick={() => setTrackingNumber("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className={cn(
              "h-12 px-8 bg-gradient-to-r from-blue-500 to-cyan-500",
              "hover:opacity-90 transition-all duration-300 ease-in-out",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            )}
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "TRACK"}
          </Button>
        </div>
      </form>

      <AnimatePresence>
        {(error || trackingResult) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "mt-4 p-4 rounded-lg",
              error ? "bg-red-500/10 text-red-400" : "bg-green-500/10 text-green-400",
            )}
          >
            {error || trackingResult}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.div>
  )
}

