import React from 'react';
import './About.css';
import headshot1 from '../assets/headshot1.jpeg';
import bobby from '../assets/IMG_4585.jpg';
import issa from '../assets/Screenshot_2024-11-24_at_6.44.46_PM-removebg-preview.png';
import rugby from '../assets/download (2).png';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <img src={headshot1} alt="Leon Tang" className="about-headshot" />
          <div className="about-hero-text">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">
              Hello! 👋 I'm Leon Tang, a highly motivated and curious individual with a passion for technology, leadership, and making a positive impact on the world.
            </p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Personal and Academic Journey</h2>
          <p>
            I am currently pursuing a combined B.S./M.S. in Information Systems at the University of Maryland, Baltimore County (UMBC), with an expected graduation date of May 2026. My academic journey reflects my commitment to blending technical expertise with real-world problem-solving. With a GPA of 3.67, I've taken courses in database design, machine learning, and cybersecurity that have equipped me with a strong foundation in data analytics, programming, and systems security.
          </p>
          <p>
            I am honored to serve as the President of the Information Systems Security Association (ISSA) Chapter at UMBC and the Vice President of the UMBC Men's Rugby Team, where I balance technical leadership with my passion for sports and teamwork.
          </p>
        </section>

        <section className="about-section">
          <h2>About Me</h2>
          <p>
            Hi, thanks for visiting my website portfolio! My name is Leon Tang, and I'm a senior at the University of Maryland, Baltimore County (UMBC). I currently work as a Cybersecurity Analyst Intern at Textron Systems.
          </p>
          <p>
            After graduation, my goal is to become a cybersecurity analyst or engineer, helping organizations protect their critical assets. I also plan to pursue a Master's degree and an MBA—and perhaps even a Ph.D. one day. My long-term aspiration is to become a Chief Security Officer (CSO), and eventually a motivational speaker to inspire others to chase their dreams and support those less fortunate.
          </p>
        </section>

        <section className="about-section">
          <h2>Professional Experience</h2>
          <p>Throughout my career, I've interned at leading organizations where I applied my skills to create impactful solutions:</p>
          <div className="experience-highlights">
            <div className="experience-item">
              <h3>IT Intern at The Depository Trust & Clearing Corporation (DTCC)</h3>
              <p>Developed real-time dashboards for trade message monitoring, improving system reliability and team efficiency.</p>
            </div>
            <div className="experience-item">
              <h3>Research Assistant at UMBC</h3>
              <p>Conducted a literature review on cybersecurity adversarial attacks, focusing on deception techniques in IoT, autonomous vehicles, and drones.</p>
            </div>
            <div className="experience-item">
              <h3>Intern at University of Wisconsin-Madison</h3>
              <p>Used machine learning to optimize donation campaigns for The River Food Pantry, improving donor engagement and campaign success rates.</p>
            </div>
          </div>
          <p>
            These experiences have sharpened my technical skills in Power BI, Splunk, Python, SQL, and more, while also fostering my ability to collaborate in cross-functional teams.
          </p>
        </section>

        <section className="about-section">
          <h2>Passions and Goals</h2>
          <p>
            I am deeply passionate about cybersecurity, a rapidly evolving field that challenges me to think critically and creatively. My goal is to contribute to securing digital systems while educating others about the importance of protecting their online presence.
          </p>
          <p>
            Beyond technology, I value leadership and personal growth. I thrive in environments where I can motivate others, solve challenging problems, and leave a lasting impact.
          </p>
        </section>

        <section className="about-section leadership-section">
          <h2>Leadership Roles</h2>
          <div className="leadership-grid">
            <div className="leadership-card">
              <img src={issa} alt="ISSA UMBC" className="leadership-logo" />
              <h3>President</h3>
              <h4>Information Systems Security Association (ISSA) - UMBC Chapter</h4>
              <p>Leading the UMBC ISSA chapter with the goal of building the next generation of tech professionals, organizing events and mentoring initiatives.</p>
            </div>
            <div className="leadership-card">
              <img src={rugby} alt="UMBC Rugby" className="leadership-logo" />
              <h3>Vice President</h3>
              <h4>UMBC Men's Rugby (DII)</h4>
              <p>Coordinating team logistics, providing leadership and mentorship, and assisting in fundraising and community engagement.</p>
            </div>
          </div>
        </section>

        <section className="about-section fun-facts">
          <h2>Fun Facts and Interests</h2>
          <div className="facts-grid">
            <div className="fact-item">
              <h3>🏉 Rugby Enthusiast</h3>
              <p>As Vice President of the UMBC Men's Rugby Team, I lead on and off the field, embodying sportsmanship and resilience.</p>
            </div>
            <div className="fact-item">
              <h3>💪 Fitness Advocate</h3>
              <p>I'm committed to maintaining a healthy lifestyle through weightlifting, cardio, and staying active.</p>
            </div>
            <div className="fact-item">
              <h3>📚 Lifelong Learner</h3>
              <p>I recently began exploring my cultural roots by learning Mandarin and am on a journey to grow spiritually by deepening my faith.</p>
            </div>
          </div>
        </section>

        <section className="about-section bobby-section">
          <h2>Meet Bobby</h2>
          <div className="bobby-content">
            <img src={bobby} alt="Bobby the Dog" className="bobby-image" />
            <div className="bobby-text">
              <p>
                My dog, Bobby, is a big part of my life, and I enjoy spending time playing with him. He brings joy and companionship to my daily routine and reminds me of the importance of taking breaks and enjoying life's simple pleasures.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section beliefs">
          <h2>What I Believe</h2>
          <p>
            I firmly believe in the power of community, innovation, and kindness. My philosophy is simple: work hard, stay curious, and always strive to uplift those around you. Whether I'm leading a team, building a project, or simply sharing a laugh, I aim to create a positive and inspiring environment.
          </p>
          <div className="beliefs-highlight">
            <p>"The world is yours - embrace the present moment and take time to reflect on where you are while continuing to move forward."</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;