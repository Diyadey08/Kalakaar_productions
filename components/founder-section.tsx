"use client"

import { useState, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Star, Award, Users, TrendingUp, Heart, Zap, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

interface ImageData {
  url: string
  alt: string
}

// Dummy JSON data with placeholder images
const founderData = {
  images: [
    
    {
      url: "/IMG_3806-removebg-preview.png",
      alt: "Founder teaching students",
    },
    
  ],
}

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const { theme, setTheme } = useTheme()

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === founderData.images.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === founderData.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? founderData.images.length - 1 : prev - 1))
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-background grid-background grid-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 dark:bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/20 dark:bg-purple-400/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/15 dark:bg-pink-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 relative">
        {/* Compact Header */}
        <div className="text-center mb-8 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <div className="flex items-center gap-3">
              <Star className="w-4 h-4 text-yellow-500 animate-pulse" />
              <Award className="w-5 h-5 text-primary animate-bounce" />
              <Star className="w-4 h-4 text-yellow-500 animate-pulse" />
            </div>
          </div>

          {/* Theme toggle */}
       
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 relative">
            Meet <span className="text-primary">Our Founder</span>
            <div className="absolute -top-2 -right-2">
              
            </div>
          </h1>

          <div className="flex items-center justify-center gap-4 text-primary text-sm mb-4">
           
           
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span className="font-semibold">Global Impact</span>
            </div>
            <div className="w-1 h-1 bg-primary rounded-full"></div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span className="font-semibold">Inspiring Lives</span>
            </div>
          </div>
        </div>

        {/* Compact Main Content */}
        <div className="frost-glass rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content - More Compact */}
            <div className="p-6 lg:p-8 space-y-6">
              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="text-base lg:text-lg font-medium">
                  <span className="text-3xl lg:text-3xl font-black">Sai Santosh</span> is a passionate designer, artist, and educator with a strong background in UX/UI and visual arts. As the founder of Kalakaar, he aims to bridge the gap between creativity and career by guiding students and enthusiasts in art, design, and innovation.
                </p>
                <p className="text-sm lg:text-base text-muted-foreground">
           He shares his personal journey, experiences, and knowledge in regional languages to make learning more relatable and accessible. His vision is to establish Kalakaar as a frontline field just like STEM and make creative education available to everyone, regardless of background.
                </p>
                
              </div>

              {/* Compact Stats
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="text-center p-3 bg-primary/10 dark:bg-primary/5 rounded-xl border border-primary/20">
                  <div className="text-2xl font-bold text-primary mb-1">15.7M</div>
                  <div className="text-xs font-medium text-muted-foreground">Followers</div>
                </div>
                <div className="text-center p-3 bg-purple-500/10 dark:bg-purple-400/5 rounded-xl border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">2009</div>
                  <div className="text-xs font-medium text-muted-foreground">Since</div>
                </div>
              </div> */}

              {/* Compact Social Icons */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Connect Across Platforms
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { name: "Instagram", color: "bg-gradient-to-br from-purple-500 to-pink-500", icon: "📷" },
                    { name: "LinkedIn", color: "bg-blue-700", icon: "💼" },
                    { name: "Twitter", color: "bg-black dark:bg-gray-800", icon: "🐦" },
                   
                  ].map((social) => (
                    <div
                      key={social.name}
                      className={`group relative w-10 h-10 ${social.color} rounded-xl flex items-center justify-center text-white text-sm cursor-pointer hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border shadow-md">
                        {social.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            

              {/* Compact geometric pattern */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <div className="w-4 h-4 border border-primary/30 rotate-45 opacity-60"></div>
                
                <div className="w-4 h-4 border border-pink-500/30 rotate-45 opacity-60"></div>
              </div>

              <div className="relative h-80 lg:h-[450px] mt-8">
                
                <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-2xl transform rotate-1 scale-95"></div>
                <div className="absolute inset-0 bg-primary/30 dark:bg-primary/15 rounded-2xl transform -rotate-1 scale-98"></div>

                {/* Main image container */}
                <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-b from-muted/20 to-muted/40 shadow-xl border flex items-start">
                  <img
                    src={founderData.images[currentImageIndex]?.url || "/placeholder.svg"}
                    alt={founderData.images[currentImageIndex]?.alt}
                    className="w-full h-full object-contain object-top transition-all duration-700 ease-in-out bg-card"
                  />

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>

                {/* Compact floating elements
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -top-1 -right-3 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-3 w-5 h-5 bg-green-400 rounded-full animate-bounce delay-300"></div> */}

                {/* Compact slideshow controls
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 frost-glass rounded-full p-2 flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={prevImage}
                    className="w-8 h-8 p-0 rounded-full hover:bg-primary/10"
                  >
                    <SkipBack className="w-3 h-3 text-primary" />
                  </Button>

                   <Button
                    size="sm"
                    variant="ghost"
                    onClick={togglePlayPause}
                    className="w-8 h-8 p-0 rounded-full hover:bg-primary/10"
                  >
                    {isPlaying ? <Pause className="w-3 h-3 text-primary" /> : <Play className="w-3 h-3 text-primary" />}
                  </Button> 

                   <Button
                    size="sm"
                    variant="ghost"
                    onClick={nextImage}
                    className="w-8 h-8 p-0 rounded-full hover:bg-primary/10"
                  >
                    <SkipForward className="w-3 h-3 text-primary" />
                  </Button> 
                </div> */}

                {/* Compact image indicators */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {founderData.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all duration-300 `}
                    />
                  ))}
                </div>

                {/* Compact image counter
                <div className="absolute top-4 right-4 frost-glass px-3 py-1 rounded-full text-xs font-medium">
                  <span className="text-primary">{currentImageIndex + 1}</span>
                  <span className="mx-1 text-muted-foreground">/</span>
                  <span className="text-foreground">{founderData.images.length}</span>
                </div> */}

                {/* Progress bar */}
                
              </div>
            </div>
          </div>
        </div>

        {/* Compact bottom section */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>Excellence</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>Inspiring</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>Building</span>
            </div>
          </div>
        </div>
      </div>
    
  )
}
