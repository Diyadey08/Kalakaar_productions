import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Poppins } from 'next/font/google'
import Navbar from "@/components/navbar"
import FramerSpotlight from "@/components/framer-spotlight"
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose your weights
  variable: '--font-poppins', // optional: use CSS variable
})
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kalakaar | Your Gateway to Artistic Excellence",
  description:
    "Empowering artists and designers through expert-led courses, entrance exam coaching, and creative workshops. Join our vibrant community of learners and creators.",
  keywords: "art classes, design coaching, NID, NIFT, digital art, UI/UX design, creative learning, art education",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kalakaar.com",
    title: "Kalakaar | Your Gateway to Artistic Excellence",
    description:
      "Expert-led art and design courses, entrance exam coaching, and creative workshops for aspiring artists and designers.",
    siteName: "Kalakaar",
    images: [
      {
        url: "https://i.postimg.cc/grb9XNmw/Kalakaar-logo-1-08.png",
        width: 1200,
        height: 630,
        alt: "Kalakaar - Creative Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalakaar | Your Gateway to Artistic Excellence",
    description: "Expert-led art and design courses for aspiring artists and designers.",
    images: ["https://kalakaar.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <FramerSpotlight />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
