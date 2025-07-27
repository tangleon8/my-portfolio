import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>EY Cybersecurity Login Analysis</h3>
        <p>Analyzed authentication logs for SaaS cybersecurity using C++ and Excel.</p>
      </div>
      <div className="project-card">
        <h3>Survey on Deception Techniques</h3>
        <p>Researched AI-based deception strategies for autonomous systems.</p>
      </div>
      <div className="project-card">
        <h3>Student Dropout Prediction</h3>
        <p>Built predictive models using SVMs to forecast dropout rates.</p>
      </div>
    </div>
  );
};

export default Projects;
