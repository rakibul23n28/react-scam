import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper function to create and set JWT in a cookie
const setTokenCookie = (res, user) => {
  const payload = {
    _id: user._id,
    name: `${user.firstName} ${user.lastName}`,
    profileImageUrl: user.profileImageUrl,
    email: user.email,
    role: user.role,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "Strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600000, // 1 hour
  });

  return payload;
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

// Login user and set JWT token in a cookie
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

    const userPayload = setTokenCookie(res, user);
    req.user = userPayload;

    res.json({ msg: "Login successful", user: userPayload });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error during login" });
  }
};

// Logout user by clearing the token cookie
export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Strict",
    secure: process.env.NODE_ENV === "production",
  });

  res.json({ msg: "Logout successful" });
};

// Get the authenticated user from the token
export const getUser = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  res.json({ user: req.user });
};
