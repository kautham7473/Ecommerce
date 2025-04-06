# 🛒 E-Commerce Microservices Project

A backend microservices-based architecture for an e-commerce application built using **Spring Boot**, **Spring Cloud**, and **Docker**, with support for service discovery, centralized configuration, and token-based authentication (JWT – in progress).

---

## 🧩 Services Included

### ✅ Discovery Server (Eureka)
- **Purpose**: Enables service registration and discovery.
- **Status**: ✅ Deployed on Render
- **Tech Stack**: Spring Cloud Eureka

### ✅ Config Server
- **Purpose**: Centralized configuration management for all microservices.
- **Status**: ✅ Deployed on Render
- **Tech Stack**: Spring Cloud Config

### ✅ User Service
- **Purpose**: Handles user creation, authentication, and seller info.
- **Status**: ✅ Deployed on Render
- **Features**:
  - User Registration
  - User Login
  - JWT Token Generation (to be used by other services)

### ✅ Product Service
- **Purpose**: Manages all products listed by sellers.
- **Status**: ✅ Tested and working locally
- **Features Implemented**:
  - Create Product (linked to seller via user ID)
  - Get All Products by Seller
  - Get Product by ID
  - Delete Product
- **Pending**:
  - JWT Authentication (next step)
  - Authorization with extracted user ID

---

## 🔧 Tech Stack

- Java 21
- Spring Boot 3.4.3
- Spring Cloud
- Eureka
- Spring Cloud Config
- Docker & Docker Compose
- PostgreSQL (planned)
- JWT (in progress)

---

## 📦 Deployment

- Discovery & Config Server: ✅ [Hosted on Render](https://render.com/)
- User Service: ✅ Deployed
- Product Service: 🛠️ In progress (currently tested locally)

---

## 🚧 Next Steps

- [ ] Add JWT Authentication to Product Service
- [ ] Deploy Product Service
- [ ] Implement Order, Payment, and Inventory services
- [ ] Create frontend for the app (React – planned)
- [ ] Enable integration testing with Selenium (planned)
- [ ] Finalize README with detailed setup instructions

---

## ❤️ About This Project

This project is not just a tech demo – it’s a **personal milestone**. It's been built:
- To sharpen backend & infra skills
- To lead a real-world project solo
- To help my girlfriend showcase her Selenium skills
- To empower my resume with something *real* and impactful

> **"A project built with heart, hustle, and a dream to move forward."**

---

## 📁 Repo Structure (so far)
ecommerce-microservices/ 
│ 
├── config-server/ # Centralized config management 
    │ 
    └── src/ 
│ 
├── discovery-server/ # Eureka service discovery 
    │ 
    └── src/ 
│ 
├── user-service/ # Manages users & JWT auth 
    │ 
    ├── src/ 
    │ 
    └── Dockerfile 
│ 
├── product-service/ # Handles seller product listings 
    │ 
    ├── src/ 
    │ 
    └── Dockerfile 
│ 
├── docker-compose.yml # For local orchestration of all services 
│ 
└── README.md # This file 👋
