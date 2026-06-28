# DevTrack

A modern full-stack project management web application built with the **MERN Stack** (MongoDB, Express.js, React, Node.js).

DevTrack helps developers organise software projects by managing tasks through a clean, responsive, and user-friendly interface. The project was built to strengthen full-stack development skills while following modern web development practices and scalable application architecture.

> **Status:** Active Development

---

# Features

## Current

- Create, edit and delete tasks
- Task Priorities
- Due Dates
- RESTful API
- Full CRUD functionality
- Modern card-based interface
- Modal task creation
- In-card based task editing
- Task status management
- Reusable React components
- MongoDB database integration
- Form validation

---

## Planned / Roadmap

- Multiple project task management
- JWT Authentication
- User accounts
- Responsive UI for different devices
- Search and filtering
- Dashboard analytics
- File attachments
- Light & Dark mode
- Notifications / Alerts

---

# Tech Stack

## Frontend

- React
- JavaScript (ES6+)
- CSS3
- Normalize.css

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Development Tools

- Git
- GitHub
- Postman
- VS Code

---

# Architecture

### Frontend

- Component-based architecture
- Reusable UI components
- React Hooks (`useState`)
- Modular CSS

### Backend

- RESTful API
- MVC architecture
- Routes
- Models

---

# API Endpoints

| Method | Endpoint | Description |

## Status

| GET | `/status` | Check API Status

## Tasks

| GET | `/api/tasks` | Retrieve all tasks |  
| GET | `/api/tasks/:id` | Retrieve a single task |  
| POST | `/api/tasks` | Create a task |  
| PATCH | `/api/tasks/:id` | Update a task |  
| DELETE | `/api/tasks/:id` | Delete a task |  

Authentication endpoints will be added in a future development.

---

# Installation

## Clone the repository

```bash
git clone https://github.com/christiandalep/devtrack.git
```

## Backend

```bash
cd backend
npm install
nodemon server.js
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

# Folder Structure

```
DevTrack
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── scripts
│   └── server.js
│
├── frontend
|   ├── public
|   └── src
|       ├── assets
│       ├── components
│       ├── utils
│       └── App.jsx
│
└── README.md
```

---

# What I Learned

Throughout this project I gained practical experience with:

- Designing RESTful APIs
- Full CRUD operations
- MongoDB and Mongoose
- Express.js backend development
- React component architecture
- State management with React Hooks
- API testing using Postman
- Git version control
- Building scalable full-stack applications

---

# Author

**Christian Dale Pancho**

Graduate Software Developer

GitHub:
https://github.com/christiandalep

LinkedIn:
https://www.linkedin.com/in/christiandalep
