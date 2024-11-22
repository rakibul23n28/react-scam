import express from "express";
import {
  login,
  register,
  logout,
  getUser,
  validate,
} from "../controllers/authController.js";
import { auth, validateToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);
router.get("/user", auth, getUser);

router.get("/validate", validateToken, validate);

export default router;
