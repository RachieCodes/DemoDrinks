import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BB</span>
              </div>
              <span className="text-xl font-bold">Brew&Bloom</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium tea, coffee, and boba drinks made with love and the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/menu" className="text-gray-400 hover:text-white block transition-colors">
                Menu
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white block transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white block transition-colors">
                Contact
              </Link>
              <Link href="/careers" className="text-gray-400 hover:text-white block transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <div className="space-y-2 text-sm">
              <Link href="/faq" className="text-gray-400 hover:text-white block transition-colors">
                FAQ
              </Link>
              <Link href="/orders" className="text-gray-400 hover:text-white block transition-colors">
                Track Order
              </Link>
              <Link href="/returns" className="text-gray-400 hover:text-white block transition-colors">
                Returns
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-white block transition-colors">
                Support
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>123 Boba Street, Tea City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>(555) 123-BOBA</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@brewandbloom.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Brew&Bloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}