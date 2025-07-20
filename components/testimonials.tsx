import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Kalakaar's coaching helped me crack the NID entrance exam on my first attempt. The personalized guidance and mock tests were invaluable for my preparation.",
      name: "Priya Sharma",
      title: "NID Student, Product Design",
      avatar: "PS",
    },
    {
      quote:
        "The digital art workshops transformed my skills completely. I went from a beginner to creating professional-level illustrations in just 6 months.",
      name: "Arjun Patel",
      title: "Freelance Digital Artist",
      avatar: "AP",
    },
    {
      quote:
        "The UI/UX upskilling program at Kalakaar gave me the confidence and portfolio I needed to land my dream job at a top design agency.",
      name: "Sneha Reddy",
      title: "UI/UX Designer, Tech Startup",
      avatar: "SR",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">🌟 Student Success Stories</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Hear from our students who have achieved their creative dreams with Kalakaar.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-4xl">"</div>
                <p className="italic text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
