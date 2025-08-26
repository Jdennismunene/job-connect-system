const mongoose = require("mongoose");
const jobseekerProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resume: { type: String },
  skills: [{ type: String, required: true }],
  experience: [
    {
      company: String,
      role: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  education: [
    {
      institution: String,
      degree: String,
      startDate: Date,
      endDate: Date,
    },
  ],
});

module.exports = mongoose.model("JobseekerProfile", jobseekerProfileSchema);
