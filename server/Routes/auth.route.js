const express = require("express");
const {
  signup,
  verifyEmail,
  logout,
  login,
  forgotPassword,
  resetPassword,
  checkAuth,
} = require("../Controllers/auth.controller");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();
router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", signup);
router.post("/verify-email", verifyEmail);
router.post("/logout", logout);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
