"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FrostedGlassIcon from "@/components/frosted-glass-icon"
import {
  BuildingIcon,
  GovernmentIcon,
  FinanceIcon,
  HealthcareIcon,
  LegalIcon,
  EducationIcon,
} from "@/components/use-case-icons"

export default function UseCases() {
  const useCases = [
    {
      icon: <BuildingIcon />,
      title: "Expert-Led Courses",
      description:
        "At Kalakaar, our courses are led by industry professionals and experienced educators who bring real-world expertise and knowledge to your learning journey. This ensures you stay updated with the latest trends and techniques in art and design, giving you a competitive edge",
      accentColor: "rgba(59, 130, 246, 0.5)",
    },
    {
      icon: <GovernmentIcon />,
      title: "Comprehensive Exam Prep",
      description:
        "We offer tailored coaching for top design entrance exams such as NID, NIFT, BFA, MFA, BDes, MDes, and NATA. Our proven strategies and study plans are designed to help you succeed and secure a spot in prestigious design programs",
      accentColor: "rgba(139, 92, 246, 0.5)",
    },
    {
      icon: <FinanceIcon />,
      title: "Flexible Learning Options",
      description:
        "Our platform provides both online and offline classes to fit your schedule. With self-paced and live session options, you can enjoy a personalized learning experience that caters to your individual needs and learning style",
      accentColor: "rgba(245, 158, 11, 0.5)",
    },
    {
      icon: <HealthcareIcon />,
      title: "Holistic Skill Development",
      description:
        "Kalakaar offers courses that cover a wide range of design fields, including UX/UI, graphic design, fashion design, and interior design. Our programs are designed for young learners, current students, professionals, and those looking to shift careers, ensuring holistic skill development for everyone",
      accentColor: "rgba(239, 68, 68, 0.5)",
    },
    {
      icon: <LegalIcon />,
      title: "Community and Networking",
      description: "By joining Kalakaar, you become part of a vibrant community of artists and designers. We offer ample networking opportunities with industry leaders and peers, fostering a collaborative environment where you can grow and thrive",
      accentColor: "rgba(132, 204, 22, 0.5)",
    },
    {
      icon: <EducationIcon />,
      title: "Career Support",
      description: "Our professional development programs, portfolio-building services, and career enhancement initiatives are designed to help you advance in your career. Additionally, we offer job placement assistance and internship opportunities to help you gain practical experience and launch your career successfully",
      accentColor: "rgba(14, 165, 233, 0.5)",
    },
  ]

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-background grid-background grid-gradient">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"> Who We Serve</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Tailored learning experiences for every creative journey and career path.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {useCases.map((useCase, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="relative overflow-hidden rounded-lg p-[1px] h-full group cursor-pointer">
                <span className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e40af_0%,#3b82f6_25%,#60a5fa_50%,#93c5fd_75%,#1e40af_100%)] opacity-75 group-hover:opacity-100 transition-opacity duration-1000" />
              
                <Card className="relative h-full bg-white dark:bg-gray-900 border-0 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30 duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

                      <CardHeader className="pb-2 relative z-10 transition-transform duration-300 hover:-translate-y-1">
                        <div className="transition-transform duration-300 hover:scale-110 hover:rotate-3">
                          {useCase.icon}
                        </div>
                        <CardTitle className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                          {useCase.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="relative z-10">
                        <CardDescription className="text-base transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300">
                          {useCase.description}
                        </CardDescription>
                      </CardContent>
                </Card>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
