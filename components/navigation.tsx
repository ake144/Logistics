"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Search, X, Menu } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import SpotlightButton from "./ui/spotlightbutton"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // Navbar
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="relative z-20 border-b border-white/10">
      <div className="  backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              Streamline Logistics
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 px-8">
              <nav className="flex items-center gap-8">
                <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  SHIPPING
                </Link>
                <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  TRACKING
                </Link>
                <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  BUSINESS SOLUTIONS
                </Link>
                <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  SUPPORT
                </Link>
              </nav>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                <Search className="h-5 w-5" />
              </Button>

              <SpotlightButton>
                  <span className="relative mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text font-medium text-lg text-transparent transition-all duration-200">
                  LOG IN
                  </span>
            </SpotlightButton>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white/70 hover:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-white/10 bg-gradient-to-r from-purple-900/50 to-black/50 backdrop-blur-sm"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="#" className="text-white/70 hover:text-white transition-colors py-2">
                SHIPPING
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors py-2">
                TRACKING
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors py-2">
                BUSINESS SOLUTIONS
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors py-2">
                SUPPORT
              </Link>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
                LOG IN
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}