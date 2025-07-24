"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  message: string
}

export default function QueryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      // Success
      setIsSubmitted(true)
      console.log("✅ Query submitted successfully:", data)
    } catch (err: any) {
      console.error("❌ Form submission error:", err)
      setError(err.message || "Failed to submit query. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setError(null)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    })
  }

  if (isSubmitted) {
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px] text-center">
          <CheckCircle2 className="h-16 w-16 text-green-400 mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-white">Query Submitted Successfully! 🎨</h3>
          <p className="text-slate-400 mb-6">
            Thank you for reaching out! Our team will review your query and get back to you shortly with the information
            you need.
          </p>
          <div className="space-y-2 mr-8">
            <Button onClick={resetForm} className="bg-blue-600 hover:bg-blue-700">
              Submit Another Query
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "#courses")}
              className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
            >
              Explore More Courses
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Ask About Kalakaar Courses</CardTitle>
        <CardDescription className="text-slate-400">
          Have questions about our courses? Fill out the form below and our team will get back to you with personalized
          guidance for your creative journey.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert className="mb-4 bg-red-900/20 border-red-700 text-red-300">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@company.com"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-white">
              Company/Individual
            </Label>
            <Input
              id="company"
              name="company"
              placeholder="Acme Inc."
              value={formData.company}
              onChange={handleInputChange}
              className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Your Query
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your specific questions, requirements, or what you'd like to know about our courses..."
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting Query..." : "Submit Query"}
          </Button>

          <p className="text-xs text-slate-400 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
