# 🛒 NeoCart — E-Commerce Microservices Platform

**NeoCart** is a full‑stack, microservices‑based e‑commerce application designed to demonstrate end‑to‑end architecture, deployment, and best practices. ([github.com](https://github.com/kautham7473/Ecommerce))

---

## 📦 Project Structure

'''
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
'''  ([github.com](https://github.com/kautham7473/Ecommerce))

---

## 🚀 Features

- **Service Discovery** via Eureka to register and locate microservices at runtime. ([github.com](https://github.com/kautham7473/Ecommerce))
- **Centralized Configuration** using Spring Cloud Config for environment‑agnostic settings. ([github.com](https://github.com/kautham7473/Ecommerce))
- **User Management** with registration, login, and JWT‑based authentication. ([github.com](https://github.com/kautham7473/Ecommerce))
- **Product Service** to add, view, update, and delete product listings. ([github.com](https://github.com/kautham7473/Ecommerce))
- **Cart Service** to add/remove items and retrieve user carts. ([github.com](https://github.com/kautham7473/Ecommerce))
- **Frontend SPA** built with React, TailwindCSS, and Vite for seamless UX. ([github.com](https://github.com/kautham7473/Ecommerce))
- **Docker Compose** setup for local multi‑container orchestration. ([github.com](https://github.com/kautham7473/Ecommerce))

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

- Java 21 installed locally ([github.com](https://github.com/kautham7473/Ecommerce))
- Docker & Docker Compose ([github.com](https://github.com/kautham7473/Ecommerce))
- Node.js & npm ([github.com](https://github.com/kautham7473/Ecommerce))

---

## 🏃‍♂️ Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/kautham7473/Ecommerce.git
   cd Ecommerce
   ```  ([github.com](https://github.com/kautham7473/Ecommerce))

2. **Start all services** via Docker Compose
   ```bash
   docker-compose up --build
   ```  ([github.com](https://github.com/kautham7473/Ecommerce))

3. **Access the apps**
   - Frontend: `http://localhost:5173` ([github.com](https://github.com/kautham7473/Ecommerce))
   - Eureka Dashboard: `http://localhost:8761` ([github.com](https://github.com/kautham7473/Ecommerce))
   - User Service API: `http://localhost:8081` ([github.com](https://github.com/kautham7473/Ecommerce))
   - Product Service API: `http://localhost:8082` ([github.com](https://github.com/kautham7473/Ecommerce))
   - Cart Service API: `http://localhost:8083` ([github.com](https://github.com/kautham7473/Ecommerce))

---

## 🌟 Usage

1. **Register** a new user via User Service endpoint. ([github.com](https://github.com/kautham7473/Ecommerce))
2. **Login** to receive JWT token. ([github.com](https://github.com/kautham7473/Ecommerce))
3. **Browse** products in the React UI. ([github.com](https://github.com/kautham7473/Ecommerce))
4. **Add to Cart** using the Add to Cart button. ([github.com](https://github.com/kautham7473/Ecommerce))
5. **View Cart** and **Checkout** via API or UI (Order Service coming soon). ([github.com](https://github.com/kautham7473/Ecommerce))

---

## 📝 Environment Variables

Create a `.env` file in each service directory (`*-service/`) with:
```
SPRING_PROFILES_ACTIVE=development
SPRING_DATASOURCE_URL=jdbc:mariadb://<host>:<port>/<db>
SPRING_DATASOURCE_USERNAME=<user>
SPRING_DATASOURCE_PASSWORD=<pass>
JWT_SECRET=<your_jwt_secret>
```  ([github.com](https://github.com/kautham7473/Ecommerce))

---

## 🛡️ Security

- All `/api/**` endpoints require `Authorization: Bearer <token>`. ([github.com](https://github.com/kautham7473/Ecommerce))
- Role‑based access enforced in services. ([github.com](https://github.com/kautham7473/Ecommerce))

---

## 📦 CI/CD

- GitHub Actions automate build, test, and Docker image creation. ([github.com](https://github.com/kautham7473/Ecommerce))
- Deployments triggered on merge to `develop` branch. ([github.com](https://github.com/kautham7473/Ecommerce))

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo, create a feature branch, and submit a pull request. ([github.com](https://github.com/kautham7473/Ecommerce))

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details. ([github.com](https://github.com/kautham7473/Ecommerce))

