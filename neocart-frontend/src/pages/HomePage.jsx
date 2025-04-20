import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import loginBanner from '/src/assets/Neocart_cropped.png';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry');
    navigate('/');
  };

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${import.meta.env.VITE_PRODUCT_SERVICE_BASE_URL}/api/customer/products`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 text">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={loginBanner}
            alt="Company Logo"
            className="w-40 object-cover"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Logout
        </button>
      </header>

      {/* Main content */}
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Home Page!</h1>
        <p className="text-gray-600 mb-6">Explore products, manage your cart, and more.</p>

        {isLoading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="text-red-500">{error.message}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 flex flex-col items-center"
              >
                {/* Image container */}
                <div className="w-full h-48 flex items-center justify-center mb-4 overflow-hidden rounded-md bg-gray-100">
                  <img
                    src={product.imageUrl || 'https://via.placeholder.com/150'}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Product details */}
                <h3 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2 text-center">{product.description}</p>
                <p className="text-rosepink font-bold text-center">₹{product.price}</p>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;