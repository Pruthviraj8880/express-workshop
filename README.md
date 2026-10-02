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
  "category": "Electronics"
}
```

---

## 5. Update Product

**PATCH**

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
  "price": 1999
}
```

Only the provided fields are updated.

---

## 6. Delete Product

**DELETE**

```text
/products/:id
```

Example:

```text
http://localhost:3000/products/1
```

Deletes the specified product.

---

# ⚡ Caching

The GET endpoints use middleware-based caching.

The cache stores GET responses temporarily to avoid repeatedly fetching the same data from the database.

## X-Cache Header

The API returns an `X-Cache` response header.

### Cache MISS

On the first request:

```text
X-Cache: MISS
```

This means the response was not available in the cache and was fetched from the database.

### Cache HIT

When the same request is made again while the response is cached:

```text
X-Cache: HIT
```

This means the response was served from the cache.

---

# ⏱️ Cache TTL

Cached data has a **1-minute TTL (Time To Live)**.

After the cache expires, the next GET request fetches fresh data from the database and stores the new response in the cache.

Example:

```text
First GET       → MISS
Second GET      → HIT
After 1 minute  → MISS
Next GET        → HIT
```

---

# 🔄 Cache Invalidation

The cache is invalidated whenever product data is modified.

Cache invalidation occurs after:

* POST
* PUT
* PATCH
* DELETE

Example:

```text
GET /products
→ MISS

GET /products
→ HIT

POST /products
→ Cache invalidated

GET /products
→ MISS

GET /products
→ HIT
```

This ensures that users receive updated product data instead of stale cached data.

---

# ❌ Error Handling

The application includes centralized error handling.

Examples include:

* Product not found
* Invalid product ID
* Invalid request data
* Server/database errors

A non-existing product returns an appropriate `404 Not Found` response.

Example:

```text
GET /products/99999
```

Response:

```text
404 Not Found
```

---

# 🧪 Testing with Postman

The API can be tested using Postman.

### Recommended testing sequence

```text
1. GET /products
2. GET /products
3. GET /products/:id
4. GET /products/:id
5. POST /products
6. GET /products
7. PUT /products/:id
8. GET /products/:id
9. PATCH /products/:id
10. GET /products/:id
11. DELETE /products/:id
12. GET /products/:id
```

For GET requests, verify:

```text
X-Cache: MISS
```

on the first request and:

```text
X-Cache: HIT
```

on subsequent requests while the cache is valid.

---

# 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **JavaScript**
* **REST API**
* **JSON**
* **Git & GitHub**
* **Postman**

---

# 📚 Learning Objectives

This assignment demonstrates understanding of:

* Express.js routing
* REST API design
* HTTP methods
* Middleware
* Controllers
* Service layer
* Database abstraction
* CRUD operations
* In-memory caching
* Cache TTL
* Cache invalidation
* HTTP response headers
* Error handling
* API testing with Postman
* Git and GitHub

---

## 👨‍💻 Author

**Pruthviraj Vala**

