const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/", taskController.createTask);
router.patch("/", taskController.editTask);
router.patch("/:id", taskController.completeTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
