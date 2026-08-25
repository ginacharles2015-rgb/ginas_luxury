/**
 * Validation middleware for Gina's Luxury backend.
 * Contains reusable validation functions for products, orders, and subscribers.
 */

/**
 * Validates that required fields are present in the request body.
 * @param {string[]} fields - Array of required field names
 * @returns {Function} Express middleware function
 */
export const validateRequiredFields = (fields) => (req, res, next) => {
  const missingFields = fields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: `Missing required fields: ${missingFields.join(", ")}`,
    });
  }

  next();
};

/**
 * Validates product data for creation and update.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const validateProduct = (req, res, next) => {
  const { name, description, price, category, stock } = req.body;

  // Check required fields
  if (!name || !description || price === undefined || !category || stock === undefined) {
    return res.status(400).json({
      message: "Name, description, price, category, and stock are required",
    });
  }

  // Validate price is a positive number
  if (typeof price !== "number" || price < 0) {
    return res.status(400).json({
      message: "Price must be a positive number",
    });
  }

  // Validate stock is a non-negative integer
  if (!Number.isInteger(stock) || stock < 0) {
    return res.status(400).json({
      message: "Stock must be a non-negative integer",
    });
  }

  // Validate sizes if provided
  if (req.body.sizes && !Array.isArray(req.body.sizes)) {
    return res.status(400).json({
      message: "Sizes must be an array",
    });
  }

  // Validate colors if provided
  if (req.body.colors && !Array.isArray(req.body.colors)) {
    return res.status(400).json({
      message: "Colors must be an array",
    });
  }

  // Validate images if provided
  if (req.body.images && !Array.isArray(req.body.images)) {
    return res.status(400).json({
      message: "Images must be an array of URLs",
    });
  }

  next();
};

/**
 * Validates order data for creation.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const validateOrder = (req, res, next) => {
  const { customerName, customerEmail, customerPhone, shippingAddress, city, zipCode, items, total } = req.body;

  // Check required customer fields
  const requiredCustomerFields = [
    "customerName",
    "customerEmail",
    "customerPhone",
    "shippingAddress",
    "city",
    "zipCode",
  ];

  const missingFields = requiredCustomerFields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: `Missing required fields: ${missingFields.join(", ")}`,
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(customerEmail)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  // Validate items array
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      message: "Order must contain at least one item",
    });
  }

  // Validate each item
  for (const item of items) {
    if (!item.productId || !item.name || item.quantity === undefined || item.price === undefined) {
      return res.status(400).json({
        message: "Each order item must have productId, name, quantity, and price",
      });
    }

    if (typeof item.quantity !== "number" || item.quantity < 1) {
      return res.status(400).json({
        message: "Item quantity must be a positive number",
      });
    }

    if (typeof item.price !== "number" || item.price < 0) {
      return res.status(400).json({
        message: "Item price must be a positive number",
      });
    }
  }

  // Validate total
  if (typeof total !== "number" || total < 0) {
    return res.status(400).json({
      message: "Total must be a positive number",
    });
  }

  next();
};

/**
 * Validates subscriber email.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const validateSubscriber = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  next();
};
