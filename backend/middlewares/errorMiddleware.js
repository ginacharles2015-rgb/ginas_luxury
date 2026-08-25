/**
 * Error handling middleware for Gina's Luxury backend.
 * Provides a centralized way to handle errors across the application.
 */

/**
 * Wraps async route handlers to catch errors and pass them to the next middleware.
 * @param {Function} fn - The async route handler function
 * @returns {Function} Express middleware function
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

/**
 * 404 Not Found handler for undefined routes.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * Global error handling middleware.
 * Formats error responses consistently.
 * @param {Error} err - The error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);

  res.json({
    message: err.message,
    // Show stack trace only in development mode
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
