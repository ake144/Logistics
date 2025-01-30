"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeroText } from "./herotext"
import { AnimatedTabs } from "./animatedTabs"
import { SearchBox } from "./searchBox"
import { useState } from "react"

export function Hero() {

  const [activeTab, setActiveTab] = useState("TRACK")
  const tabs = ["TRACK", "QUOTE", "SHIP", "BILLING"]
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://pgs-log.com/wp-content/uploads/2024/02/Pic-900-x-380-px.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <motion.div
        className="absolute inset-0 z-10 opacity-30"
        initial={{ backgroundPosition: "0 0" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 relative z-20 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Title */}
        <motion.div
          className="text-5xl md:text-8xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <HeroText text="Streamline Logistics" />
        </motion.div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto space-y-8">
          <AnimatedTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          <SearchBox />
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
      </motion.div>
    </section>
  )
}

