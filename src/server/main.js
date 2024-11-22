import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js"; // Ensure the path is correct
import viteExpress from "vite-express"; // Import vite-express

dotenv.config(); // Load environment variables from .env

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser()); // For parsing cookies

// CORS setup to allow cookies from the frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5000", // Update with your frontend URL
    credentials: true, // Enable credentials (for cookies)
  })
);

// Import and use your routes
import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

import adminRoutes from "./routes/adminRoutes.js";
app.use("/api/admin", adminRoutes);

import staticRoutes from "./routes/staticRoute.js";
app.use("/api", staticRoutes);

//server
const server = app.listen(
  process.env.PORT || 5000,
  process.env.HOST || "localhost",
  () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  }
);

// Start the Vite-powered Express server
viteExpress.bind(app, server);
