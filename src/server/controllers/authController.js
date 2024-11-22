import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper function to create and send JWT
const generateToken = (user) => {
  const payload = {
    _id: user._id,
    name: `${user.firstName} ${user.lastName}`,
    profileImageUrl: user.profileImageUrl,
    email: user.email,
    role: user.role,
    balance: user.balance,
  };

  // Generate JWT token with 1-hour expiration
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  return token;
};

// Register a new user
export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Validate inputs
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  try {
    // Check if user already exists
    if (await User.findOne({ email })) {
      return res.status(400).json({ msg: "Email is already registered" });
    }

    const user = new User({ firstName, lastName, email, password });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error during registration" });
  }
};

// Login user and return JWT token
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please provide email and password" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // Generate JWT token
    const token = generateToken(user);

    res.json({
      msg: "Login successful",
      token, // Send the JWT token to the client
      user: {
        _id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        role: user.role,
        balance: user.balance,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error during login" });
  }
};

// Logout user by clearing JWT (frontend will handle token removal)
export const logout = (req, res) => {
  // Since we are not using cookies, logout is handled on the client-side by removing the token.
  res.json({ msg: "Logout successful" });
};

// Get the authenticated user from the token
export const getUser = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  res.json({ user: req.user });
};

// Route to validate token
export const validate = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ isValid: false });
  }
  res.json({ isValid: true });
};
