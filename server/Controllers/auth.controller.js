const user = require("../Models/user");
const bcrypt = require("bcryptjs");
const {
  generateTokenAndSetCookie,
} = require("../utils/generateTokenAndSetCookie");
const { token } = require("morgan");

const signup = async (req, res) => {
  const { email, password, name, role } = req.body;

  try {
    if (!email || !password || !name || !role) {
      throw new Error("All fields are required");
    }

    const userAlreadyExist = await user.findOne({ email });
    if (userAlreadyExist) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const newuser = new user({
      email,
      password: hashedPassword,
      name,
      role,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hrs
    });

    await newuser.save();

    generateTokenAndSetCookie(res, newuser._id);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { signup };
