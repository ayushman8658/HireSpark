import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import authenticateToken from "../middleware/isAuthenticated.js";
import { singleupload } from "../middleware/multer.js";
const router = express.Router();

// Import routes
router.route("/register").post(singleupload, register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(authenticateToken, updateProfile);

export default router;
