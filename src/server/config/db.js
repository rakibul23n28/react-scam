// src/config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv"; // Import dotenv to load environment variables

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
  try {
    // Use the MONGO_URI environment variable
    const mongoURI = process.env.MONGO_URI;

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};
