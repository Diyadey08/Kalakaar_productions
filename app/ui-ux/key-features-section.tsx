import { Monitor, Lightbulb, ShieldCheck, GraduationCap, Briefcase, Globe } from "lucide-react"

export function KeyFeaturesSection() {
  const features = [
    {
      icon: Monitor,
      title: "Live Online Classes",
      description: "Learn without disrupting your job or college schedule.",
    },
    {
      icon: Lightbulb,
      title: "Project-Based Learning",
      description: "Build real-world projects that strengthen your resume.",
    },
    {
      icon: ShieldCheck,
      title: "24 Weeks Fellowship",
      description: "Beginner-Friendly Curriculum: No prior tech background required.",
    },
    {
      icon: GraduationCap,
      title: "Beginner-Friendly Curriculum",
      description: "No Prior Tech Background Required",
    },
    {
      icon: Briefcase,
      title: "Placement Support",
      description: "1 Year Includes resume building, mock interviews, job alerts",
    },
    {
      icon: Globe,
      title: "AI Integration Module",
      description: "Stay future-proof with hands-on experience.",
    },
  ]

  return (
    <section className="w-full bg-v0-dark-purple text-v0-text-light py-16 md:py-24 lg:py-32">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold text-[#246CF4]">Why Choose Our Program</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#246CF4]">Key Features</h2>
          <p className="text-base md:text-lg text-v0-text-light max-w-3xl mx-auto">
            Discover what makes our UI/UX design program unique and effective for your career growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-white/5 dark:bg-white/5 rounded-xl p-6 md:p-8 shadow-lg border border-white/10 hover:shadow-2xl hover:border-[#246CF4] transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#246CF4]/20 text-[#246CF4] mb-4 group-hover:bg-[#246CF4] group-hover:text-white transition-colors duration-300">
              <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#246CF4] mb-2">{feature.title}</h3>
            <p className="text-sm md:text-base text-v0-text-light">{feature.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
