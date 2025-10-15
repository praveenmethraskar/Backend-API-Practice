# Exam Customer Support API

This is a simple backend project for **Exam Customer Support**, built with **Node.js**, **Express**, and **MongoDB**.  
It allows you to store user exam data, get exam statistics, and query users by date.

---

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [License](#license)

---

## Features

- Create a user entry with **first name, last name, exam, address**.  
- Get **number of users by exam**.  
- Get **exam users for a particular date**.  
- Clean API responses without `_id`, `__v`, or `createdAt`.  
- Proper layered architecture:
  - `models/` → Interface / types  
  - `repository/` → Mongoose schema & DB logic  
  - `controllers/` → Business logic & response shaping  
  - `routes/` → API routes  

---

## Folder Structure
```
backend-practice/
├─ server.js
├─ package.json
├─ .env
├─ src/
│ ├─ db.js
│ ├─ models/
│ │ └─ User.js
│ ├─ repository/
│ │ └─ userRepository.js
│ ├─ controllers/
│ │ └─ userController.js
│ └─ routes/
│ └─ examRoutes.js
```

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd backend-practice
```
2. Install dependencies:
```bash
npm init -y
npm install
```
3. Start the server:
```bash
npm run dev
```
Server will run at http://localhost:5000.

# Environment Variables

Create a .env file in the root folder:
```bash
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/exam_support
```
- PORT: Port number for the server

- MONGO_URI: MongoDB connection URI
# API Endpoints
## 1. Create User
POST /api/exams/

Request Body:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "exam": "service",
  "address": "123 Street"
}
```
Response:
```json
{
  "message": "User saved successfully",
  "user": {
    "firstname": "John",
    "lastname": "Doe",
    "exam": "service",
    "address": "123 Street"
  }
}
```
## 2. Get Count By Exam
GET /api/exams/count-by-exam/:exam

Response:
```json
{
  "exam": "service",
  "count": 5
}
```
3. Get Users By Date

GET /api/exams/by-date/:date

Response:
```json
{
  "date": "2025-10-15",
  "exams": [
    {
      "firstname": "John",
      "lastname": "Doe",
      "exam": "service",
      "address": "123 Street"
    }
  ],
  "total": 1
}
```

Usage

- Use Postman or any API client to test endpoints.

- Ensure MongoDB is running before starting the server.

- All responses are clean, without internal MongoDB fields.

License

This project is MIT Licensed.
```yaml

---

If you want, I can also **write a full README with examples of CURL commands** for all endpoints so anyone can test the API immediately.  

Do you want me to do that?
```
