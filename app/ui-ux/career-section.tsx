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
    <section className="relative w-full bg-v0-dark-purple text-v0-text-light py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-3 md:space-y-4 z-10 pt-4 md:pt-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight  text-black dark:text-white">
            Build better careers with Us
          </h2>
          <p className="text-base md:text-lg text-v0-text-light max-w-md">
            Agileology gives you hands-on learning, guided support, and skills that stick.
          </p>
          
          <div className="flex flex-wrap justify-start gap-24 mt-8">
            <button 
              onClick={() => {
                // Navigate to main page and scroll to contact section
                window.location.href = '/#contact';
              }}
              className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-blue-700 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Enquire Now
              </span>
            </button>
          </div>
          
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
              src="/https___corcel.b-cdn.net_ca629a1a-9f6d-495a-9bee-738bc73026fd.webp"
              alt="Student learning UI/UX design with laptop and design tools"
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
