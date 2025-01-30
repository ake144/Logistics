"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
    {
      name: "Express",
      price: 299,
      features: [
        "Real-time shipment tracking",
        "Basic route optimization",
        "Standard customer support",
        "Up to 100 shipments/month",
      ],
    },
    {
      name: "Premium",
      price: 599,
      features: [
        "Real-time shipment tracking",
        "Advanced route optimization",
        "Priority customer support",
        "Up to 500 shipments/month",
        "Customs documentation assistance",
        "Analytics dashboard",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: 1499,
      features: [
        "Unlimited shipments",
        "Global logistics network access",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced analytics and reporting",
        "Supply chain consulting",
      ],
    },
  ]


export function PricingSection() {
    function cn(...classes: string[]): string {
        return classes.filter(Boolean).join(' ');
    }
  return (
    <section className="py-24 bg-black" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-medium">Pricing</span>
          <h2 className="text-3xl  md:text-6xl font-bold mt-4">
            Choose the plan that <span className="text-gray-400">fits you best</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get started for free and upgrade once you feel like it. There's a plan for everyone, from individual users
            to large teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "p-8 rounded-xl border",
                plan.popular ? "bg-white/10 border-cyan-400/50" : "bg-white/5 border-white/10",
              )}
            >
              <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-300">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "w-full",
                  plan.popular ? "bg-cyan-400 hover:bg-cyan-500 text-black" : "bg-white/10 hover:bg-white/20",
                )}
              >
                {plan.popular ? "Get started for free" : "Get started"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
