Task: To-Do List Application 
Background: 
Create a To-Do List application that allows users to manage their tasks. The application 
should support creating, reading, updating, and deleting (CRUD) tasks. Each task should 
have a title, description, status (e.g., pending, in-progress, completed), and due date. 
Requirements: 
Frontend: 
Task List Page: 
Display a list of all tasks with their title, status, and due date. 
Include buttons for editing and deleting each task. 
Add a button to create a new task. 
Task Form Page: 
A form for creating and editing tasks with fields: Title, Description, Status, and Due Date. 
The form should be used for both creating a new task and updating an existing task. 
Backend: 
API Endpoints: 
Create RESTful API endpoints to manage tasks. 
GET /tasks: Retrieve all tasks. 
GET /tasks/:id: Retrieve a single task by ID. 
POST /tasks: Create a new task. 
PUT /tasks/:id: Update an existing task by ID. 
DELETE /tasks/:id: Delete a task by ID. 
Data Storage: 
Use an in-memory data storage mechanism to store tasks. 
Each task should have a unique ID, title, description, status, and due date. 
Additional Notes: 
Use any frontend framework or library (e.g., React, Vue, Angular) for the frontend. 
Use any backend technology of your choice (e.g., Node.js, Flask, Django). 
Focus on simplicity and functionality rather than complex features. 
Provide clear instructions on how to run the application locally.



solution : 1. run backend : command: node server.js
  2. open frontend folder : cd frontend and then run command: npm run dev
