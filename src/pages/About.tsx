import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">About</h1>
        <div className="about-content">
          <p className="about-text">
            Welcome to brainoo, where we explore the exponential prompting methodology 
            to unlock the full potential of artificial intelligence and human creativity.
          </p>
          <p className="about-text">
            Our innovative approach combines cutting-edge research with practical applications, 
            creating new pathways for human-AI collaboration and understanding.
          </p>
          <p className="about-text">
            Join us on this journey of discovery and transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
