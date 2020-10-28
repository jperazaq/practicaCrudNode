const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/add", async (req, res) => {

  console.log(req.body);
  const task = new Task(req.body);
  await task.save();
  
  res.send("Recibido");
});
module.exports = router;
