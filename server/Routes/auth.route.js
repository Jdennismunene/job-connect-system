const express = require("express");
const {
  signup,
  verifyEmail,
  logout,
} = require("../Controllers/auth.controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/verify-email", verifyEmail);
router.post("/logout", logout);

module.exports = router;
