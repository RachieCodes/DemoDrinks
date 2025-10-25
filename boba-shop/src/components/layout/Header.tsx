'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-light text-white tracking-wide">
              Brew&Bloom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-white/90 hover:text-white transition-colors font-light tracking-wide text-lg">
              Home
            </Link>
            <Link href="/menu" className="text-white/90 hover:text-white transition-colors font-light tracking-wide text-lg">
              Shop
            </Link>
            <Link href="/about" className="text-white/90 hover:text-white transition-colors font-light tracking-wide text-lg">
              About us
            </Link>
            <Link href="/contact" className="text-white/90 hover:text-white transition-colors font-light tracking-wide text-lg">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <Link href="/account" className="text-white/90 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="relative text-white/90 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white/90 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 bg-black/80 backdrop-blur-md rounded-2xl mt-2 border border-white/10">
            <nav className="flex flex-col space-y-1">
              <Link 
                href="/" 
                className="text-white/90 hover:text-white transition-colors py-3 px-6 font-light text-lg tracking-wide hover:bg-white/5 rounded-xl mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="text-white/90 hover:text-white transition-colors py-3 px-6 font-light text-lg tracking-wide hover:bg-white/5 rounded-xl mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/about" 
                className="text-white/90 hover:text-white transition-colors py-3 px-6 font-light text-lg tracking-wide hover:bg-white/5 rounded-xl mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link 
                href="/contact" 
                className="text-white/90 hover:text-white transition-colors py-3 px-6 font-light text-lg tracking-wide hover:bg-white/5 rounded-xl mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}