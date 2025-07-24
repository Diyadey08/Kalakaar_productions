import { type NextRequest, NextResponse } from "next/server"
import { connectToDB } from "@/lib/mongodb"
import Query from "@/models/Query"

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectToDB()

    // Parse the request body
    const body = await request.json()
    const { firstName, lastName, email, company, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create new query (no duplicate check since users can send multiple queries)
    const query = new Query({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      message: message.trim(),
      status: "new",
    })

    // Save to database
    const savedQuery = await query.save()

    console.log("✅ New query saved:", savedQuery._id)

    return NextResponse.json(
      {
        message: "Query submitted successfully!",
        id: savedQuery._id,
      },
      { status: 201 },
    )
  } catch (error: any) {
    console.error("❌ Query submission error:", error)

    // Handle validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json({ error: "Validation failed", details: validationErrors }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error. Please try again later." }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectToDB()

    // Get all queries, sorted by most recent first
    const queries = await Query.find({}).sort({ submittedAt: -1 }).select("-__v").lean()

    return NextResponse.json({ queries }, { status: 200 })
  } catch (error) {
    console.error("❌ Error fetching queries:", error)
    return NextResponse.json({ error: "Failed to fetch queries" }, { status: 500 })
  }
}
