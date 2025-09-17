const Job = require("../Models/job");
const User = require("../Models/user");
const Application = require("../Models/Application");
const Savedjob = require("../Models/savedjobs");

exports.createJob = async (req, res) => {
  try {
    if (req.role !== "employer") {
      return res.status(403).json({ message: "Only employers can post jobs" });
    }

    const job = await Job.create({
      ...req.body,
      company: req.userId, // employer’s id
    });

    res.status(201).json(job);
  } catch (err) {
    console.error("Error creating job:", err);
    res.status(500).json({ message: err.message });
  }
};
