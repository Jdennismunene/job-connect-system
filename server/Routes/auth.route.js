const express = require("express");
const {
  signup,
  verifyEmail,
  logout,
  login,
  forgotPassword,
  resetPassword,
} = require("../Controllers/auth.controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/verify-email", verifyEmail);
router.post("/logout", logout);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
