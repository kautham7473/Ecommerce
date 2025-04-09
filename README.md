# 🛒 E-Commerce Microservices Project

A backend microservices-based e-commerce system using **Spring Boot**, **Spring Cloud**, **Docker**, and **MariaDB**. Built for learning, resume enhancement, and real-world architecture practice. Includes service discovery, centralized config, and token-based authentication (JWT - in progress).

---

## 🧩 Included Services

### ✅ Discovery Server (Eureka)
- **Role**: Service registration & discovery
- **Status**: ✅ Deployed on Render
- **Tech**: Spring Cloud Eureka

### ✅ Config Server
- **Role**: Centralized configuration
- **Status**: ✅ Deployed on Render
- **Tech**: Spring Cloud Config

### ✅ User Service
- **Role**: User registration, login, and JWT token generation
- **Status**: ✅ Deployed on Render
- **Features**:
  - Register & login
  - Generate JWT tokens
  - Store seller information

### ✅ Product Service
- **Role**: Seller's product management
- **Status**: ✅ Working locally
- **Features**:
  - Add product (linked via seller ID)
  - Get all products by seller
  - Get product by ID
  - Delete product
  - JWT token verification
  - Authorization using extracted user ID

---

## 🔧 Tech Stack

- Java 21
- Spring Boot 3.4.3
- Spring Cloud (Eureka, Config)
- Docker & Docker Compose
- **MariaDB (Cloud-hosted)**
- JWT Auth (in progress)

---

## 🚀 Deployment

- **Eureka & Config Server**: ✅ Live on Render
- **User Service**: ✅ Deployed
- **Product Service**: 🛠️ Local (to be deployed soon)

---

## ✅ Next Goals

- [x] JWT for User Service
- [x] JWT Validation in Product Service
- [ ] Deploy Product Service to Render
- [ ] Build Order, Payment & Inventory Services
- [ ] Develop Frontend (React)
- [ ] UI Automation with Selenium (by my girlfriend!)

---

## ❤️ Why I Built This

This is more than just a backend system. It’s a personal journey:
- 🚀 Level up backend and infra skills
- 🧠 Learn end-to-end architecture from scratch
- 💕 Collaborate with my girlfriend on testing
- 📄 Add strong, real-world project to resume

> “Not just a tech stack — this is a story of growth, love, and learning.”

---

## 📁 Repo Structure
