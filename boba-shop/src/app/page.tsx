'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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
        {/* Video overlay - moved above fallback */}
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
        <div className="absolute inset-0 bg-black/20" style={{ zIndex: 3 }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10" style={{ zIndex: 20 }}>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Brew&Bloom
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Premium bubble tea, artisan coffee, and fresh beverages crafted with the finest ingredients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Order Now
              </Link>
              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Brew&Bloom?</h2>
              <p className="text-xl text-gray-200">Experience the perfect blend of tradition and innovation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧋</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Premium Ingredients</h3>
                <p className="text-gray-300">Only the finest teas, coffee beans, and fresh ingredients in every cup</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
                <p className="text-gray-300">Quick preparation and delivery to satisfy your cravings instantly</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Made with Love</h3>
                <p className="text-gray-300">Every drink is carefully crafted by our passionate baristas</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
