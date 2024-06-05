const Task = require("../models/task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).render("index", { tasks });
};

exports.editTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.status(200).render("edit", { task });
  } catch (err) {
    res.status(500).send(err);
  }
};
