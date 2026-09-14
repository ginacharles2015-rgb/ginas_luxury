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

// Product routes
router.get("/", asyncHandler(getProducts));
router.get("/categories", asyncHandler(getCategories));
router.get("/featured", asyncHandler(getFeaturedProducts));
router.get("/:id", asyncHandler(getProductById));

router.post("/", validateProduct, asyncHandler(createProduct));
router.put("/:id", validateProduct, asyncHandler(updateProduct));
router.delete("/:id", asyncHandler(deleteProduct));

export default router;

