"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import coursesData from "@/data/courses.json"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const { resolvedTheme } = useTheme()

  const navItems = [
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  const courses = coursesData.courses

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 sm:px-6 md:px-8 flex h-20 items-center justify-between w-full max-w-screen-xl mx-auto">
        {/* ✅ Logo on Left */}
        <Link href="/" className="flex items-center" aria-label="Kalakaar Homepage">
          {resolvedTheme === "dark" ? (
            <img
              src="/Kalakaar_logo_Dark.png"
              alt="Kalakaar Dark Logo"
              className="h-20 sm:h-16 md:h-20 w-auto object-contain"
            />
          ) : (
            <img
              src="/Kalakaar logo light.png"
              alt="Kalakaar Light Logo"
              className="h-20 sm:h-16 md:h-20 w-auto object-contain"
            />
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center" aria-label="Main Navigation">
          {/* Courses Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={() => setIsCoursesOpen(false)}
          >
            <button className="flex items-center gap-1 text-lg font-medium transition-colors hover:text-primary">
              Courses
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            <div className={`absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-md border rounded-lg shadow-lg transition-all duration-200 ${
              isCoursesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              <div className="p-4 grid grid-cols-2 gap-3">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    href={course.href}
                    className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-xl">{course.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm group-hover/item:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {course.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other nav items */}
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-lg font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Theme toggle + mobile menu */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile Navigation">
                {/* Mobile Courses */}
                <div className="border-b pb-4 mb-4">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Courses</h3>
                  <div className="grid gap-2">
                    {courses.slice(0, 6).map((course) => (
                      <Link
                        key={course.id}
                        href={course.href}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-lg">{course.icon}</span>
                        <div>
                          <span className="font-medium text-sm">{course.title}</span>
                          <p className="text-xs text-muted-foreground">{course.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Other mobile nav links */}
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-xl font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile button */}
                <div className="flex items-center gap-4 mt-4">
                  <ThemeToggle />
                  <Button
                    asChild
                    className="w-full flex items-center gap-3 px-4 py-2 bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 h-auto dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_10px_rgba(36,101,237,0.4)]"
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      <Zap className="h-4 w-4 text-white" />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Request Demo</span>
                        <span className="text-xs text-gray-400 dark:text-gray-300 -mt-0.5">v1.0.0</span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
