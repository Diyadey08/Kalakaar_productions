"use client"

import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import { HeroSection } from "@/app/ui-ux/hero-section"
import { KeyFeaturesSection } from "@/app/ui-ux/key-features-section"
import { CurriculumSection } from "@/app/ui-ux/curriculum-section"
import { CareersSection } from "@/app/ui-ux/career-section"
import { ProgramWorkSection } from "@/app/ui-ux/program-work-section"
import { PlacementSupportSection } from "@/app/ui-ux/placement-support-section"

export default function CoursePage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Adjust parallax values for a more noticeable effect if desired
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const careersImageY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])

  return (
    <div ref={containerRef} className="w-full min-h-screen overflow-x-hidden">
      <HeroSection heroImageY={heroImageY} />
      <KeyFeaturesSection />
      <CurriculumSection />
      <CareersSection careersImageY={careersImageY} />
      <ProgramWorkSection />
      
    </div>
  )
}
