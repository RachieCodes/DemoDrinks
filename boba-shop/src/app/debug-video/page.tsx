'use client';

import { useEffect, useRef, useState } from 'react';

export default function DebugVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoInfo, setVideoInfo] = useState<any>({});
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    console.log(message);
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      addLog('Video element created');
      addLog(`Video src: ${video.src}`);
      
      const updateVideoInfo = () => {
        setVideoInfo({
          src: video.src,
          currentSrc: video.currentSrc,
          readyState: video.readyState,
          networkState: video.networkState,
          duration: video.duration,
          videoWidth: video.videoWidth,
          videoHeight: video.videoHeight,
          currentTime: video.currentTime,
          paused: video.paused,
          ended: video.ended,
          muted: video.muted,
          volume: video.volume
        });
      };

      video.addEventListener('loadstart', () => {
        addLog('loadstart event fired');
        updateVideoInfo();
      });

      video.addEventListener('loadedmetadata', () => {
        addLog('loadedmetadata event fired');
        updateVideoInfo();
      });

      video.addEventListener('loadeddata', () => {
        addLog('loadeddata event fired');
        updateVideoInfo();
      });

      video.addEventListener('canplay', () => {
        addLog('canplay event fired');
        updateVideoInfo();
      });

      video.addEventListener('canplaythrough', () => {
        addLog('canplaythrough event fired');
        updateVideoInfo();
      });

      video.addEventListener('error', (e) => {
        addLog(`error event fired: ${e.type}`);
        if (video.error) {
          addLog(`Error code: ${video.error.code}`);
          addLog(`Error message: ${video.error.message}`);
        }
        updateVideoInfo();
      });

      video.addEventListener('play', () => {
        addLog('play event fired');
        updateVideoInfo();
      });

      video.addEventListener('pause', () => {
        addLog('pause event fired');
        updateVideoInfo();
      });

      // Try to load the video
      video.load();
      updateVideoInfo();
    }
  }, []);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        addLog('Manual play successful');
      }).catch(error => {
        addLog(`Manual play failed: ${error.message}`);
      });
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      addLog('Video paused manually');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Video Debug Page</h1>
        
        {/* Video Player */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Video Player</h2>
          <div className="bg-black rounded-lg overflow-hidden">
            <video 
              ref={videoRef}
              width="100%"
              height="400"
              controls
              muted
              preload="auto"
              className="w-full"
            >
              <source src="/videos/coffee.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-4 flex gap-4">
            <button 
              onClick={playVideo}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Play
            </button>
            <button 
              onClick={pauseVideo}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Pause
            </button>
          </div>
        </div>

        {/* Video Information */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Video Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(videoInfo).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-600">{key}:</span>
                <span className="text-gray-800">{String(value)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Console Logs */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Console Logs</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-h-96 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="mb-1">{log}</div>
            ))}
            {logs.length === 0 && (
              <div className="text-gray-500">No logs yet...</div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <a 
            href="/" 
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}