# Equity Trading Platform 

A full-stack equity trading platform built using the MERN stack, designed to simulate real-world stock trading workflows such as user authentication, portfolio tracking, and order execution.

> This project focuses on scalability, clean architecture, and production-ready deployment practices.

 Features:-

-  Secure user authentication (JWT-based)
-  Real-time stock price updates (WebSocket-ready architecture)
-  Portfolio & holdings management
-  Order placement (Buy/Sell simulation)
-  Interactive dashboard for users
-  RESTful APIs with proper error handling
-  Environment-based configuration (dev / prod)
  
.
.
.
.

## Tech Stack:-

Frontend
- React.js
- JavaScript (ES6+)
- Tailwind / CSS
- Axios

Backend
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JWT Authentication

Database
- MongoDB Atlas

.
.
.
.

Architecture Overview

.
.
.
.

Frontend (React)
|
|-- REST API (HTTPS)
|
Backend (Node.js + Express)
|
|-- MongoDB Atlas

````

The application follows a modular and scalable architecture, making it easy to extend features such as live trading, notifications, or analytics.

---

## Environment Variables:-

Create a `.env` file inside the backend folder:

```
env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
````

>  Environment files are excluded from version control for security reasons.

---

## Getting Started (Local Setup)

1. Clone the repository

```bash
git clone https://github.com/CHIRAG-CHOKEN/equity-trading-platform.git
cd equity-trading-platform
```

2. Backend setup

```bash
cd backend
npm install
npm run dev
```

3. Frontend setup

```bash
cd frontend
npm install
npm start
```

3. Dashboard setup

```bash
cd dashboard
npm install
npm start
```

---

## Deployment

* "Frontend": Vercel
* "Backend": Render
* "Database"": MongoDB Atlas

The project is deployed using cloud platforms that mirror real-world production environments.

---

## 📌 Future Improvements

* 🔄 WebSocket-based live market feed
* 🧠 Role-based access control (Admin / User)
* 📉 Advanced analytics & charts
* 🧪 Unit & integration testing
* 🐳 Docker-based containerization
* 🔁 CI/CD pipeline

---

## Author

"Chirag Choken"
Final-year student | Full Stack Developer
📧 [chokenchirag89@gmail.com](mailto:chokenchirag89@gmail.com)
🔗 GitHub: [https://github.com/CHIRAG-CHOKEN](https://github.com/CHIRAG-CHOKEN)

---



2️⃣ Project Structure :-

```

equity-trading-platform/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── dashboard/   (agar admin dashboard hai)
│
├── .gitignore
├── README.md
└── package.json (optional root scripts)

```



