import React from 'react';
import './Press.css';

const Press: React.FC = () => {
  return (
    <div className="press-page">
      <div className="press-container">
        <div className="press-header">
          <h1 className="press-title">Press</h1>
          <p className="press-subtitle">Media coverage and press releases</p>
        </div>
        
        <div className="press-content">
          <div className="press-section">
            <h2 className="section-title">Press Releases</h2>
            <div className="press-items">
              <div className="press-item">
                <div className="press-date">December 15, 2024</div>
                <h3 className="press-item-title">Brainoo Launches Revolutionary Exponential Prompting Methodology</h3>
                <p className="press-item-excerpt">
                  Brainoo announces the launch of its groundbreaking exponential prompting methodology, 
                  revolutionizing how AI and human creativity intersect in the digital age.
                </p>
                <a href="#" className="press-link">Read More →</a>
              </div>
              
              <div className="press-item">
                <div className="press-date">November 28, 2024</div>
                <h3 className="press-item-title">New Research Partnership with Leading Universities</h3>
                <p className="press-item-excerpt">
                  Brainoo establishes strategic partnerships with top-tier universities to advance 
                  research in artificial intelligence and creative methodologies.
                </p>
                <a href="#" className="press-link">Read More →</a>
              </div>
              
              <div className="press-item">
                <div className="press-date">October 10, 2024</div>
                <h3 className="press-item-title">Brainoo Receives Innovation Award</h3>
                <p className="press-item-excerpt">
                  The company is honored with the prestigious Innovation in AI Award for its 
                  contributions to advancing human-AI collaboration.
                </p>
                <a href="#" className="press-link">Read More →</a>
              </div>
            </div>
          </div>
          
          <div className="press-section">
            <h2 className="section-title">Media Coverage</h2>
            <div className="media-items">
              <div className="media-item">
                <div className="media-source">TechCrunch</div>
                <h3 className="media-title">"Brainoo's Exponential Prompting Could Change How We Interact with AI"</h3>
                <div className="media-date">December 12, 2024</div>
              </div>
              
              <div className="media-item">
                <div className="media-source">Wired</div>
                <h3 className="media-title">"The Future of Creative AI: Inside Brainoo's Methodology"</h3>
                <div className="media-date">November 30, 2024</div>
              </div>
              
              <div className="media-item">
                <div className="media-source">MIT Technology Review</div>
                <h3 className="media-title">"How Exponential Prompting is Reshaping Human-AI Collaboration"</h3>
                <div className="media-date">November 15, 2024</div>
              </div>
            </div>
          </div>
          
          <div className="press-section">
            <h2 className="section-title">Press Kit</h2>
            <div className="press-kit">
              <div className="kit-item">
                <h3>Company Logo</h3>
                <p>High-resolution logo files in various formats</p>
              </div>
              
              <div className="kit-item">
                <h3>Executive Photos</h3>
                <p>Professional headshots of key team members</p>
              </div>
              
              <div className="kit-item">
                <h3>Company Fact Sheet</h3>
                <p>Key information about Brainoo and its mission</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
