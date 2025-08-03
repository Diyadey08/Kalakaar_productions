import { FlaskConical, FileText, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PlacementSupportSection() {
  const supportFeatures = [
    {
      icon: FileText,
      title: "Expert Resume Review",
      description: "Get your resume reviewed by experts to enhance visibility and increase interview chances.",
    },
    {
      icon: MessageSquare,
      title: "Interview Question Mastery",
      description: "Practice industry-specific questions to build confidence and improve responses.",
    },
    {
      icon: FlaskConical,
      title: "Mock Interviews & Feedback",
      description: "Participate in mock interviews with mentors, receive feedback, and refine skills.",
    },
    {
      icon: Users,
      title: "Exclusive Hiring Partner Access",
      description: "Gain access to exclusive job opportunities with top hiring partners.",
    },
  ]

  return (
    <section className="w-full bg-v0-dark-purple text-v0-text-light py-16 md:py-24 lg:py-32">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8">
          <p className="text-sm font-semibold text-[#246CF4]">Expert Support</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#246CF4]">
            1-year placement support to land your dream job
          </h2>
          <p className="text-base md:text-lg text-v0-text-light max-w-md">
            Meet the required cut-off marks in your graduation project to qualify for 1 year of placement support.
          </p>
          <Button className="bg-[#246CF4] hover:bg-[#246CF4]/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
            Enroll Now!
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#246CF4]/20 text-[#246CF4] mb-4 group-hover:bg-[#246CF4] group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#246CF4] mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
