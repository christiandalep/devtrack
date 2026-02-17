const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      message: "Retrieved all tasks",
      tasks: tasks,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  try {
    const newTask = await Task.create({
      title: title,
    });
    res.status(201).json({
      message: "Successfully created task",
      task_created: newTask,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const taskId = req.params.id;
  const { newTaskTitle } = req.body;
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: taskId },
      { $set: { title: newTaskTitle } },
      { new: true },
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Successfully updated task title",
      updatedTask,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    const deletedTask = await Task.findOneAndDelete({ _id: taskId });

    if (!deletedTask) {
      return res.status(404).json({ Message: "Task not found" });
    }

    res.status(200).json({ message: "Successfully deleted task" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
