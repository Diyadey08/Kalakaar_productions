import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AnimatedTestimonials } from "./ui/animated-testimonials";

// ...existing code...
export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Kalakaar's coaching helped me crack the NID entrance exam on my first attempt. The personalized guidance and mock tests were invaluable for my preparation.",
      name: "Priya Sharma",
      title: "NID Student, Product Design",
      avatar: "PS",
      designation: "NID Student, Product Design", // added
      src: "https://i.postimg.cc/j2bH97XV/Component-40.png", // added (use image URL if available)
    },
    {
      quote:
        "The digital art workshops transformed my skills completely. I went from a beginner to creating professional-level illustrations in just 6 months.",
      name: "Arjun Patel",
      title: "Freelance Digital Artist",
      avatar: "AP",
      designation: "Freelance Digital Artist", // added
      src: "https://i.postimg.cc/NGdFZXb1/Component-41.png", // added
    },
    {
      quote:
        "The UI/UX upskilling program at Kalakaar gave me the confidence and portfolio I needed to land my dream job at a top design agency.",
      name: "Anant Reddy",
      title: "UI/UX Designer, Tech Startup",
      avatar: "SR",
      designation: "UI/UX Designer, Tech Startup", // added
      src: "https://i.postimg.cc/DfpfxTy6/Component-42.png", // added
    },
  ]

  return <AnimatedTestimonials testimonials={testimonials} />;
}
// ...existing code...