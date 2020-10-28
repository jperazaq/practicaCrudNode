const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const task_schema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("tasks", task_schema);
