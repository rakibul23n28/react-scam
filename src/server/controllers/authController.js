import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register a new user
export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = new User({ firstName, lastName, email, password });
    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// Login user and set JWT token in a cookie
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: `User with email ${email} not found` });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'User password is incorrect' });
    }

    const payload = {
        _id: user._id,
        name: user.firstName+" "+user.lastName,
        profileImageUrl: user.profileImageUrl,
        email: user.email,
        role: user.role
    }
    
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set token in HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000, // 1 hour
    });

    res.json({ msg: 'Login successful', user: payload });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Logout user by clearing the cookie
export const logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'Strict',
    secure: process.env.NODE_ENV === 'production',
  });
  res.json({ msg: 'Logout successful' });
};

// Get the authenticated user
export const getUser = (req, res) => {
  res.json({ user:req.user });
};
