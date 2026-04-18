import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

// POST /api/auth/register
router.post("/register", async (req, res) => {
  // - Validate input
  // - Check if user exists
  // - Hash password
  // - Save user
  // - Return user (without password)
  return registerUser(req, res);
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  // - Find user
  // - Compare password
  // - Generate JWT
  // - Return token
  return loginUser(req, res);
});

export default router;
