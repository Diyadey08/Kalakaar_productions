import Image from "next/image"

export function ProgramWorkSection() {
  const programSteps = [
    {
      image: "/placeholder.svg?height=200&width=250",
      title: "Weekly LIVE Masterclasses and QnA Sessions",
      description: "Get on weekly calls with your mentors for live learning sessions and timely doubt resolution",
    },
    {
      image: "/placeholder.svg?height=200&width=250",
      title: "Lifetime Access to Community & Events",
      description:
        "Engage with a community of 30,000+ designers to build lifelong connections and find collaborative opportunities and gigs.",
    },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="container text-center space-y-12">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-[#246CF4]">We simplify your journey</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#246CF4]">How does the Program work?</h2>
          <p className="text-base md:text-lg text-[#2D2D2D] max-w-3xl mx-auto">
            Unlock your potential with a clear, step-by-step process designed for results. Enjoy expert guidance,
            hands-on learning, and ongoing support every step of the way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programSteps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="mb-6 h-48 flex items-center justify-center">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={250}
                  height={200}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#246CF4] mb-2">{step.title}</h3>
              <p className="text-sm md:text-base text-[#2D2D2D]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
