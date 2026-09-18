import express from "express";

import {
  createOrder,
  initializePaystackPayment,
  verifyPaystackPayment,
  getOrders,
  getOrderById,
  getOrdersByEmail,
  updateOrderStatus,
  cancelOrder,
} from "../controllers/orderController.js";

import { validateOrder } from "../middlewares/validation.js";
import { asyncHandler } from "../middlewares/errorMiddleware.js";

const router = express.Router();

/**
 * @route   POST /api/orders/paystack/initialize
 * @desc    Initialize a Paystack payment
 * @access  Public
 */
router.post(
  "/paystack/initialize",
  asyncHandler(initializePaystackPayment)
);

/**
 * @route   GET /api/orders/paystack/verify/:reference
 * @desc    Verify a Paystack payment
 * @access  Public
 */
router.get(
  "/paystack/verify/:reference",
  asyncHandler(verifyPaystackPayment)
);

/**
 * @route   POST /api/orders
 * @desc    Create a new order (checkout)
 * @access  Public
 */
router.post("/", validateOrder, asyncHandler(createOrder));

/**
 * @route   GET /api/orders
 * @desc    Get all orders (admin view)
 * @access  Public (Admin - in production, add authentication)
 */
router.get("/", asyncHandler(getOrders));

/**
 * @route   GET /api/orders/email/:email
 * @desc    Get orders by customer email (for order tracking)
 * @access  Public
 */
router.get("/email/:email", asyncHandler(getOrdersByEmail));

/**
 * @route   GET /api/orders/:id
 * @desc    Get a single order by ID
 * @access  Public
 */
router.get("/:id", asyncHandler(getOrderById));

/**
 * @route   PATCH /api/orders/:id/status
 * @desc    Update order status
 * @access  Public (Admin - in production, add authentication)
 */
router.patch("/:id/status", asyncHandler(updateOrderStatus));

/**
 * @route   PATCH /api/orders/:id/cancel
 * @desc    Cancel an order
 * @access  Public
 */
router.patch("/:id/cancel", asyncHandler(cancelOrder));

export default router;

