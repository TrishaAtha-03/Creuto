 📚 Creuto (Node.js + MongoDB)

This project is a simple **Books Management API** built using **Node.js, Express, MongoDB, and Mongoose**.  
It supports **full CRUD operations** along with **search, filtering, sorting, and pagination**.

A lightweight **EJS-based UI** is also included to test APIs directly from the browser (similar to Postman).

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Local)
- Mongoose
- EJS

📦 Installation & Setup
Install Dependencies
npm install express mongoose dotenv ejs
(Optional – for development)

npm install --save-dev nodemon
▶️ Running the Server
Start the server in development mode:

npm run dev
Server runs at:

http://localhost:3000
🔗 API Base URL
http://localhost:3000/api/books
🧪 Testing APIs Locally (Browser / Postman / curl)
Example GET Requests
http://localhost:3000/api/books
http://localhost:3000/api/books?search=code
http://localhost:3000/api/books?author=Jane Doe
http://localhost:3000/api/books?from=2018-01-01&to=2022-12-31
http://localhost:3000/api/books?sortBy=name&order=asc
http://localhost:3000/api/books?page=1&limit=5
These endpoints support:
  Search
  Author filtering
  Date range filtering
  Sorting
  Pagination

📌UI Testing (Mini Postman Replica)
The project includes a simple browser-based UI for testing all CRUD operations.

Open UI in Browser
http://localhost:3000
How to Use the UI
Select the HTTP method (GET / POST / PATCH / DELETE)

Paste the API URL, for example:

  /api/books
  /api/books?search=code
  /api/books?author=Jane Doe
  /api/books?page=1&limit=5
  Add JSON body (for POST / PATCH)

Click Send

Features of UI
Supports GET, POST, PATCH, DELETE

Shows API response

Displays books from database

Automatically reflects CRUD changes

✅ Supported CRUD Operations
GET – Fetch books with filters

POST – Add a new book

PATCH – Update existing book

DELETE – Remove a book

📌 Notes
Default pagination limit is 10

Maximum limit allowed is 50

Dates must be in ISO format

UI fetches latest data after every operation

🏁 Conclusion
This project demonstrates clean backend architecture, REST API best practices, and easy testing using both APIs and a browser-based UI.

## ⚙️ Prerequisites

Make sure the following are installed on your system:

```bash
node -v
npm -v
mongod --version
Note: This project uses local MongoDB, not MongoDB Atlas.
