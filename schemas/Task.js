const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Task name is required!"],
  },
  completed: Boolean,
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

TaskSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Task", TaskSchema);
