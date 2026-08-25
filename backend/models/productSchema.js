import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [100, "Product name cannot exceed 100 characters"],
    },

    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },

    image: {
      type: String,
      required: [true, "Product image is required"],
    },

    category: {
      type: String,
      required: [true, "Product category is required"],
      trim: true,
      enum: {
        values: [
          "dresses",
          "tops",
          "bottoms",
          "accessories",
        ],
        message: "Invalid category",
      },
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    isNew: {
      type: Boolean,
      default: false,
    },

    isSale: {
      type: Boolean,
      default: false,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    stock: {
      type: Number,
      required: [true, "Stock quantity is required"],
      min: [0, "Stock cannot be negative"],
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
productSchema.index({ category: 1 });
productSchema.index({ isFeatured: 1 });
productSchema.index({ isActive: 1 });

const Product = mongoose.model("Product", productSchema);

export default Product;