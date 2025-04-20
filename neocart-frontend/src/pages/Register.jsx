import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import loginBanner from '/src/assets/Neocart_cropped.png';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    password: '',
    role: 'CUSTOMER',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const usernameQuery = useQuery({
    queryKey: ['username', formData.username],
    queryFn: async () => {
      if (!formData.username) return null;
      const response = await fetch(
        `${import.meta.env.VITE_USER_SERVICE_BASE_URL}/auth/check-username?username=${formData.username}`
      );
      if (!response.ok) throw new Error('Failed to check username');
      return response.json();
    },
    enabled: !!formData.username,
    retry: false,
  });

  const registerMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_USER_SERVICE_BASE_URL}/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
      return response.json();
    },
    onSuccess: (result) => {
      console.log('User registered successfully:', result);
      navigate('/');
    },
    onError: (error) => {
      console.error('Error during registration:', error);
      alert(error.message || 'Something went wrong. Please try again.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameQuery.data && !usernameQuery.data.available) return;
    registerMutation.mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md flex flex-col items-center">
        {/* Image */}
        <img
          src={loginBanner}
          alt="Register banner"
          className="w-80 object-cover mb-6"
        />

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Create Account</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {usernameQuery.data && !usernameQuery.data.available && (
              <p className="text-sm text-red-500 mt-1">Username is already taken</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phoneNo">
              Phone Number
            </label>
            <input
              name="phoneNo"
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="role">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="CUSTOMER">Customer</option>
              <option value="SELLER">Seller</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={registerMutation.isPending || (usernameQuery.data && !usernameQuery.data.available)}
            className="w-full bg-rosepink text-white py-2 rounded-md hover:bg-rosehover transition duration-200 font-semibold disabled:opacity-50"
          >
            {registerMutation.isPending ? 'Registering...' : 'Register'}
          </button>

          <p className="mt-4 text-center text-sm text-gray-600 font-medium">
            Already have an account?{' '}
            <Link to="/" className="text-rosepink hover:underline font-semibold">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;