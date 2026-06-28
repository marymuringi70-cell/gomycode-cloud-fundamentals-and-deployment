# Hosting a MERN App on Microsoft Azure

## Objective

This project demonstrates how to build and deploy a MERN (MongoDB, Express, React, Node.js) application on Microsoft Azure with MongoDB Atlas as the cloud database.

---

## Tech Stack

* MongoDB Atlas
* Express.js
* React.js
* Node.js
* Microsoft Azure

---

## Project Overview

This MERN application consists of:

### Backend

* Node.js server
* Express API
* MongoDB database connection using Mongoose
* RESTful API routes for user management

### Frontend

* React application created using Vite
* Fetches data from backend API
* Displays user data

---

## Features

* Connect backend to MongoDB Atlas
* Create and retrieve users
* REST API endpoints
* Frontend connected to backend
* Ready for deployment on Microsoft Azure

---

## API Endpoints

### Get all users

GET /api/users

### Create user

POST /api/users

Example request body:

```json
{
  "name": "Mary",
  "email": "mary@test.com",
  "age": 22
}
```

---

## Installation and Setup

### Clone Repository

```bash
git clone <repository-url>
cd cloud-fundamentals-and-deployment
```

### Install Backend Dependencies

```bash
npm install
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## Run Backend

```bash
node server.js
```

---

## Run Frontend

```bash
cd client
npm run dev
```

---

## Build Frontend for Production

```bash
cd client
npm run build
```

---

## Deployment on Microsoft Azure

Steps followed:

1. Created Azure account
2. Created Azure Web App
3. Connected deployment source (GitHub/Local Git)
4. Configured environment variables
5. Deployed MERN application
6. Tested deployed application

---

## Challenges Faced

* MongoDB Atlas connection issues
* DNS/SRV connection errors
* Environment variable configuration
* Backend and frontend integration

---

## Outcome

Successfully built and prepared a MERN stack application for deployment on Microsoft Azure using MongoDB Atlas as the cloud database.
