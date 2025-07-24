"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useTheme } from "next-themes"

export default function FramerSpotlight() {
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Motion values for the spotlight position with spring physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Add spring physics for smoother movement
  const springX = useSpring(mouseX, { damping: 25, stiffness: 400 })
  const springY = useSpring(mouseY, { damping: 25, stiffness: 400 })

  // Define multiple spotlight colors
  const spotlightColors = [
    { color: "rgba(36, 101, 237, 0.15)", darkColor: "rgba(36, 101, 237, 0.2)" }, // Blue (primary)
    { color: "rgba(236, 72, 153, 0.1)", darkColor: "rgba(236, 72, 153, 0.15)" }, // Pink
    { color: "rgba(16, 185, 129, 0.1)", darkColor: "rgba(16, 185, 129, 0.15)" }, // Green
  ]

  // Handle mouse movement globally
  const handleMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  // Setup effect - runs once on mount and cleans up on unmount
  useEffect(() => {
    setIsMounted(true)

    // Set initial position to center of viewport
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    mouseX.set(centerX)
    mouseY.set(centerY)

    // Add global mouse move listener
    window.addEventListener("mousemove", handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, []) // Empty dependency array - only run once

  if (!isMounted) {
    return null
  }

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
      style={{ mixBlendMode: 'normal' }}
    >
      {/* Primary spotlight that follows mouse cursor */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${
            isDark ? spotlightColors[0].darkColor : spotlightColors[0].color
          } 0%, transparent 70%)`,
          width: "1000px",
          height: "1000px",
          borderRadius: "50%",
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Secondary spotlights with independent animations */}
      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          x: ["0%", "10%", "5%", "0%"],
          y: ["0%", "5%", "10%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          background: `radial-gradient(circle, ${
            isDark ? spotlightColors[1].darkColor : spotlightColors[1].color
          } 0%, transparent 70%)`,
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          left: "20%",
          top: "30%",
        }}
      />

      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          x: ["0%", "-10%", "-5%", "0%"],
          y: ["0%", "-5%", "-10%", "0%"],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          background: `radial-gradient(circle, ${
            isDark ? spotlightColors[2].darkColor : spotlightColors[2].color
          } 0%, transparent 70%)`,
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          right: "20%",
          bottom: "30%",
        }}
      />

      {/* Additional colored spotlights */}
      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          background: `radial-gradient(circle, ${
            isDark ? "rgba(168, 85, 247, 0.2)" : "rgba(168, 85, 247, 0.15)"
          } 0%, transparent 70%)`,
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          left: "60%",
          top: "20%",
        }}
      />

      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
        style={{
          background: `radial-gradient(circle, ${
            isDark ? "rgba(251, 191, 36, 0.2)" : "rgba(251, 191, 36, 0.15)"
          } 0%, transparent 70%)`,
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          left: "30%",
          bottom: "15%",
        }}
      />
    </div>
  )
}
