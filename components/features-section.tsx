import FeatureCard from "@/components/feature-card"
import {
  BotIcon,
  SparklesIcon,
  DatabaseIcon,
  ShieldIcon,
  FileTextIcon,
  ServerIcon,
  LockIcon,
  ZapIcon,
} from "@/components/feature-icons"

export default function FeaturesSection() {
  const features = [
    {
      icon: <BotIcon />,
      title: "Expert-Led Courses",
      description:
        "Learn from industry professionals and experienced artists who guide every session with personalized attention.",
      accentColor: "rgba(147, 51, 234, 0.5)",
    },
    {
      icon: <SparklesIcon />,
      title: "Exam Preparation",
      description:
        "Comprehensive coaching for NID, NIFT, BFA, MFA and other top design entrance exams with proven results.",
      accentColor: "rgba(236, 72, 153, 0.5)",
    },
    {
      icon: <DatabaseIcon />,
      title: "Flexible Learning",
      description: "Choose from online and offline options tailored to your schedule and learning preferences.",
      accentColor: "rgba(34, 211, 238, 0.5)",
    },
    {
      icon: <ShieldIcon />,
      title: "Skill Development",
      description: "Specialized programs covering drawing, painting, digital art, UI/UX, fashion, and graphic design.",
      accentColor: "rgba(132, 204, 22, 0.5)",
    },
    {
      icon: <FileTextIcon />,
      title: "Portfolio Building",
      description: "Get expert guidance on creating compelling portfolios that stand out in competitive applications.",
      accentColor: "rgba(249, 115, 22, 0.5)",
    },
    {
      icon: <ServerIcon />,
      title: "Community Support",
      description: "Join a vibrant community of artists, designers, and mentors for collaboration and networking.",
      accentColor: "rgba(168, 85, 247, 0.5)",
    },
    {
      icon: <LockIcon />,
      title: "Career Guidance",
      description:
        "Receive placement assistance, portfolio reviews, and career counseling to launch your creative career.",
      accentColor: "rgba(251, 191, 36, 0.5)",
    },
    {
      icon: <ZapIcon />,
      title: "Creative Workshops",
      description: "Participate in hands-on workshops and masterclasses with renowned artists and industry experts.",
      accentColor: "rgba(16, 185, 129, 0.5)",
    },
  ]

  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/10" id="features" aria-labelledby="features-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
              Key Features
            </div>
            <h2 id="features-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              💡 Why Choose Kalakaar?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive creative education designed for aspiring artists and designers at every level.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
