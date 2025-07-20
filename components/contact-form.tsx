"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px] text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-2">Welcome to Kalakaar! 🎨</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for your interest! Our team will contact you shortly to discuss the perfect course for your
            creative journey.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Explore More Courses</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enroll in Kalakaar Courses</CardTitle>
        <CardDescription>
          Fill out the form below to learn more about our courses and get personalized guidance for your creative
          journey.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input id="email" type="email" placeholder="john.doe@company.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input id="company" placeholder="Acme Inc." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Your Role</Label>
            <Input id="role" placeholder="CTO, IT Director, etc." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="size">Organization Size</Label>
            <Select>
              <SelectTrigger id="size">
                <SelectValue placeholder="Select organization size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-50">1-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="501-1000">501-1000 employees</SelectItem>
                <SelectItem value="1001+">1001+ employees</SelectItem>
                <SelectItem value="government">Government Agency</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="course">Course Interest</Label>
            <Select>
              <SelectTrigger id="course">
                <SelectValue placeholder="Select your area of interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="art-classes">Art Classes</SelectItem>
                <SelectItem value="exam-coaching">Entrance Exam Coaching</SelectItem>
                <SelectItem value="digital-art">Digital Art & Design</SelectItem>
                <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                <SelectItem value="fashion">Fashion Design</SelectItem>
                <SelectItem value="graphic-design">Graphic Design</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea id="message" placeholder="Tell us about your specific requirements and use cases..." rows={4} />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Course Information"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
