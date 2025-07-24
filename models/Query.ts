import mongoose from "mongoose"

export interface IQuery {
  firstName: string
  lastName: string
  email: string
  company: string
  message: string
  status: "new" | "responded" | "resolved"
  submittedAt: Date
}

const QuerySchema = new mongoose.Schema<IQuery>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      maxlength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
    },
    company: {
      type: String,
      required: [true, "Company/Individual field is required"],
      trim: true,
      maxlength: [100, "Company name cannot exceed 100 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [1000, "Message cannot exceed 1000 characters"],
    },
    status: {
      type: String,
      enum: ["new", "responded", "resolved"],
      default: "new",
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
)

// Create indexes for better query performance
QuerySchema.index({ email: 1 })
QuerySchema.index({ submittedAt: -1 })
QuerySchema.index({ status: 1 })

// Prevent duplicate model compilation
const Query = mongoose.models.Query || mongoose.model<IQuery>("Query", QuerySchema)

export default Query
