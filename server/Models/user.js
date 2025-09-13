const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["jobseeker", "employer", "admin"],
    default: "jobseeker",
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  companyName: {
    type: String,
    required: [true, "Please provide company name"],
    trim: true,
  },
  industry: {
    type: String,
    required: [true, "Please provide industry"],
  },
  description: {
    type: String,
    required: [true, "Please provide company description"],
  },
  website: {
    type: String,
  },
  location: {
    type: String,
    required: [true, "Please provide company location"],
  },
  logo: {
    type: String,
    default: "default-logo.jpg",
  },
  companySize: {
    type: String,
    enum: ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"],
    required: [true, "Please provide company size"],
  },
  avatar: {
    type: String,
    default: "default-avatar.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: { type: Date, default: Date.now },
  resetPasswordToken: String,
  resetPasswordExpiresAt: Date,
  verificationToken: String,
  verificationTokenExpiresAt: Date,
});

module.exports = mongoose.model("user", userSchema);
