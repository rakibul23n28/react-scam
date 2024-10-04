import express from 'express';
import { login, register, logout, getUser } from '../controllers/authController.js';
import { auth } from '../middleware/auth.js'; // Use named import


const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/logout', logout);
router.get('/user', auth, getUser);

export default router;
