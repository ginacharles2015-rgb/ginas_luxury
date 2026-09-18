import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import subscriberRoutes from "./routes/subscriberRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://ginas-luxury.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json()); // Parse JSON request bodies

// Route mounts
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/subscribers", subscriberRoutes);

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Gina's Luxury Backend is running" });
});

// 404 handler for undefined routes
app.use(notFound);

// Global error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Gina's Luxury Backend is running on port ${PORT}`);
});

