# TaskAPI

A simple REST API for managing tasks built with Node.js and Express. This API allows you to create, read, update, and delete tasks with basic validation.

## Features

- ✅ **CRUD Operations**: Create, Read, Update, and Delete tasks
- 🔍 **Task Filtering**: Filter tasks by completion status
- ✅ **Input Validation**: Validates task data before processing
- 📁 **JSON Storage**: Uses JSON file for data persistence
- 🚀 **Express Framework**: Built with Express.js for robust routing

## Project Structure

```
TaskAPI/
├── app.js          # Main Express application file
├── readjson.js     # Module to read tasks from JSON file
├── validation.js   # Input validation middleware
├── tasks.json      # JSON file storing task data
├── package.json    # Project dependencies and scripts
└── README.md       # This file
```

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd TaskAPI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The server will start running on `http://localhost:3000`

## API Endpoints

### 1. Get All Tasks
- **GET** `/tasks`
- **Description**: Retrieves all tasks
- **Response**: Array of all tasks

### 2. Get Completed Tasks
- **GET** `/tasks/completed`
- **Description**: Retrieves only completed tasks
- **Response**: Array of completed tasks

### 3. Get Task by ID
- **GET** `/tasks/:id`
- **Description**: Retrieves a specific task by its ID
- **Parameters**: `id` (integer) - Task ID
- **Response**: Single task object or 404 if not found

### 4. Create New Task
- **POST** `/tasks`
- **Description**: Creates a new task
- **Request Body**:
  ```json
  {
    "title": "Task title",
    "description": "Task description",
    "completed": false
  }
  ```
- **Response**: Updated array of all tasks

### 5. Update Task
- **PUT** `/tasks/:id`
- **Description**: Updates an existing task
- **Parameters**: `id` (integer) - Task ID
- **Request Body**:
  ```json
  {
    "title": "Updated title",
    "description": "Updated description",
    "completed": true
  }
  ```
- **Response**: Updated task object or 404 if not found

### 6. Delete Task
- **DELETE** `/tasks/:id`
- **Description**: Deletes a task by ID
- **Parameters**: `id` (integer) - Task ID
- **Response**: Updated array of remaining tasks or 404 if not found

## Task Data Structure

Each task object has the following structure:

```json
{
  "id": 1,
  "title": "Task title",
  "description": "Task description",
  "completed": false
}
```

## Validation

The API includes input validation that ensures:
- `title` must be a string
- `description` must be a string
- `completed` must be a boolean

Invalid requests will return a 400 status code with an error message.

## Usage Examples

### Using cURL

1. **Get all tasks**
   ```bash
   curl http://localhost:3000/tasks
   ```

2. **Get completed tasks**
   ```bash
   curl http://localhost:3000/tasks/completed
   ```

3. **Get task by ID**
   ```bash
   curl http://localhost:3000/tasks/1
   ```

4. **Create a new task**
   ```bash
   curl -X POST http://localhost:3000/tasks \
     -H "Content-Type: application/json" \
     -d '{"title": "New Task", "description": "This is a new task", "completed": false}'
   ```

5. **Update a task**
   ```bash
   curl -X PUT http://localhost:3000/tasks/1 \
     -H "Content-Type: application/json" \
     -d '{"title": "Updated Task", "description": "This task has been updated", "completed": true}'
   ```

6. **Delete a task**
   ```bash
   curl -X DELETE http://localhost:3000/tasks/1
   ```

### Using JavaScript/Fetch

```javascript
// Get all tasks
fetch('http://localhost:3000/tasks')
  .then(response => response.json())
  .then(tasks => console.log(tasks));

// Create a new task
fetch('http://localhost:3000/tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'New Task',
    description: 'This is a new task',
    completed: false
  })
})
.then(response => response.json())
.then(result => console.log(result));
```

## Error Handling

The API returns appropriate HTTP status codes:
- `200` - Success
- `400` - Bad Request (validation error)
- `404` - Not Found (task not found)

## Development

To run the application in development mode with auto-restart on file changes:

```bash
npm run dev
```

This uses nodemon to automatically restart the server when files are modified.

## Dependencies

- **express**: Web framework for Node.js
- **nodemon**: Development dependency for auto-restarting the server

## License

ISC License

## Contributing

Feel free to submit issues and enhancement requests! 