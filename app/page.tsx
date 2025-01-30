import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Strategy } from "@/components/strategy"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"
import { Sustainability } from "@/components/sustainability"
import { LampText } from "@/components/lampText"
import { Services } from "@/components/servicecards"
import { Logos } from "@/components/logocloud"
import { PricingSection } from "@/components/pricing"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <LampText  />
        <Services />
        <Logos  />
        <PricingSection  />
        <Strategy />
        <Sustainability />
        <News />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

