const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");

router.get("/", viewController.getTasks);
router.get("/:id", viewController.editTask);

// router.post("/tasks", taskController.createtask);
// router.post("/tasks/:id/complete", taskController.taskCompleted);

// router.patch("/tasks/:id/edit", taskController.editTask);

// router.delete("/tasks/:id/delete", taskController.deleteTask);

module.exports = router;
