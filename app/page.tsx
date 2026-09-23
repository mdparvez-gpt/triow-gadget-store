import ProductList from '@/components/ProductList'
import { ShoppingCart } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Announcement Bar */}
      <div className="bg-gray-900 text-white text-xs sm:text-sm py-2 px-4 text-center">
        🔥 Grand Opening Sale! Up to 40% OFF on Smart Gadgets. Free Delivery on Orders over ৳2000!
      </div>

      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-blue-600">TRIOW GADGETS</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-xl">
            <span className="bg-blue-600/50 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              New Tech Collection
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-4 leading-tight">
              Experience The Future of Gadgets
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              Discover high-performance smartwatches, wireless earbuds, and premium accessories with official warranty.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition flex items-center gap-2">
              Shop Now &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Product List from Supabase */}
      <ProductList />

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Triow Gadget Store. All rights reserved.
      </footer>
    </div>
  )
}
