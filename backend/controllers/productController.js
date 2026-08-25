import Product from "../models/productSchema.js";
import { asyncHandler } from "../middlewares/errorMiddleware.js";

/**
 * Product Controller for Gina's Luxury backend.
 * Handles CRUD operations for products.
 */

/**
 * @desc    Get all products with optional filtering and pagination
 * @route   GET /api/products
 * @access  Public
 */
export const getProducts = asyncHandler(async (req, res) => {
  const { category, featured, active, search, page = 1, limit = 20 } = req.query;

  // Build query
  const query = {};

  // Filter by category
  if (category) {
    query.category = category;
  }

  // Filter by featured status
  if (featured !== undefined) {
    query.isFeatured = featured === "true";
  }

  // Filter by active status (default to active products only)
  if (active !== undefined) {
    query.isActive = active === "true";
  } else {
    query.isActive = true; // Default: only show active products
  }

  // Search by name or description
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  // Pagination
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;

  // Execute query with pagination
  const products = await Product.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  // Get total count for pagination info
  const totalProducts = await Product.countDocuments(query);
  const totalPages = Math.ceil(totalProducts / limitNum);

  res.json({
    products,
    pagination: {
      currentPage: pageNum,
      totalPages,
      totalProducts,
      hasNextPage: pageNum < totalPages,
      hasPrevPage: pageNum > 1,
    },
  });
});

/**
 * @desc    Get a single product by ID
 * @route   GET /api/products/:id
 * @access  Public
 */
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json({ product });
});

/**
 * @desc    Create a new product
 * @route   POST /api/products
 * @access  Public (Admin - in production, add authentication)
 */
export const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    message: "Product created successfully",
    product,
  });
});

/**
 * @desc    Update a product by ID
 * @route   PUT /api/products/:id
 * @access  Public (Admin - in production, add authentication)
 */
export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Return the updated document
    runValidators: true, // Run schema validators on update
  });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json({
    message: "Product updated successfully",
    product,
  });
});

/**
 * @desc    Delete a product by ID
 * @route   DELETE /api/products/:id
 * @access  Public (Admin - in production, add authentication)
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json({ message: "Product deleted successfully" });
});

/**
 * @desc    Get all product categories
 * @route   GET /api/products/categories
 * @access  Public
 */
export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Product.distinct("category", { isActive: true });

  res.json({ categories });
});

/**
 * @desc    Get featured products
 * @route   GET /api/products/featured
 * @access  Public
 */
export const getFeaturedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ isFeatured: true, isActive: true })
    .sort({ createdAt: -1 })
    .limit(10);

  res.json({ products });
});
