const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json({
      message: "Retrieved all tasks",
      tasks: tasks,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = await Task.create({
      title: title,
      description: description,
    });
    return res.status(201).json({
      message: "Successfully created task",
      task_created: newTask,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const taskId = req.params.id;
  const { title, description, status } = req.body;
  try {
    let newTask = {};
    title && (newTask.title = title);
    description && (newTask.description = description);
    status && (newTask.status = status);
    const updatedTask = await Task.findOneAndUpdate(
      { _id: taskId },
      { $set: newTask },
      { new: true },
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({
      message: "Successfully updated task",
      updatedTask,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    const deletedTask = await Task.findOneAndDelete({ _id: taskId });

    if (!deletedTask) {
      return res.status(404).json({ Message: "Task not found" });
    }

    return res.status(200).json({ message: "Successfully deleted task" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
