import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  
  // Video arrays for cycling
  const desktopVideos = [
    '/desk_01nuovo.mp4',
    '/desk_02nuovo.mp4', 
    '/desk_03nuovo.mp4'
  ];
  
  const mobileVideos = [
    '/tel_01nuovo.mp4',
    '/tel_02nuovo.mp4',
    '/tel_03nuovo.mp4'
  ];
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    // Get visit count from localStorage
    const getVisitCount = () => {
      const visitCount = localStorage.getItem('homePageVisits');
      return visitCount ? parseInt(visitCount, 10) : 0;
    };

    // Check orientation
    const checkOrientation = () => {
      // Add a small delay to ensure orientation change is fully processed
      setTimeout(() => {
        const isLandscapeMode = window.innerWidth > window.innerHeight;
        setIsLandscape(isLandscapeMode);
      }, 100);
    };

    // Increment visit count and get current video index
    const visitCount = getVisitCount();
    const videoIndex = visitCount % desktopVideos.length; // Cycle through videos
    setCurrentVideoIndex(videoIndex);
    
    // Check initial orientation immediately
    const initialIsLandscape = window.innerWidth > window.innerHeight;
    setIsLandscape(initialIsLandscape);
    
    // Increment and save visit count
    localStorage.setItem('homePageVisits', (visitCount + 1).toString());
    
    const handleVideoPlay = () => {
      if (desktopVideoRef.current) {
        desktopVideoRef.current.play().catch(console.log);
      }
      if (mobileVideoRef.current) {
        mobileVideoRef.current.play().catch(console.log);
      }
    };

    // Try to play videos on load
    handleVideoPlay();

    // Add event listeners for user interaction
    document.addEventListener('touchstart', handleVideoPlay, { once: true });
    document.addEventListener('click', handleVideoPlay, { once: true });
    
    // Add orientation change listener
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      document.removeEventListener('touchstart', handleVideoPlay);
      document.removeEventListener('click', handleVideoPlay);
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, [desktopVideos.length]);

  // Separate effect to handle orientation changes and force video reload
  useEffect(() => {
    if (mobileVideoRef.current) {
      mobileVideoRef.current.load(); // Force reload the video with new source
      mobileVideoRef.current.play().catch(console.log);
    }
  }, [isLandscape, currentVideoIndex]);

  return (
    <div className="home">
      <div className="video-background">
        <video 
          ref={desktopVideoRef}
          className="desktop-video" 
          autoPlay
          muted 
          loop 
          playsInline 
          preload="auto"
          poster="/tel_01nuovo.png"
          controls={false}
        >
          <source src={desktopVideos[currentVideoIndex]} type="video/mp4" />
        </video>
        <video 
          key={`mobile-${currentVideoIndex}-${isLandscape ? 'landscape' : 'portrait'}`}
          preload="metadata"
          ref={mobileVideoRef}
          className="mobile-video" 
          autoPlay
          muted 
          loop 
          playsInline 
          webkit-playsinline="true"
          poster="/tel_01nuovo.png"
          controls={false}
        >
          <source src={isLandscape ? desktopVideos[currentVideoIndex] : mobileVideos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="content">
        <h1 className="main-title">brainoo</h1>
        <div className="subtitle-container">
          <h2 className="subtitle">exponential</h2>
          <h2 className="subtitle">prompting</h2>
          <h2 className="subtitle">methodology.</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
