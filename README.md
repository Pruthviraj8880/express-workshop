# Express.js Product API Assignment

A RESTful Product API built using **Node.js and Express.js** with a layered architecture, CRUD operations, middleware-based caching, cache expiration, cache invalidation, and error handling.

## 📌 Project Overview

This project demonstrates how to build a structured Express.js backend application using:

* Express.js
* Node.js
* REST API
* Middleware
* Controllers
* Services
* Database layer
* In-memory caching
* Cache TTL
* Cache invalidation
* Error handling

The application provides APIs to create, read, update, and delete products.

---

## 🏗️ Project Architecture

The project follows a layered architecture:

```text
Client
  ↓
Routes
  ↓
Middleware
  ↓
Controller
  ↓
Service
  ↓
Database
```

### Folder Structure

```text
workshop/
│
├── controllers/
│   └── productController.js
│
├── database/
│   └── productDatabase.js
│
├── middleware/
│   ├── cache.js
│   ├── cacheMiddleware.js
│   ├── invalidateCache.js
│   └── errorHandler.js
│
├── routes/
│   └── productRoutes.js
│
├── services/
│   └── productService.js
│
├── db.json
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Pruthviraj8880/express-workshop.git
```

### 2. Navigate into the project

```bash
cd express-workshop
```

### 3. Install dependencies

```bash
npm install
```

---

## 🚀 Running the Application

### Development mode

```bash
npm run server
```

### Normal mode

```bash
npm start
```

The server runs on:

```text
http://localhost:3000
```

---

# 📡 API Endpoints

## 1. Get All Products

**GET**

```text
/products
```

Full URL:

```text
http://localhost:3000/products
```

Returns all available products.

### Response

```json
[
  {
    "id": 1,
    "name": "Keyboard",
    "price": 1999
  }
]
```

---

## 2. Get Product by ID

**GET**

```text
/products/:id
```

Example:

```text
http://localhost:3000/products/1
```

Returns a specific product.

---

## 3. Create Product

**POST**

```text
/products
```

Example request body:

```json
{
  "name": "Test Mouse",
  "price": 999,
  "category": "Electronics"
}
```

---

## 4. Replace Product

**PUT**

```text
/products/:id
```

Example:

```text
http://localhost:3000/products/1
```

Request body:

```json
{
  "name": "Updated Keyboard",
  "price": 2499,
```
