'use client';

export default function VideoTest() {
  return (
    <div className="min-h-screen relative bg-red-500">
      <h1 className="text-white text-4xl p-8 relative z-20">Video Test Page</h1>
      
      {/* Simple video test */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        controls
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onError={(e) => console.log('Video error:', e)}
      >
        <source src="/videos/coffee.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 bg-black/30" style={{ zIndex: 5 }}></div>
      
      <div className="relative z-10 p-8 text-white">
        <p>If you see this text and the video above, the video is working!</p>
        <p>Check the browser console for video loading messages.</p>
      </div>
    </div>
  );
}