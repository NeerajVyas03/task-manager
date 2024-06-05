const Task = require("../models/task");

exports.createTask = async (req, res) => {
  const { title, description, dueDate, category } = req.body;
  const task = await Task.create({ title, description, dueDate, category });
  res.status(200).json({
    status: "success",
    data: {
      task,
    },
  });
};

exports.editTask = async (req, res, next) => {
  try {
    const { title, description, dueDate, category, id } = req.body;

    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, dueDate, category },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      console.log("not found ");
    }

    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      console.log("not found ");
    }

    res.status(200).json({
      status: "success",
      data: {
        task: null,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.completeTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    task.completed = true;
    await task.save();
    if (!task) {
      console.log("not found ");
    }

    res.status(200).json({
      status: "success",
      data: {
        task: null,
      },
    });
  } catch (err) {
    next(err);
  }
};
