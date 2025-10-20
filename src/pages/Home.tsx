import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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

    return () => {
      document.removeEventListener('touchstart', handleVideoPlay);
      document.removeEventListener('click', handleVideoPlay);
    };
  }, []);

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
        >
          <source src="/desk_01nuovo.mp4" type="video/mp4" />
        </video>
        <video 
          preload="metadata"
          ref={mobileVideoRef}
          className="mobile-video" 
          autoPlay
          muted 
          loop 
          playsInline 
          webkit-playsinline="true"
          poster="/tel_01nuovo.png"
        >
          <source src="/tel_01nuovo.h264" type='video/mp4; codecs="hvc1"' />
          <source src="/tel_01nuovo_compressed.mp4" type="video/mp4" />
          <source src="/tel_01nuovo.mp4" type="video/mp4" />
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
