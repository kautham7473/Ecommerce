import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import loginBanner from '/src/assets/Neocart_cropped.png'
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


const ProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiry')
    navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    const fetchProduct = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_PRODUCT_SERVICE_BASE_URL}/api/customer/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (!response.ok) throw new Error('Failed to fetch product')
        const data = await response.json()
        setProduct(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    const fetchAllProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_PRODUCT_SERVICE_BASE_URL}/api/customer/products`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        const data = await response.json()
        setAllProducts(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchProduct()
    fetchAllProducts()
  }, [id])

  if (loading) return <p className="p-4">Loading...</p>
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>
  if (!product) return <p className="p-4">Product not found</p>

  const similarProducts = allProducts.filter(p => p.id !== product.id)
  const discountedPrice = product.price - (product.price * product.discountPercentage / 100)

  const addToCart = async (userId, productId, quantity) => {
    try {
      const response = await axios.post('http://localhost:8082/api/cart', {
        userId,
        productId,
        quantity
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
  
      console.log('Cart Updated:', response.data);
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add product to cart.');
    }
  };  

  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const userId = decoded.userId; // Or decoded.userId or decoded.id — check your payload
  
    addToCart(userId, product.id, 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-lightrose shadow-md py-4 px-6 flex items-center justify-between">
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
      {/* Product Detail Card */}
      <div className="flex flex-col md:flex-row gap-8 bg-white shadow rounded-lg overflow-hidden">
        {/* Left: Image */}
        <div className="md:w-1/2 relative bg-gray-50 flex items-center justify-center">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 bg-rosepink text-white px-3 py-1 rounded-md hover:bg-rosehover"
          >
            ← Back
          </button>
          <img
            src={product.imageUrl || 'https://via.placeholder.com/300'}
            alt={product.name}
            className="max-h-[500px] object-contain p-4"
          />
        </div>

        {/* Right: Info */}
        <div className="md:w-1/2 p-6 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-2xl text-rose-600 font-bold">₹{discountedPrice.toFixed(2)}</span>
            <span className="line-through text-gray-400">₹{product.price.toFixed(2)}</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
              {product.discountPercentage}% OFF
            </span>
          </div>
          <p className="text-sm text-gray-600">Stock: {product.stock > 0 ? `${product.stock} left` : 'Out of stock'}</p>
          <p className="text-sm text-gray-600 mb-6">Average Rating: ⭐ {product.averageRating}</p>
          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-rosepink text-white px-4 py-2 rounded-md shadow hover:from-purple-600 hover:to-rosehover transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-700 text-white px-4 py-2 rounded-md shadow hover:from-blue-600 hover:to-indigo-800 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Similar Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similarProducts.map(similar => (
            <div
              key={similar.id}
              onClick={() => navigate(`/product/${similar.id}`)}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer transition"
            >
              <img
                src={similar.imageUrl || 'https://via.placeholder.com/150'}
                alt={similar.name}
                className="h-40 w-full object-contain mb-3"
              />
              <h4 className="text-lg font-semibold">{similar.name}</h4>
              <p className="text-sm text-gray-600">{similar.description}</p>
              <p className="text-rose-600 font-bold">₹{similar.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
