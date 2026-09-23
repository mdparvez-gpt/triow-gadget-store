import Link from 'next/link';
import { ShoppingCart, Search, ShieldCheck, Truck, Headphones, Zap, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 text-center font-medium">
        🔥 Grand Opening Sale! Up to 40% OFF on Smart Gadgets. Free Delivery on Orders over ৳2000!
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-black text-blue-600 tracking-tight">
            TRIOW <span className="text-gray-900 font-light">GADGETS</span>
          </Link>
          
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search for smartwatches, earbuds, chargers..." 
                className="w-full bg-gray-100 border border-gray-200 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </Link>
            <Link href="/login" className="hidden sm:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="max-w-lg mb-6 md:mb-0">
            <span className="bg-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30">
              NEW TECH COLLECTION
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4 leading-tight">
              Experience The Future of Gadgets
            </h1>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              Discover high-performance smartwatches, wireless earbuds, and premium accessories with official warranty.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition flex items-center gap-2">
              Shop Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-72 h-72 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/25 shadow-inner">
              <Zap className="w-24 h-24 text-blue-400 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-blue-600" />
            <div>
              <h4 className="font-bold text-sm">Fast Delivery</h4>
              <p className="text-xs text-gray-500">All over Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
            <div>
              <h4 className="font-bold text-sm">100% Authentic</h4>
              <p className="text-xs text-gray-500">Genuine products</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-blue-600" />
            <div>
              <h4 className="font-bold text-sm">Secure Payment</h4>
              <p className="text-xs text-gray-500">COD & Online Pay</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Headphones className="w-8 h-8 text-blue-600" />
            <div>
              <h4 className="font-bold text-sm">24/7 Support</h4>
              <p className="text-xs text-gray-500">Dedicated service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-8 text-center text-xs text-gray-500">
        <p>&copy; 2026 Triow Gadget Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
