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
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video overlay*/}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="w-full h-full object-cover absolute inset-0"
          style={{ zIndex: 2, opacity: 1 }}
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
        
        {/* Fallback gradient background - lower z-index */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900" style={{ zIndex: 1 }}></div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" style={{ zIndex: 3 }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10" style={{ zIndex: 20 }}>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center text-white max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/90 mb-8">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>Premium Quality Since 2024</span>
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block mb-2 animate-pulse">Welcome to</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                Brew&Bloom
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl mb-12 text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Where <span className="text-purple-300 font-semibold">premium bubble tea</span> meets 
              <span className="text-pink-300 font-semibold"> artisan coffee</span> in perfect harmony
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/menu"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-purple-500/25"
              >
                <span className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Order Now
                </span>
              </Link>
              <Link
                href="/about"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5 group-hover:text-pink-300 transition-colors" />
                  Our Story
                </span>
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Why Choose 
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Brew&Bloom?
                </span>
              </h2>
              <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
                Experience the perfect blend of tradition and innovation in every sip
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
              <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Premium Ingredients</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Only the finest organic teas, single-origin coffee beans, and fresh natural ingredients in every handcrafted cup
                </p>
              </div>
              
              <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Quick preparation and delivery to satisfy your cravings instantly, without compromising on quality
                </p>
              </div>
              
              <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Made with Love</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Every drink is carefully crafted by our passionate baristas who put their heart into every creation
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">50K+</div>
                <div className="text-gray-300 text-lg">Happy Customers</div>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">100+</div>
                <div className="text-gray-300 text-lg">Unique Flavors</div>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Fresh Brewing</div>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">5★</div>
                <div className="text-gray-300 text-lg">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Items Preview */}
        <section className="py-24 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Signature 
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Favorites</span>
              </h2>
              <p className="text-xl text-gray-200">Discover our most loved creations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-6xl">
                  🧋
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Classic Milk Tea</h3>
                  <p className="text-gray-300 mb-4">Rich black tea with creamy milk and chewy tapioca pearls</p>
                  <div className="text-purple-400 font-bold text-lg">$5.99</div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center text-6xl">
                  ☕
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Artisan Latte</h3>
                  <p className="text-gray-300 mb-4">Single-origin espresso with velvety steamed milk art</p>
                  <div className="text-pink-400 font-bold text-lg">$4.99</div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center text-6xl">
                  🍓
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Fresh Fruit Tea</h3>
                  <p className="text-gray-300 mb-4">Refreshing green tea with seasonal fresh fruits</p>
                  <div className="text-orange-400 font-bold text-lg">$6.49</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
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
