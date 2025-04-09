// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import './index.css'
import ProtectedRoute from './components/ProtectedRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Protected Routes */}
    <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
    <Route path="/products" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
    <Route path="/product/:id" element={<ProtectedRoute><Product /></ProtectedRoute>} />
    <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />

    {/* Not Found */}
    <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)
