Usage
Creating a Task: Click on the "Add Task" button and fill in the task details in the form.
Viewing Tasks: All tasks will be displayed in a table format on the home page.
Completing a Task: Click on the checkbox next to a task to mark it as completed.
Editing a Task: Click on the "Edit" button next to a task to edit its details.
Deleting a Task: Click on the "Delete" button next to a task to delete it.


Code Structure
The project follows the MVC (Model-View-Controller) architecture:

Routes: The routes directory contains route handlers for handling HTTP requests and responses.
Controllers: The controllers directory contains the logic for handling different actions such as creating, updating, and deleting tasks.
Views: The views directory contains Pug templates for rendering HTML pages with dynamic content.
Models: The models directory contains the Task model, which defines the schema and methods for interacting with the MongoDB database.
Key Decisions
Node.js and Express: Chosen for their simplicity and flexibility in building web applications.
MongoDB: Used as the database for storing task data due to its scalability and ease of use with Node.js.
Pug Templates: Chosen for their simplicity and readability, making it easy to create dynamic HTML pages.
MVC Architecture: Implemented to organize code into separate modules for better maintainability and scalability.
