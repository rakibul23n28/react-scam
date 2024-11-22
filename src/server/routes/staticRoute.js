import express from "express";
import Task from "../models/task.js";

const router = express.Router();

// Apply the auth middleware to the tasks route
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({}).sort({ createdAt: -1 }); // Sort tasks by creation date in descending order
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
