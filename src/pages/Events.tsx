import React from 'react';
import './Events.css';

const Events: React.FC = () => {
  return (
    <div className="events">
      <div className="events-container">
        <h1 className="events-title">Events</h1>
        <div className="events-content">
          <div className="event-card">
            <h3 className="event-title">AI Innovation Summit</h3>
            <p className="event-date">March 15, 2024</p>
            <p className="event-description">
              Join us for a comprehensive exploration of exponential prompting methodologies 
              and their applications in modern AI systems.
            </p>
          </div>
          
          <div className="event-card">
            <h3 className="event-title">Creative AI Workshop</h3>
            <p className="event-date">April 22, 2024</p>
            <p className="event-description">
              Hands-on workshop focusing on practical implementation of advanced prompting 
              techniques for creative applications.
            </p>
          </div>
          
          <div className="event-card">
            <h3 className="event-title">Future of Human-AI Collaboration</h3>
            <p className="event-date">May 10, 2024</p>
            <p className="event-description">
              A deep dive into the evolving relationship between humans and artificial 
              intelligence in the context of exponential prompting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
