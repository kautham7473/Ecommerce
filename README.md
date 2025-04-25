# 🛒 NeoCart — E-Commerce Microservices Platform

**NeoCart** is a full‑stack, microservices‑based e‑commerce application designed to demonstrate end‑to‑end architecture, deployment, and best practices. 

---

## 📦 Project Structure


Ecommerce/                         
├── config-server/    (Spring Cloud Config)      
├── discovery-server/ (Eureka Service Registry)   
├── user-service/     (User registration & JWT)    
├── product-service/  (Product catalog & APIs)     
├── cart-service/     (Shopping cart management)   
├── neocart-frontend/ (React + Vite SPA)          
├── docker-compose.yml (Local orchestration)      
├── README.md         (This file)                
├── LICENSE           (MIT License)              
└── .gitignore                                      
  

---

## 🚀 Features

- **Service Discovery** via Eureka to register and locate microservices at runtime. 
- **Centralized Configuration** using Spring Cloud Config for environment‑agnostic settings. 
- **User Management** with registration, login, and JWT‑based authentication. 
- **Product Service** to add, view, update, and delete product listings. 
- **Cart Service** to add/remove items and retrieve user carts. 
- **Frontend SPA** built with React, TailwindCSS, and Vite for seamless UX. 
- **Docker Compose** setup for local multi‑container orchestration. 

---

## 🛠️ Tech Stack

### Backend

- Java 21 & Spring Boot 3.x (services)
- Spring Cloud: Eureka, Config
- Spring Data JPA & MariaDB for persistence
- Spring Security & JWT for auth

### Frontend

- React.js with Vite bundler
- Tailwind CSS for styling
- Axios for HTTP requests
- React Router for client‑side routing

### DevOps

- Docker & Docker Compose
- Render.com for cloud deployments

---

## ⚙️ Prerequisites

- Java 21 installed locally 
- Docker & Docker Compose 
- Node.js & npm 

---

## 🏃‍♂️ Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/kautham7473/Ecommerce.git
   cd Ecommerce
   ```  

2. **Start all services** via Docker Compose
   ```bash
   docker-compose up --build
   ```  

3. **Access the apps**
   - Frontend: `http://localhost:5173` 
   - Eureka Dashboard: `http://localhost:8761` 
   - User Service API: `http://localhost:8081` 
   - Product Service API: `http://localhost:8082` 
   - Cart Service API: `http://localhost:8083` 

---

## 🌟 Usage

1. **Register** a new user via User Service endpoint. 
2. **Login** to receive JWT token. 
3. **Browse** products in the React UI. 
4. **Add to Cart** using the Add to Cart button. 
5. **View Cart** and **Checkout** via API or UI (Order Service coming soon). 

---

## 📝 Environment Variables

Create a `.env` file in each service directory (`*-service/`) with:
```
SPRING_PROFILES_ACTIVE=development
SPRING_DATASOURCE_URL=jdbc:mariadb://<host>:<port>/<db>
SPRING_DATASOURCE_USERNAME=<user>
SPRING_DATASOURCE_PASSWORD=<pass>
JWT_SECRET=<your_jwt_secret>
```

---

## 🛡️ Security

- All `/api/**` endpoints require `Authorization: Bearer <token>`. 
- Role‑based access enforced in services. 

---

## 📦 CI/CD

- GitHub Actions automate build, test, and Docker image creation. 
- Deployments triggered on merge to `develop` branch. 

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo, create a feature branch, and submit a pull request. 

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details. 

