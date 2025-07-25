"use client";
import { Button } from "@/components/ui/button"
import { Palette, BookOpen, Users, Zap, MessageCircle, GraduationCap, Car } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Testimonials from "@/components/testimonials"
import UseCases from "@/components/use-cases"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TypingPromptInput from "@/components/typing-prompt-input"
import CssGridBackground from "@/components/css-grid-background"
import FeaturesSection from "@/components/features-section"
import StructuredData from "@/components/structured-data"
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import AnimatedSplitText from "@/components/ui/animated-split-text";
import Component from "@/components/founder-section";
import CarouselDemo from "@/components/feature-section";
export default function Home() {
  return (
    <>
      {/* <StructuredData /> */}
      <div className="flex flex-col">

        {/* Hero Section */}
        <section id="hero" className="relative flex items-center justify-center overflow-hidden">
          <CssGridBackground />
          
          <div className="container px-4 md:px-6 py-16 md:py-20">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="inline-block rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-2 text-sm text-white mb-6 font-medium">
                🎨 Creative Learning Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6">
                <div className="text-blue-950 dark:text-white text-6xl md:text-8xl lg:text-[10rem] tracking-tight">
                  <AnimatedSplitText 
                    text="Kalakaar" 
                    className="text-blue-950 dark:text-white text-6xl md:text-8xl lg:text-[10rem] tracking-tight"
                    variant="fade"
                    stagger={0.1}
                  />
                </div>
                <div className="text-2xl md:text-4xl lg:text-5xl">
                  <AnimatedSplitText
                    text="School of Art & Design"
                    className="text-2xl md:text-4xl lg:text-5xl"
                    variant="slide"
                    stagger={0.08}
                    splitBy="word"
                    renderWord={(word: string, index: number) => (
                      <span 
                        key={index}
                        className={
                          word === 'Art' || word === 'Design' 
                            ? 'text-[#246CF4]' 
                            : 'text-blue-950 dark:text-white'
                        }
                      >
                        {word}
                      </span>
                    )}
                  />
                </div>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                <AnimatedSplitText
                  text="Your Gateway to Artistic Excellence"
                  className="text-2xl md:text-3xl font-semibold text-foreground"
                  variant="fade"
                  stagger={0.03}
                  splitBy="word"
                />
              </p>
              <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mb-12">
                <AnimatedSplitText
                  text="Empowering artists and designers of all ages through expert-led courses, exam coaching, and creative workshops. Join our vibrant community of learners and creators."
                  className="text-lg text-muted-foreground md:text-xl max-w-3xl"
                  variant="slide"
                  stagger={0.02}
                  splitBy="word"
                  delay={0.5}
                />
              </p>

              <TypingPromptInput />

              <div className="flex flex-wrap justify-center gap-4 mt-16">
                <button className="relative inline-flex h-12 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-blue-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    View All Courses
                  </span>
                </button>
                {/* <Button className="flex items-center gap-3 px-6 py-6 h-[60px] bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <MessageCircle className="h-5 w-5" />
                  <div className="flex flex-col items-start">
                    <span className="text-[15px] font-medium">Join WhatsApp</span>
                    <span className="text-xs text-green-100 -mt-0.5">Community</span>
                  </div>
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
       
        
        {/* Courses Section */}
          <CarouselDemo />        
          
        <section className="py-20 bg-background grid-background grid-gradient" id="courses" aria-labelledby="courses-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 id="courses-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  💡 Why Choose Kalakaar?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive learning paths designed for every creative journey
                </p>
              </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 items-start">
              <div className="flex flex-col items-center space-y-6 text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800 h-[22rem]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                  <Palette className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">🖌️ Art Classes</h3>
                <p className="text-muted-foreground text-lg">
                  Explore drawing, painting, sculpture, and digital art. Guided by expert instructors and designed to
                  ignite creativity.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6 text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 h-[22rem]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
                  <GraduationCap className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">📖 Coaching</h3>
                <p className="text-muted-foreground text-lg">
                  Comprehensive coaching for top design entrance exams (NID, NIFT, BFA, MFA, etc.) with tailored study
                  plans and mentorship.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6 text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border border-orange-200 dark:border-orange-800 h-[22rem]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                  <Zap className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">🚀 Upskills</h3>
                <p className="text-muted-foreground text-lg">
                  Advanced workshops in UI/UX, fashion, interior & graphic design. Designed for professionals and
                  aspiring designers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <UseCases />

        {/* Community Section
        <section id="community" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10" aria-labelledby="community-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 id="community-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  🤝 Join Kalakaar Community
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A vibrant platform to learn, grow, and collaborate with like-minded learners, artists, and creators.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="max-w-md text-center p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border">
                <Users className="h-16 w-16 mx-auto mb-6 text-purple-500" />
                <h3 className="text-2xl font-bold mb-4">👩‍🎓 Creative Community</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with peers, mentors, and design leaders. Share your work, get feedback, and grow together.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </section> */}

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-background grid-background grid-gradient" aria-labelledby="testimonials-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  💬 What Our Students Say
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from our successful students who transformed their creative careers
                </p>
              </div>
            </div>
            <Testimonials />
          </div>
        </section>

          <Component />
        {/* Contact/Enrollment Section */}
        <section id="contact" className="py-20 bg-background grid-background grid-gradient" aria-labelledby="contact-heading">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    🚀 Get Started Today
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Ready to begin your creative journey? Contact us to learn more about our courses and community.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-purple-500" />
                    <span>🎓 Expert-Led Courses by industry professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-purple-500" />
                    <span>📝 Targeted coaching for design entrance exams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-500" />
                    <span>🕐 Flexible online and offline learning options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    <span>🌐 Vibrant community & networking opportunities</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-medium">📧 support@kalakaar.com | 🌐 www.kalakaar.com</p>
                </div>
              </div>
              <div className="lg:ml-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
