const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    status: {
      type: String,
      enum: ["TODO", "IN-PROGRESS", "COMPLETED"],
      default: "TODO",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    deadline: { type: Date, default: null },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Task", taskSchema);
