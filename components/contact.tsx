"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SpotlightButton from "./ui/spotlightbutton"

export function Contact() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Contact us</h2>

          <form className="space-y-6">
            <div>
              <Input
                placeholder="Company name"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            <div>
              <Input
                placeholder="Your name"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email address*"
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[150px]"
              />
            </div>

            <div>
            <SpotlightButton>
                  <span className="relative mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text font-medium text-lg text-transparent transition-all duration-200">
                      SEND NOW
                  </span>
            </SpotlightButton>
              {/* <Button size="lg" className="w-full md:w-auto">
              </Button> */}
              <p className="mt-4 text-sm text-white/60">
                If you have any questions regarding your rights or subsequently decide to withdraw your consent, please
                send your request to us.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

