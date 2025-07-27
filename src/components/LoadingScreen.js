import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showCompletionEffect, setShowCompletionEffect] = useState(false);
  const [showRedFlash, setShowRedFlash] = useState(false);

  useEffect(() => {
    // Play Netflix sound effect
    const playNetflixSound = () => {
      try {
        // Create Netflix startup sound using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Netflix-like sound sequence
        oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(440, audioContext.currentTime + 0.3);
        oscillator.frequency.exponentialRampToValueAtTime(330, audioContext.currentTime + 0.6);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
      } catch (error) {
        console.log('Audio not supported or blocked');
      }
    };

    // Show logo after brief delay and play sound
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
      playNetflixSound();
    }, 800);

    // Netflix-style realistic loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          
          // Netflix completion sequence
          setTimeout(() => {
            setShowCompletionEffect(true);
            
            // Red flash effect
            setTimeout(() => {
              setShowRedFlash(true);
              
              // Start fade out
              setTimeout(() => {
                setFadeOut(true);
                
                // Complete loading
                setTimeout(() => {
                  onLoadingComplete();
                }, 800);
              }, 300);
            }, 400);
          }, 600);
          return 100;
        }
        
        // Netflix-style loading progression
        let increment;
        if (prev < 30) {
          // Slow start
          increment = Math.random() * 3 + 1;
        } else if (prev < 70) {
          // Medium speed
          increment = Math.random() * 6 + 2;
        } else if (prev < 95) {
          // Faster near end
          increment = Math.random() * 4 + 1;
        } else {
          // Very slow for final 5%
          increment = Math.random() * 1 + 0.5;
        }
        
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''} ${showCompletionEffect ? 'completion-effect' : ''}`}>
      {/* Netflix completion flash */}
      {showRedFlash && <div className="red-flash"></div>}
      
      {/* Netflix-style background */}
      <div className="loading-background">
        <div className="loading-gradient"></div>
        <div className="loading-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="loading-content">
        {/* Logo Section */}
        <div className={`loading-logo ${showLogo ? 'show' : ''}`}>
          <h1 className="loading-title">
            LEON<span className="title-accent">FLIX</span>
          </h1>
          <div className="logo-underline"></div>
        </div>

        {/* Loading Animation */}
        <div className="loading-animation">
          <div className="netflix-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="loading-progress-section">
          <div className="progress-container">
            <div 
              className="progress-bar"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="progress-text">
            {loadingProgress < 100 ? (
              <>
                <span className="loading-status">Loading Portfolio</span>
                <span className="loading-dots">
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                </span>
              </>
            ) : (
              <span className="loading-complete">Ready!</span>
            )}
          </div>
        </div>

        {/* Netflix-style footer */}
        <div className="loading-footer">
          <p>Welcome to Leon Tang's Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;