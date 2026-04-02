#  Finance Dashboard Backend

A scalable backend system for managing financial records with role-based access control and analytics APIs. This project demonstrates clean backend architecture, secure API design, and efficient data handling for a finance dashboard application.

---

##  Features

- JWT-based Authentication
- Role-Based Access Control (Viewer, Analyst, Admin)
- Financial Records Management (CRUD)
- Dashboard Analytics (Income, Expenses, Net Balance, Monthly Trends)
- Filtering, Search, and Pagination
- Soft Delete Support
- Rate Limiting for API protection
- Swagger API Documentation

---

##  Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JSON Web Tokens (JWT)  
- **API Docs:** Swagger (OpenAPI)

---

##  API Endpoints

### Auth
- `POST /auth/register` → Register user  
- `POST /auth/login` → Login & get token  

### Records
- `GET /records` → Get all records (with filters & pagination)  
- `POST /records` → Create record (Admin only)  
- `DELETE /records/:id` → Soft delete record (Admin only)  

### Dashboard
- `GET /dashboard/summary` → Financial summary & trends  

---

##  Role Permissions

 Role     Access 
 -----------------
 Viewer  - Read-only access 
 Analyst - Read + Analytics 
 Admin   - Full access (CRUD + Users) 

---

##  Setup Instructions

```bash
npm install
npm run dev
