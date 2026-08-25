import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
  getFeaturedProducts,
} from "../controllers/productController.js";
import { validateProduct } from "../middlewares/validation.js";
import { asyncHandler } from "../middlewares/errorMiddleware.js";

const router = express.Router();

/**
 * @route   GET /api/products
 * @desc    Get all products with optional filtering and pagination
 * @access  Public
 */
router.get("/", asyncHandler(getProducts));

/**
 * @route   GET /api/products/categories
 * @desc    Get all product categories
 * @access  Public
 */
router.get("/categories", asyncHandler(getCategories));

/**
 * @route   GET /api/products/featured
 * @desc    Get featured products
 * @access  Public
 */
router.get("/featured", asyncHandler(getFeaturedProducts));

/**
 * @route   GET /api/products/:id
 * @desc    Get a single product by ID
 * @access  Public
 */
router.get("/:id", asyncHandler(getProductById));

/**
 * @route   POST /api/products
 * @desc    Create a new product
 * @access  Public (Admin - in production, add authentication)
 */
router.post("/", validateProduct, asyncHandler(createProduct));

/**
 * @route   PUT /api/products/:id
 * @desc    Update a product by ID
 * @access  Public (Admin - in production, add authentication)
 */
router.put("/:id", validateProduct, asyncHandler(updateProduct));

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete a product by ID
 * @access  Public (Admin - in production, add authentication)
 */
router.delete("/:id", asyncHandler(deleteProduct));

export default router;
