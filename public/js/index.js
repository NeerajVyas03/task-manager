import { addTask, editTask, deleteTask, completeTask } from "./manageTasks.js";
const addForm = document.querySelector(".add-task");
const editForm = document.querySelector(".edit-task");
const deleteForm = document.querySelectorAll(".delete-task");
const taskCompleteForm = document.querySelectorAll(".complete-task");

if (addForm) {
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = {
      title: document.getElementById("name").value,
      description: document.getElementById("desc").value,
      dueDate: document.getElementById("dueDate").value,
      category: document.getElementById("category").value,
    };
    addTask(taskData);
  });
}

if (editForm) {
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = {
      title: document.getElementById("name").value,
      description: document.getElementById("desc").value,
      dueDate: document.getElementById("dueDate").value,
      category: document.getElementById("category").value,
      id: document.getElementById("id").value,
    };
    editTask(taskData);
  });
}

if (deleteForm.length > 0) {
  deleteForm.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskId = form.id;

      deleteTask(taskId);
    });
  });
}
if (taskCompleteForm.length > 0) {
  taskCompleteForm.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskId = form.id;

      completeTask(taskId);
    });
  });
}
