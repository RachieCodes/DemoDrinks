'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-medium text-white">
              Brew&Bloom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-white/80 transition-colors font-medium">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-white/80 transition-colors font-medium">
              Shop
            </Link>
            <Link href="/about" className="text-white hover:text-white/80 transition-colors font-medium">
              About us
            </Link>
            <Link href="/contact" className="text-white hover:text-white/80 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <Link href="/account" className="text-white hover:text-white/80 transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="relative text-white hover:text-white/80 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-black/80 rounded-lg mt-2">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-white hover:text-white/80 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="text-white hover:text-white/80 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-white/80 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-white/80 transition-colors py-2 px-4 font-medium"
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