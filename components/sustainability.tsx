"use client"

import { motion } from "framer-motion"

export function Sustainability() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            Streamline Logistics aims to achieve <span className="bg-cyan-500/20 px-2">net-zero</span> emissions
            logistics by the year 2050
          </h2>

          <div
            className="mt-12 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

