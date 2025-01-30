"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = [
  {
    title: "This Site",
    links: ["Tracking", "Shipping", "Help & Support", "Communication Preferences"],
  },
  {
    title: "Other SL Sites",
    links: ["About Us", "Investors", "Supply Chain Solutions", "Streamline Logistics Jobs"],
  },
  {
    title: "Other",
    links: ["Legal Notice", "Privacy & Cookies", "Disclaimer", "Consent Settings"],
  },
  {
    title: "Connect with Us",
    links: ["LinkedIn", "Instagram", "YouTube", "X"],
  },
]

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-300">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Streamline Logistics. All rights reserved.</div>
          <div className="flex space-x-4">
            <SocialIcon Icon={Facebook} href="#" />
            <SocialIcon Icon={Twitter} href="#" />
            <SocialIcon Icon={Linkedin} href="#" />
            <SocialIcon Icon={Instagram} href="#" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

const SocialIcon: React.FC<{ Icon: React.ElementType; href: string }> = ({ Icon, href }) => (
  <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-200">
    <Icon size={20} />
  </Link>
)

export default Footer

