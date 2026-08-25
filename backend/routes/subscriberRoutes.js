import express from "express";
import {
  subscribe,
  unsubscribe,
  getSubscribers,
  getSubscriberCount,
} from "../controllers/subscriberController.js";
import { validateSubscriber } from "../middlewares/validation.js";
import { asyncHandler } from "../middlewares/errorMiddleware.js";

const router = express.Router();

/**
 * @route   POST /api/subscribers
 * @desc    Subscribe to newsletter
 * @access  Public
 */
router.post("/", validateSubscriber, asyncHandler(subscribe));

/**
 * @route   DELETE /api/subscribers/:email
 * @desc    Unsubscribe from newsletter
 * @access  Public
 */
router.delete("/:email", asyncHandler(unsubscribe));

/**
 * @route   GET /api/subscribers
 * @desc    Get all subscribers (admin view)
 * @access  Public (Admin - in production, add authentication)
 */
router.get("/", asyncHandler(getSubscribers));

/**
 * @route   GET /api/subscribers/count
 * @desc    Get subscriber count
 * @access  Public (Admin - in production, add authentication)
 */
router.get("/count", asyncHandler(getSubscriberCount));

export default router;
