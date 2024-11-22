import express from "express";
import Task from "../models/task.js";
import { restrictTo } from "../middleware/auth.js";

const router = express.Router();

// Add Task
router.post("/tasks", restrictTo("admin"), async (req, res) => {
  try {
    const { videoId } = req.body;

    if (!videoId) {
      return res.status(400).json({ message: "Video ID is required" });
    }

    const newTask = new Task({ videoId });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Task
router.delete("/tasks/:id", restrictTo("admin"), async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.deleteOne();
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

import Package from "../models/package.js"; // Assuming you have a package model

// Add Package
router.post("/packages", restrictTo("admin"), async (req, res) => {
  try {
    const { name, description, price, peopleCount } = req.body;

    if (!name || !description || !price || !peopleCount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPackage = new Package({ name, description, price, peopleCount });
    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Packages
router.get("/packages", async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Package by ID
router.delete("/packages/:id", restrictTo("admin"), async (req, res) => {
  try {
    const { id } = req.params;

    const pkg = await Package.findById(id);
    if (!pkg) {
      return res.status(404).json({ message: "Package not found" });
    }

    await pkg.deleteOne();
    res.status(200).json({ message: "Package deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
