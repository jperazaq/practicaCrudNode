const mongoose = require("mongoose");
const schema = mongoose.Schema;

const task_schema = new schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("task", task_schema);
