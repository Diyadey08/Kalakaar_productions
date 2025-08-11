"use client"

import { motion, type MotionValue } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  heroImageY: MotionValue<string>
}

export function HeroSection({ heroImageY }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-v0-dark-purple text-v0-text-light py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8 z-10">
          <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">
            Advanced Certification in AI-Driven UI/UX Design
          </h2>
          <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl  font-bold leading-tight text-black dark:text-white">
            Be a Certified Design Innovator
          </h1>
          <p className="text-base md:text-lg text-v0-text-light max-w-md">
            Master the future of design with AI-enhanced workflows. Get certified and job-ready in 24 weeks.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2 overflow-hidden">
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User 1" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User 2" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User 3" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <span className="text-sm md:text-base text-v0-text-light">from 976+ reviews</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-base md:text-lg font-semibold text-black dark:text-white">Tools we covered:</h3>
            <div className="flex gap-4">
              <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Figma" />
              <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Adobe XD" />
              <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Sketch" />
              <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Miro" />
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px]">
          <motion.div style={{ y: heroImageY }} className="absolute w-full h-full flex justify-center items-center">
            <Image
              src="/Ui-Ux-1st.webp"
              alt="AI-Driven UI/UX Design Tools"
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
