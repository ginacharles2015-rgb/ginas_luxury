import Subscriber from "../models/subscriberSchema.js";
import { asyncHandler } from "../middlewares/errorMiddleware.js";
import { sendWelcomeEmail } from "../utils/email.js";

/**
 * Subscriber Controller for Gina's Luxury backend.
 * Handles newsletter subscription management.
 */

/**
 * @desc    Subscribe to newsletter
 * @route   POST /api/subscribers
 * @access  Public
 */
export const subscribe = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Check if email already exists
  const existingSubscriber = await Subscriber.findOne({ email });

  if (existingSubscriber) {
    if (existingSubscriber.isActive) {
      return res.status(400).json({
        message: "This email is already subscribed to our newsletter",
      });
    } else {
      // Reactivate the subscription
      existingSubscriber.isActive = true;
      await existingSubscriber.save();

      return res.status(200).json({
        message: "Subscription reactivated successfully",
        subscriber: existingSubscriber,
      });
    }
  }

  // Create new subscriber
  const subscriber = await Subscriber.create({ email });

  // Send welcome email (non-blocking: failure should not break subscription)
  try {
    await sendWelcomeEmail(email);
  } catch (emailError) {
    console.error("Failed to send welcome email:", emailError.message);
  }

  res.status(201).json({
    message: "Successfully subscribed to newsletter",
    subscriber,
  });
});

/**
 * @desc    Unsubscribe from newsletter
 * @route   DELETE /api/subscribers/:email
 * @access  Public
 */
export const unsubscribe = asyncHandler(async (req, res) => {
  const { email } = req.params;

  const subscriber = await Subscriber.findOne({ email });

  if (!subscriber) {
    return res.status(404).json({ message: "Email not found in subscribers" });
  }

  // Soft delete by setting isActive to false
  subscriber.isActive = false;
  await subscriber.save();

  res.json({
    message: "Successfully unsubscribed from newsletter",
  });
});

/**
 * @desc    Get all subscribers (admin view)
 * @route   GET /api/subscribers
 * @access  Public (Admin - in production, add authentication)
 */
export const getSubscribers = asyncHandler(async (req, res) => {
  const { active, page = 1, limit = 50 } = req.query;

  // Build query
  const query = {};

  // Filter by active status
  if (active !== undefined) {
    query.isActive = active === "true";
  }

  // Pagination
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;

  // Execute query with pagination
  const subscribers = await Subscriber.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  // Get total count for pagination info
  const totalSubscribers = await Subscriber.countDocuments(query);
  const totalPages = Math.ceil(totalSubscribers / limitNum);

  res.json({
    subscribers,
    pagination: {
      currentPage: pageNum,
      totalPages,
      totalSubscribers,
      hasNextPage: pageNum < totalPages,
      hasPrevPage: pageNum > 1,
    },
  });
});

/**
 * @desc    Get subscriber count
 * @route   GET /api/subscribers/count
 * @access  Public (Admin - in production, add authentication)
 */
export const getSubscriberCount = asyncHandler(async (req, res) => {
  const totalSubscribers = await Subscriber.countDocuments();
  const activeSubscribers = await Subscriber.countDocuments({ isActive: true });

  res.json({
    totalSubscribers,
    activeSubscribers,
    inactiveSubscribers: totalSubscribers - activeSubscribers,
  });
});
