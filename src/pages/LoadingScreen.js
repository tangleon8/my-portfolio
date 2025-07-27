import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loader">
        {/* Add custom animations */}
        <div className="spinner"></div>
        <h2>Welcome to Leon Tang's Portfolio</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
