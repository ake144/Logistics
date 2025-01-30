"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function News() {
  const news = [
    {
      date: "JULE 14, 2024",
      title: "Streamline Logistics forwarding announces leadership changes in Europe",
      image:
        "https://images.unsplash.com/photo-1592963218710-1f12d7db6076?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      date: "JULE 12, 2024",
      title:
        "New postal law creates clarity and ensures the continuation of nationwide postal services - but also reveals weaknesses",
      image:
        "https://images.unsplash.com/photo-1592963219573-c388f7232a5f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      date: "JULE 13, 2024",
      title: "Redefining bulk liquid logistics: How DHL Flexitanks are transforming the industry",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-29%2021-57-18-xsjBzgVplwXOeVPvmQ0PGQaK9oMUMW.png",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Latest News & Insights
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <Link href="#" className="block">
                <div className="relative h-64 mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="text-white/60 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold group-hover:text-white/80 transition-colors">{item.title}</h3>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

