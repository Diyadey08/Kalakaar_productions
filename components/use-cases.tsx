"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    },
    {
      icon: <GovernmentIcon />,
      title: "Comprehensive Exam Prep",
      description:
        "We offer tailored coaching for top design entrance exams such as NID, NIFT, BFA, MFA, BDes, MDes, and NATA. Our proven strategies and study plans are designed to help you succeed and secure a spot in prestigious design programs",
    },
    {
      icon: <FinanceIcon />,
      title: "Flexible Learning Options",
      description:
        "Our platform provides both online and offline classes to fit your schedule. With self-paced and live session options, you can enjoy a personalized learning experience that caters to your individual needs and learning style",
    },
    {
      icon: <HealthcareIcon />,
      title: "Holistic Skill Development",
      description:
        "Kalakaar offers courses that cover a wide range of design fields, including UX/UI, graphic design, fashion design, and interior design. Our programs are designed for young learners, current students, professionals, and those looking to shift careers, ensuring holistic skill development for everyone",
    },
    {
      icon: <LegalIcon />,
      title: "Community and Networking",
      description:
        "By joining Kalakaar, you become part of a vibrant community of artists and designers. We offer ample networking opportunities with industry leaders and peers, fostering a collaborative environment where you can grow and thrive",
    },
    {
      icon: <EducationIcon />,
      title: "Career Support",
      description:
        "Our professional development programs, portfolio-building services, and career enhancement initiatives are designed to help you advance in your career. Additionally, we offer job placement assistance and internship opportunities to help you gain practical experience and launch your career successfully",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Serve</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Tailored learning experiences for every creative journey and career path.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {useCases.map((useCase, index) => (
            <Card key={index} className="h-full hover:border-[#246CF4] transition-all duration-300 ease-in-out transform hover:-translate-y-2">
              <CardHeader>
                {useCase.icon}
                <CardTitle>{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
