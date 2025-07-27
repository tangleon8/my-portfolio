import React, { useEffect, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="experience-container">
      {/* Dynamic background that follows mouse */}
      <div 
        className="dynamic-bg"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(229, 9, 20, 0.15) 0%, transparent 50%)`
        }}
      />
      
      {/* Animated particles */}
      <div className="particle-field">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* Neural network lines */}
      <div className="neural-network">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`neural-line neural-line-${i + 1}`} />
        ))}
      </div>

      <div className={`content-wrapper ${isVisible ? 'visible' : ''}`}>
        <div className="glitch-container">
          <h1 className="main-title holographic-text">
            Experience
          </h1>
          <h1 className="main-title glitch-text" data-text="Experience">
            Experience
          </h1>
        </div>
        
        <div className="message-card glass-effect">
          <div className="card-content">
            <div className="icon-container">
              <div className="rotating-icon">⚡</div>
            </div>
            <p className="construction-message">
              This dedicated experience page is currently under construction. 
              Meanwhile, explore my detailed work history on the main portfolio.
            </p>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
        
        <a href="/" className="nav-button quantum-ripple">
          <span className="button-text">Back to Portfolio</span>
          <div className="button-glow"></div>
        </a>
        
        <div className="preview-hint">
          <p>💡 Pro tip: Check out the timeline section on the home page for my complete work experience!</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;