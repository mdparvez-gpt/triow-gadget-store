'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { ShoppingCart } from 'lucide-react'

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*')
      if (error) {
        console.error('Error fetching products:', error)
      } else {
        setProducts(data || [])
      }
      setLoading(false)
    }
    fetchProducts()
  }, [])

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading products...</div>
  }

  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Featured Gadgets</h2>
        <p className="text-gray-500">No products found in database yet. Stay tuned!</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Gadgets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <img src={product.image_url || '/placeholder.png'} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
            <p className="text-blue-600 font-bold mt-1">৳{product.price}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2">
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
