"use client"

import { motion, type MotionValue } from "framer-motion"
import Image from "next/image"

interface CareersSectionProps {
  careersImageY: MotionValue<string>
}

export function CareersSection({ careersImageY }: CareersSectionProps) {
  const stats = [
    { value: "1 K+", label: "Successfully Placed" },
    { value: "30 %", label: "In Top MNC" },
    { value: "500 +", label: "High LPA" },
  ]

  return (
    <section className="relative w-full bg-v0-dark-purple text-v0-text-light py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8 z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#246CF4]">
            Build better careers with Us
          </h2>
          <p className="text-base md:text-lg text-v0-text-light max-w-md">
            Agileology gives you hands-on learning, guided support, and skills that stick.
          </p>
          {/* <div className="grid grid-cols-3 gap-6 pt-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#246CF4] mb-1">{stat.value}</div>
                <p className="text-sm md:text-base text-v0-text-light">{stat.label}</p>
              </div>
            ))}
          </div> */}
        </div>
        <div className="relative flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px]">
          <motion.div style={{ y: careersImageY }} className="absolute w-full h-full flex justify-center items-center">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Career Growth Illustration"
              width={800}
              height={600}
              className="object-contain w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
