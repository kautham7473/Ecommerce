// pages/Register.jsx
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    password: '',
    role: 'CUSTOMER', // Default role
  })

  const [usernameAvailable, setUsernameAvailable] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const checkUsernameAvailability = async () => {
    if (!formData.username) return false

    try {
      const response = await fetch(`http://localhost:8080/auth/check-username?username=${formData.username}`)
      const data = await response.json()
      setUsernameAvailable(data.available)
      return data.available
    } catch (err) {
      console.error('Error checking username:', err)
      setUsernameAvailable(null)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isAvailable = await checkUsernameAvailability()
    if (!isAvailable) return

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("Registration failed:", errorData)
        return
      }

      const result = await response.json()
      console.log("User registered successfully:", result)
      navigate('/') // Redirect to login page
    } catch (error) {
      console.error("Error during registration:", error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <img
          src="src/assets/Neocart_cropped.png"
          alt="Login banner"
          className="w-80 object-cover mb-6"
        />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} onBlur={checkUsernameAvailability} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
          {usernameAvailable === false && (
            <p className="text-sm text-red-500 mt-1">Username is already taken</p>
          )}

          <input name="firstName" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
          <input name="lastName" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
          <input name="phoneNo" type="text" placeholder="Phone Number" value={formData.phoneNo} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
          <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />

          <select name="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none">
            <option value="CUSTOMER">Customer</option>
            <option value="SELLER">Seller</option>
          </select>

          <button type="submit" className="w-full bg-[#e63b70] hover:bg-[#d12d5f] text-white font-semibold py-2 rounded-lg">
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/" className="text-[#e63b70] font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
