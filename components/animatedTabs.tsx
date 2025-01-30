"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const AnimatedTabs = ({
  tabs,
  activeTab,
  onTabChange,
}: {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}) => {
  return (
    <div className="relative p-1 bg-white/5 backdrop-blur-md rounded-lg">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-y-1 rounded-md bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
        initial={false}
        animate={{
          left: `${(tabs.indexOf(activeTab) * 100) / tabs.length}%`,
          width: `${100 / tabs.length}%`,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* Tabs */}
      <div className="relative flex">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant="ghost"
            className={cn(
              "flex-1 relative z-10 transition-colors duration-200",
              tab === activeTab ? "text-white" : "text-white/70 hover:text-white",
            )}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>
    </div>
  )
}

