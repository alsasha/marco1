import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="video-background">
        <video className="desktop-video" autoPlay muted loop playsInline>
          <source src="/desk_01nuovo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="mobile-video" autoPlay muted loop playsInline>
          <source src="/tel_01nuovo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
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
