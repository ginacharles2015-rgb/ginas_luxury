import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/productSchema.js";

dotenv.config();

const productPrices = [
  // =========================
  // DRESSES
  // =========================
  {
    name: "2CL Gown",
    finalPrice: 48000,
    discount: 0,
  },
  {
    name: "Blue Gown",
    finalPrice: 49000,
    discount: 30,
  },
  {
    name: "Floral Gown",
    finalPrice: 45000,
    discount: 15,
  },
  {
    name: "Green Gown",
    finalPrice: 49000,
    discount: 0,
  },
  {
    name: "Long Pink Gown",
    finalPrice: 47000,
    discount: 20,
  },
  {
    name: "Multi Gown",
    finalPrice: 48000,
    discount: 0,
  },
  {
    name: "Pink Gown",
    finalPrice: 50000,
    discount: 0,
  },
  {
    name: "White Gown",
    finalPrice: 48000,
    discount: 0,
  },
  {
    name: "Brown Bodycon",
    finalPrice: 45000,
    discount: 0,
  },

  // =========================
  // TOPS
  // =========================
  {
    name: "Brown Top",
    finalPrice: 12000,
    discount: 10,
  },
  {
    name: "Crop Yellow Top",
    finalPrice: 10000,
    discount: 0,
  },
  {
    name: "Floral Top",
    finalPrice: 13000,
    discount: 15,
  },
  {
    name: "Gathered Top",
    finalPrice: 15000,
    discount: 0,
  },
  {
    name: "Pink Top",
    finalPrice: 12000,
    discount: 0,
  },
  {
    name: "Sea Green Top",
    finalPrice: 14000,
    discount: 0,
  },
  {
    name: "White Top",
    finalPrice: 10000,
    discount: 10,
  },
  {
    name: "Yellow Top",
    finalPrice: 11500,
    discount: 0,
  },

  // =========================
  // BOTTOMS
  // =========================
  {
    name: "Blue Skirt",
    finalPrice: 30000,
    discount: 15,
  },
  {
    name: "Floral Skirt",
    finalPrice: 35000,
    discount: 0,
  },
  {
    name: "Brown Pants",
    finalPrice: 38000,
    discount: 10,
  },
  {
    name: "Jean",
    finalPrice: 40000,
    discount: 0,
  },
  {
    name: "Satin Skirt",
    finalPrice: 42000,
    discount: 0,
  },
  {
    name: "Tailored Shorts",
    finalPrice: 15000,
    discount: 15,
  },
  {
    name: "Wide Pants",
    finalPrice: 45000,
    discount: 0,
  },
  {
    name: "Asoke Skirt",
    finalPrice: 50000,
    discount: 0,
  },

  // =========================
  // ACCESSORIES
  // =========================
  {
    name: "Arm Cuff",
    finalPrice: 8000,
    discount: 0,
  },
  {
    name: "Bangle",
    finalPrice: 8500,
    discount: 0,
  },
  {
    name: "Bracelet",
    finalPrice: 9000,
    discount: 0,
  },
  {
    name: "Glasses",
    finalPrice: 10000,
    discount: 20,
  },
  {
    name: "Gold Belt",
    finalPrice: 9500,
    discount: 0,
  },
  {
    name: "Hair Clips",
    finalPrice: 8000,
    discount: 0,
  },
  {
    name: "Jewelry Set",
    finalPrice: 10000,
    discount: 15,
  },
  {
    name: "Necklace",
    finalPrice: 9500,
    discount: 0,
  },
  {
    name: "Ribbon",
    finalPrice: 8000,
    discount: 0,
  },
  {
    name: "Hair Accessory",
    finalPrice: 8500,
    discount: 0,
  },
  {
    name: "Fashion Accessory",
    finalPrice: 9000,
    discount: 0,
  },
];

const updateProductPrices = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected.");

    for (const product of productPrices) {
      const basePrice =
        product.discount > 0
          ? Math.round(product.finalPrice / (1 - product.discount / 100))
          : product.finalPrice;

      const updatedProduct = await Product.findOneAndUpdate(
        { name: product.name },
        {
          price: basePrice,
        },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedProduct) {
        console.log(`❌ Product not found: ${product.name}`);
        continue;
      }

      console.log(
        `✅ ${product.name}: ₦${basePrice.toLocaleString()} base price → ₦${product.finalPrice.toLocaleString()} after ${product.discount}% discount`
      );
    }

    console.log("🎉 Product prices updated successfully.");

    await mongoose.connection.close();
    console.log("MongoDB connection closed.");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating product prices:", error);

    try {
      await mongoose.connection.close();
    } catch (closeError) {
      console.error("Error closing MongoDB connection:", closeError);
    }

    process.exit(1);
  }
};

updateProductPrices();