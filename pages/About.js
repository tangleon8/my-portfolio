import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        I’m Leon Tang, a passionate Information Systems student at UMBC,
        focused on merging technology with business strategies.
      </p>
      <h3>Skills</h3>
      <ul className="skills-list">
        <li>Python, JavaScript, SQL, C++</li>
        <li>Machine Learning & AI</li>
        <li>Cybersecurity & IoT Systems</li>
        <li>Scrum & Project Management</li>
      </ul>
    </div>
  );
};

export default About;
