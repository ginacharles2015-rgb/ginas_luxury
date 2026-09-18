import axios from "axios";
import Order from "../models/orderSchema.js";
import { asyncHandler } from "../middlewares/errorMiddleware.js";

/**
 * Order Controller for Gina's Luxury backend.
 * Handles order creation, retrieval, and Paystack payments.
 * Customers do NOT need accounts or login.
 */

/**
 * @desc    Initialize a Paystack payment
 * @route   POST /api/orders/paystack/initialize
 * @access  Public
 */
export const initializePaystackPayment = asyncHandler(async (req, res) => {
  const {
    customerEmail,
    customerName,
    customerPhone,
    total,
  } = req.body;

  // Basic validation
  if (!customerEmail || !total) {
    return res.status(400).json({
      message: "Customer email and total amount are required",
    });
  }

  // Paystack requires the amount in kobo.
  // Example: ₦10,000 = 1,000,000 kobo.
  const amountInKobo = Math.round(Number(total) * 100);

  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email: customerEmail,
        amount: amountInKobo,
        currency: "NGN",

        // Send the customer back to our website after Paystack checkout.
        callback_url: "https://ginas-luxury.vercel.app/payment-success",

        metadata: {
          customerName,
          customerPhone,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      message: "Paystack payment initialized successfully",
      authorizationUrl: response.data.data.authorization_url,
      accessCode: response.data.data.access_code,
      reference: response.data.data.reference,
    });
  } catch (error) {
    console.error(
      "Paystack initialization error:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      message: "Unable to initialize Paystack payment",
    });
  }
});

/**
 * @desc    Verify a Paystack payment
 * @route   GET /api/orders/paystack/verify/:reference
 * @access  Public
 */
export const verifyPaystackPayment = asyncHandler(async (req, res) => {
  const { reference } = req.params;

  // Make sure a reference was provided
  if (!reference) {
    return res.status(400).json({
      message: "Payment reference is required",
    });
  }

  try {
    // Ask Paystack to verify the transaction
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const paymentData = response.data.data;

    // Check whether Paystack says the payment was successful
    if (
      response.data.status !== true ||
      paymentData.status !== "success"
    ) {
      return res.status(400).json({
        message: "Payment was not successful",
        paymentStatus: paymentData.status,
      });
    }

    // Return the verified payment information to the frontend.
    // The frontend will use this confirmation before creating the order.
    res.status(200).json({
      message: "Payment verified successfully",
      payment: {
        reference: paymentData.reference,
        status: paymentData.status,
        amount: paymentData.amount,
        currency: paymentData.currency,
        channel: paymentData.channel,
        paidAt: paymentData.paid_at,
      },
    });
  } catch (error) {
    console.error(
      "Paystack verification error:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      message: "Unable to verify Paystack payment",
    });
  }
});

/**
 * @desc    Create a new order (checkout)
 * @route   POST /api/orders
 * @access  Public
 */
export const createOrder = asyncHandler(async (req, res) => {
  const {
    customerName,
    customerEmail,
    customerPhone,
    shippingAddress,
    city,
    zipCode,
    items,
    subtotal,
    tax,
    shipping,
    total,
    paymentMethod,
    transactionId,
    paymentStatus,
    notes,
  } = req.body;

  // Create the order
  const order = await Order.create({
    customerName,
    customerEmail,
    customerPhone,
    shippingAddress,
    city,
    zipCode,
    items,
    subtotal,
    tax: tax || 0,
    shipping: shipping || 0,
    total,
    paymentMethod: paymentMethod || "card",
    transactionId,
    paymentStatus: paymentStatus || "pending",
    orderStatus: "pending",
    notes,
  });

  // Populate product references
  await order.populate("items.productId", "name images");

  res.status(201).json({
    message: "Order created successfully",
    order,
  });
});

/**
 * @desc    Get all orders (admin view)
 * @route   GET /api/orders
 * @access  Public (Admin - in production, add authentication)
 */
export const getOrders = asyncHandler(async (req, res) => {
  const { status, email, page = 1, limit = 20 } = req.query;

  // Build query
  const query = {};

  // Filter by order status
  if (status) {
    query.orderStatus = status;
  }

  // Filter by customer email
  if (email) {
    query.customerEmail = { $regex: email, $options: "i" };
  }

  // Pagination
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;

  // Execute query with pagination
  const orders = await Order.find(query)
    .populate("items.productId", "name images")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  // Get total count for pagination info
  const totalOrders = await Order.countDocuments(query);
  const totalPages = Math.ceil(totalOrders / limitNum);

  res.json({
    orders,
    pagination: {
      currentPage: pageNum,
      totalPages,
      totalOrders,
      hasNextPage: pageNum < totalPages,
      hasPrevPage: pageNum > 1,
    },
  });
});

/**
 * @desc    Get a single order by ID
 * @route   GET /api/orders/:id
 * @access  Public
 */
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "items.productId",
    "name images"
  );

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json({ order });
});

/**
 * @desc    Get orders by customer email (for order tracking)
 * @route   GET /api/orders/email/:email
 * @access  Public
 */
export const getOrdersByEmail = asyncHandler(async (req, res) => {
  const { email } = req.params;

  const orders = await Order.find({
    customerEmail: { $regex: email, $options: "i" },
  })
    .populate("items.productId", "name images")
    .sort({ createdAt: -1 });

  res.json({ orders });
});

/**
 * @desc    Update order status
 * @route   PATCH /api/orders/:id/status
 * @access  Public (Admin - in production, add authentication)
 */
export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { orderStatus, paymentStatus, transactionId } = req.body;

  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      message: "Order not found",
    });
  }

  // Update fields if provided
  if (orderStatus) {
    order.orderStatus = orderStatus;
  }

  if (paymentStatus) {
    order.paymentStatus = paymentStatus;
  }

  if (transactionId) {
    order.transactionId = transactionId;
  }

  await order.save();

  res.json({
    message: "Order status updated successfully",
    order,
  });
});

/**
 * @desc    Cancel an order
 * @route   PATCH /api/orders/:id/cancel
 * @access  Public
 */
export const cancelOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      message: "Order not found",
    });
  }

  // Only allow cancellation if order is pending or processing
  if (!["pending", "processing"].includes(order.orderStatus)) {
    return res.status(400).json({
      message: `Cannot cancel order with status: ${order.orderStatus}`,
    });
  }

  order.orderStatus = "cancelled";
  await order.save();

  res.json({
    message: "Order cancelled successfully",
    order,
  });
});

