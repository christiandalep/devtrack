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
    deadline: { type: Date, default: null },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Task", taskSchema);
