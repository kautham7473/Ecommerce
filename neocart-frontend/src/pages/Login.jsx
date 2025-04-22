import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { setTokenWithExpiry } from '../utils/auth';
import loginBanner from '/src/assets/Neocart_cropped.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const loginMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_USER_SERVICE_BASE_URL}/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Invalid credentials');
      }
      return response.json();
    },
    onSuccess: (data) => {
      setTokenWithExpiry(data.token, 60);
      navigate('/home');
    },
    onError: (error) => {
      console.error('Login error:', error);
      alert(error.message || 'Something went wrong. Please try again.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md flex flex-col items-center">
        {/* Image */}
        <img
          src={loginBanner}
          alt="Login banner"
          className="w-80 object-cover mb-6"
        />

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Welcome Back</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full bg-rosepink text-white py-2 rounded-md hover:bg-rosehover transition duration-200 font-semibold disabled:opacity-50"
          >
            {loginMutation.isPending ? 'Logging in...' : 'Login'}
          </button>

          <p className="mt-4 text-center text-sm text-gray-600 font-medium">
            Don’t have an account?{' '}
            <Link to="/register" className="text-rosepink hover:underline font-semibold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;