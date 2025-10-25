import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Coffee } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/90 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-light tracking-wide">Brew&Bloom</span>
            </div>
            <p className="text-white/70 text-lg font-light leading-relaxed max-w-md">
              Where premium bubble tea meets artisan coffee in perfect harmony. 
              Every sip crafted with passion and the finest ingredients.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-amber-400 transition-colors p-2 rounded-full hover:bg-white/5">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-amber-400 transition-colors p-2 rounded-full hover:bg-white/5">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-amber-400 transition-colors p-2 rounded-full hover:bg-white/5">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-light mb-6 tracking-wide">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/menu" className="text-white/70 hover:text-white block transition-colors font-light">
                Menu
              </Link>
              <Link href="/about" className="text-white/70 hover:text-white block transition-colors font-light">
                About Us
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-white block transition-colors font-light">
                Contact
              </Link>
              <Link href="/careers" className="text-white/70 hover:text-white block transition-colors font-light">
                Careers
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-light mb-6 tracking-wide">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-white/70 group">
                <MapPin className="w-5 h-5 mt-1 group-hover:text-amber-400 transition-colors" />
                <span className="font-light leading-relaxed">123 Boba Street<br />Tea City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70 group">
                <Phone className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
                <span className="font-light">(555) 123-BOBA</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70 group">
                <Mail className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
                <span className="font-light">hello@brewandbloom.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 font-light text-sm">
              &copy; 2025 Brew&Bloom. Crafted with passion.
            </p>
            <div className="flex items-center space-x-2 text-white/60">
              <Coffee className="w-4 h-4" />
              <span className="text-sm font-light">Premium Quality Since 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}