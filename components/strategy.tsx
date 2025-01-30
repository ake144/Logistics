"use client"

import { Timeline } from "./ui/timeline"

export function Strategy() {
  const strategies = [
    {
      title: "OUR STRATEGY",
      content: `"Strategy 2025 - Delivering excellence in a digital world" is laying the foundation to continue the successful growth trajectory of the world's leading logistics company, Streamline Logistics. The company will be focusing even more consistently on harnessing the sustained potential for profitable long-term growth contained in its core logistics businesses.`,
    },
    {
      title: "OUR SUSTAINABILITY",
      content:
        "The decisions we make today can make a positive impact on our tomorrow. We can't achieve results without a clear plan. That's why we drew up a Sustainability Roadmap - our detailed plan to achieve our environmental, social, and governance goals. It builds on our progress and is a cornerstone of our company strategy.",
    },
    {
      title: "OUR RESPONSIBILITY",
      content:
        "With approximately 600,000 employees, we are one of the world's largest employers in our industry. To be a great company to work for all, we take action to provide a safe, inclusive and engaging working environment for all our employees. We continue to take steps to attract and retain the best talent, increase women in management to achieve gender parity.",
    },
  ]

  return (
    <section className="py-20 bg-black w-full">
      {/* <div className="container mx-auto px-4">
        <div className="space-y-16">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="grid md:grid-cols-[300px,1fr] gap-8"
            >
              <h3 className="text-xl font-bold">{strategy.title}</h3>
              <p className="text-white/70 text-lg leading-relaxed">{strategy.content}</p>
            </motion.div>
          ))}
        </div>
      </div> */}

   <Timeline data={strategies} />
    </section>
  )
}



