🛒 E-Commerce Microservices Project

A microservices-based backend architecture for an e-commerce application using Spring Boot, Spring Cloud, Docker, and more. The project includes service discovery, centralized configuration, containerized deployment, and JWT-based authentication (WIP).


---

🧩 Microservices Overview

✅ Discovery Server (Eureka)

Purpose: Service registration & discovery.

Status: Live on Render

Tech Stack: Spring Cloud Eureka


✅ Config Server

Purpose: Centralized configuration management.

Status: Live on Render

Tech Stack: Spring Cloud Config


✅ User Service

Purpose: Manages users, authentication, and seller details.

Status: Live on Render

Features:

User Registration & Login

JWT Token Generation (to be consumed by other services)



🛠️ Product Service

Purpose: Handles product listings by sellers.

Status: Tested locally

Implemented:

Create Product (mapped to seller ID)

Retrieve Products by Seller

Retrieve Product by ID

Delete Product


Next Steps:

Integrate JWT Authentication

Role-based Authorization




---

🧰 Tech Stack

Java 21

Spring Boot 3.4.3

Spring Cloud (Eureka, Config)

Docker & Docker Compose

PostgreSQL (upcoming)

JWT (in progress)



---

🚀 Deployment

Render:

Discovery Server ✅

Config Server ✅

User Service ✅

Product Service: Coming soon




---

🛣️ Roadmap

[x] Add JWT to User Service

[ ] Apply JWT to Product Service

[ ] Deploy Product Service to Render

[ ] Implement Order, Inventory & Payment Services

[ ] Build React Frontend

[ ] Setup Selenium UI Test Automation

[ ] Add Setup Instructions to README



---

❤️ Why This Project Matters

This isn’t just a technical demo — it’s a journey.

Skill Expansion: Sharpening backend + infra mastery

Ownership: Managing architecture, deployment & codebase solo

Collaboration: Platform for my girlfriend to showcase Selenium expertise

Career Value: A project with purpose that reflects real impact


> "This is more than just code — it’s a canvas of growth, learning, and love."




---

📁 Repository Structure

ecommerce-microservices/ 
 ├── config-server/         # Spring Cloud Config Server
 ├── discovery-server/      # Eureka Discovery Server
 ├── user-service/          # User Mgmt & JWT
 ├── product-service/       # Product Mgmt
 ├── docker-compose.yml     # Local orchestration
 └── README.md              # You're here!


---

✨ Coming Soon

Frontend in React (NeoCart UI)

End-to-End UI testing with Selenium

Production-grade setup and documentation


Let’s build this forward!
