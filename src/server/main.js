import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js'; // Ensure the path is correct
import viteExpress from 'vite-express'; // Import vite-express

dotenv.config(); // Load environment variables from .env

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser()); // For parsing cookies

// CORS setup to allow cookies from the frontend
app.use(cors({
  origin: 'http://localhost:3000', // Update with your frontend URL
  credentials: true, // Enable credentials (for cookies)
}));

// Import and use your routes
import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);

// Start the Vite-powered Express server
viteExpress.listen(app, process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
