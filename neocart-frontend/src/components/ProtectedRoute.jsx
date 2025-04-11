import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  const expiry = localStorage.getItem('tokenExpiry')

  const isTokenExpired = expiry && Date.now() > parseInt(expiry)

  if (!token || isTokenExpired) {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiry')
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
