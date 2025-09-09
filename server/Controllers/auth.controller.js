import { user } from "../Models/user";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie";
const bcrypt = require("bcryptjs");
export const signup = async (req, res) => {
  const { email, password, name, role } = req.body;
  try {
    if (!email || !password || !name || !role) {
      throw new error("All fields are Required");
    }
    const userAlreadyExist = await user.findone({ email });
    if (userAlreadyExist) {
      return res
        .status(400)
        .json({ success: false, message: "User Alredy Exits" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const VerificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const user = new User({
      email,
      password: hashedPassword,
      name,
      role,
      VerificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hrs
    });
    await user.save();
    generateTokenAndSetCookie(res, user._id);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
