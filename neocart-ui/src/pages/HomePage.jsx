import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiry')
    navigate('/')
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token')
  
      try {
        const response = await fetch('http://localhost:8081/api/customer/products', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })        
  
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
  
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError(err.message)
        setLoading(false)
      }
    }
  
    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/Neocart_cropped.png"
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

        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
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
  )
}

export default HomePage
