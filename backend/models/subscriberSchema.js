import mongoose from "mongoose";

/**
 * Subscriber Schema for Gina's Luxury newsletter.
 * Stores email addresses of newsletter subscribers.
 * Prevents duplicate emails.
 */
const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // Prevent duplicate emails at the database level
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create index for faster active subscriber lookups
subscriberSchema.index({ isActive: 1 });

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;