'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Star, Coffee, Clock, Heart, Award } from 'lucide-react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);

    // Ensure video plays when component mounts
    if (videoRef.current) {
      const video = videoRef.current;
      
      console.log('Video element created, attempting to load...');
      console.log('Video src:', video.src);
      
      // Try to load and play the video
      video.load();
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('Video is playing successfully!');
        }).catch(error => {
          console.log('Autoplay prevented or failed:', error);
          // Try to show video even if autoplay fails
          video.style.opacity = '1';
        });
      }
    }
  }, []);

  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <div className="min-h-screen relative">
        {/* Video Background - Only for hero section */}
        <div className="absolute inset-0 z-0">
          {/* Video overlay - better positioning */}
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              zIndex: 1, 
              opacity: 1,
              objectPosition: 'center center'
            }}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => {
              console.log('Video can play');
              if (videoRef.current) {
                videoRef.current.style.opacity = '1';
              }
            }}
            onLoadedData={() => console.log('Video data loaded')}
            onError={(e) => {
              console.log('Video error:', e);
              console.log('Video error details:', e.target);
              if (videoRef.current) {
                console.log('Video src:', videoRef.current.currentSrc);
                console.log('Video ready state:', videoRef.current.readyState);
                console.log('Video network state:', videoRef.current.networkState);
              }
            }}
          >
            <source src="/videos/coffee.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Fallback gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900" style={{ zIndex: 0 }}></div>
          
          {/* Elegant overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" style={{ zIndex: 2 }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10" style={{ zIndex: 10 }}>
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 relative">
            <div className="max-w-5xl mx-auto text-center">
              
              {/* Main Content */}
              <div className={`text-white space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light leading-none tracking-tight">
                    Brew&Bloom
                  </h1>
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light leading-relaxed tracking-wide text-white/90">
                    Where Premium Meets Perfection
                  </h2>
                </div>
                
                {/* Description */}
                <p className="text-xl lg:text-2xl font-light text-white/80 leading-relaxed max-w-3xl mx-auto">
                  Experience the finest bubble tea and artisan coffee, crafted with passion and premium ingredients. 
                  Every sip tells a story of quality and tradition.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                  <Link
                    href="/menu"
                    className="group bg-white text-black px-10 py-4 rounded-full text-lg font-medium tracking-wide hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      <Coffee className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Order Now
                    </span>
                  </Link>
                  <Link
                    href="/about"
                    className="group border-2 border-white/40 hover:border-white/60 text-white px-10 py-4 rounded-full text-lg font-light tracking-wide hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      <Heart className="w-5 h-5 group-hover:text-pink-300 transition-colors" />
                      Our Story
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-white/60" />
            </div>
          </section>
        </div>
      </div>

      {/* Content Sections */}
      <div>

        {/* Features Section - Minimal & Elegant */}
        <section className="py-32 bg-gradient-to-b from-amber-900/20 to-orange-900/30 relative">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide">
                Why Choose Brew&Bloom
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"></div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Premium Quality</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Finest organic ingredients sourced globally for exceptional taste
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Artisan Craft</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Every drink carefully handcrafted by skilled baristas
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Made with Love</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Passion and dedication in every cup we serve
                </p>
              </div>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-32">
              <div>
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">50K+</div>
                <div className="text-white/60 font-light tracking-wide text-sm uppercase">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">100+</div>
                <div className="text-white/60 font-light tracking-wide text-sm uppercase">Unique Flavors</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">24/7</div>
                <div className="text-white/60 font-light tracking-wide text-sm uppercase">Fresh Brewing</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">5★</div>
                <div className="text-white/60 font-light tracking-wide text-sm uppercase">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Collection - Minimal */}
        <section className="py-32 bg-gradient-to-b from-orange-900/30 to-red-900/20">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide">
                Signature Collection
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-6"></div>
              <p className="text-white/70 font-light text-lg">Discover our most loved creations</p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="group text-center">
                <div className="h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl flex items-center justify-center text-7xl mb-6 group-hover:scale-105 transition-transform duration-300 border border-white/10">
                  🧋
                </div>
                <h3 className="text-xl font-light text-white mb-2 tracking-wide">Classic Milk Tea</h3>
                <p className="text-white/60 font-light mb-4 leading-relaxed">Rich black tea with creamy milk and tapioca pearls</p>
                <div className="text-amber-400 font-light text-lg">$5.99</div>
              </div>

              <div className="group text-center">
                <div className="h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl flex items-center justify-center text-7xl mb-6 group-hover:scale-105 transition-transform duration-300 border border-white/10">
                  ☕
                </div>
                <h3 className="text-xl font-light text-white mb-2 tracking-wide">Artisan Latte</h3>
                <p className="text-white/60 font-light mb-4 leading-relaxed">Single-origin espresso with velvety steamed milk</p>
                <div className="text-amber-400 font-light text-lg">$4.99</div>
              </div>

              <div className="group text-center">
                <div className="h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl flex items-center justify-center text-7xl mb-6 group-hover:scale-105 transition-transform duration-300 border border-white/10">
                  🍓
                </div>
                <h3 className="text-xl font-light text-white mb-2 tracking-wide">Fresh Fruit Tea</h3>
                <p className="text-white/60 font-light mb-4 leading-relaxed">Refreshing green tea with seasonal fruits</p>
                <div className="text-amber-400 font-light text-lg">$6.49</div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 border border-white/40 hover:border-white/60 text-white px-10 py-4 rounded-full text-lg font-light tracking-wide hover:bg-white/5 transition-all duration-300"
              >
                <Coffee className="w-5 h-5" />
                View Full Menu
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
