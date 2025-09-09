const express = require("express");
const { signup } = require("../Controllers/auth.controller");
const router = express.router();
router.post("/signup", signup);
