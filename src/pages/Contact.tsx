import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-subtitle">Get in touch with us</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>hello@brainoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
