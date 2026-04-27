const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    status: {
      type: "String",
      enum: ["TODO", "IN-PROGRESS", "COMPLETED"],
      default: "TODO",
    },
    description: { type: String, required: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Task", taskSchema);
