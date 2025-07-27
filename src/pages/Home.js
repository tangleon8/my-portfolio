import React, { useState, useEffect } from 'react';
import './Home.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Import all required assets
import fart from '../assets/fart.png';
import foodpantry from '../assets/Wisconsin.png';
import rugby from '../assets/download (2).png';
import issa from '../assets/Screenshot_2024-11-24_at_6.44.46_PM-removebg-preview.png';
import bobby from '../assets/IMG_4585.jpg';
import skunkwork from '../assets/skunkworks.png';
import headshot1 from '../assets/headshot1.jpeg';
import projectImage1 from '../assets/autonomous-systems.png';
import projectImageIC24 from '../assets/IC-24.jpeg';
// import website from '../assets/Screenshot 2024-11-27 at 12.19.43 AM.png';
// import sec from '../assets/Screenshot 2024-11-24 at 12.26.45 AM.png';
import bigdataPub from '../assets/IC-24.jpeg';

import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3,
  FaReact,
  FaDatabase,
  FaUsers,
  FaCrown,
  FaHardHat,
  FaHandshake,
  FaEye,
  FaRecycle,
  FaShieldAlt,
  FaLaptopCode,
  FaProjectDiagram,
  FaLayerGroup,
  FaTasks,
  FaLock,
  FaChartBar,
  FaBrain,
  FaMicrosoft,
  FaPhp,
  FaLinux
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
  SiSwift,
  SiCsharp,
  SiLatex
} from "react-icons/si";
import { SiPycharm, SiVisualstudiocode, SiPowerbi, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiMicrosoftsharepoint } from "react-icons/si";
import { SiJira, SiOracle } from "react-icons/si";

const Home = () => {

  const words = [
    "Tech Innovator.",
    "Philanthropist.",
    "Cybersecurity Enthusiast.",
    "Systems Engineer.",
    "Data Story Teller.",
    "Technical Project Manager.",
    "Change-Maker.",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [chatResponse, setChatResponse] = useState('');
  const [userInput, setUserInput] = useState('');


  const handleChatFetch = async () => {
    const newMessages = [{ role: 'user', content: userInput }];
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are a formal and knowledgeable chatbot that provides clear, concise answers exclusively about Leon Tang. 
                        Leon is a student at UMBC with a strong background in cybersecurity, machine learning, and leadership. 
                        If a question does not relate to Leon Tang, politely respond with: "I am sorry, but I can only answer questions related to Leon Tang."`
            },
            ...newMessages
          ]
        })
      });
      const data = await response.json();
      setChatResponse(data?.choices?.[0]?.message?.content || "No response.");
    } catch (error) {
      console.error(error);
      setChatResponse("An error occurred.");
    }
  };

  const projects = [
    {
      title: "Exploring Deceptive Techniques in Mobile Intelligent Autonomous Systems: Attacks and Defenses",
      image: projectImage1,
      description: `
        Award-Winning Research on Cybersecurity Threats: This two-time award-winning research goes into the security challenges faced by autonomous systems like drones, unmanned vehicles, and self-driving cars.
        Also, it references defensive measures such as adversarial training and fortification of machine learning models ensuring these systems can resist and recover from attacks.
      `,
    },
    {
      title: "Login Chronicles: Cybersecurity Insights from Ernst & Young's 2024 UMD IC Analysis",
      image: projectImageIC24,
      description: `
        Award-Winning Cybersecurity Project: This project goes into Ernst & Young's authentication logs to reveal critical security vulnerabilities.
        Combining C++ data structures with Excel analytics, the project identifies unusual login patterns and visualizes key security metrics.
      `,
      link: "https://ischool.umd.edu/about/info-challenge-initiative/challenge/projects/",
    },
    {
      title: "Student Dropout Prediction with Support Vector Machines and Data Normalization Techniques",
      image: fart,
      description: `
        This study explores using Support Vector Machines (SVMs) to predict student dropout rates focusing on the impact of nine data normalization techniques. Using UC Irvine's dataset, it categorizes outcomes as dropout, enrolled, or graduated and applies methods like Min Max Scaler, Standard Scaler, and One Hot Encoder. The One Hot Encoder achieved the highest F1 score of 0.779, highlighting the importance of data preprocessing in improving machine learning accuracy for identifying at-risk students.
      `,
    },
    {
      title: "Machine Learning and Predictive Analysis for Donation Campaign Optimization",
      image: foodpantry,
      description: `
        Collaborated with The River Food Pantry, Wisconsin's busiest food pantry to develop machine learning models optimizing donation campaigns. Key contributions included feature engineering, SHAP analysis for feature importance, and the development of interactive dashboards to visualize trends and insights. This project empowered the organization to enhance its mission of serving over 2,500 people weekly through impactful donations.
      `,
    },
    {
      title: "Leon Tang's Portfolio Website",
      image: projectImage1,
      description: `
        This site was developed using React.js using modular components and reusable hooks to create a dynamic user interface. I used CSS3 animations and AOS (Animate on Scroll) for smooth transitions and features like light/dark mode toggling using state management. The project is hosted on Vercel with a custom domain and used React lifecycle methods with interactive elements like project carousels, scroll-based animations, and responsive skill grids.
      `,
    },
  ];

  const professionalExperiences = [
    {
      title: "Information Technology Intern",
      company: "Textron Systems",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRoAnWiynJxvjhkZFeeHtG-mg1vv_ZLmDew&s",
      duration: "June 2025 - Present",
      points: ["Cybersecurity Team\n"],
    },
    {
      title: "Information Technology Intern",
      company: "The Depository Trust & Clearing Corporation (DTCC) – McLean, Virginia",
      logo: "https://cdn.cookielaw.org/logos/751749a6-c2f4-4385-890c-83226f749435/0192a0ec-6f90-7c90-b811-fac24b6c01f6/9a693b73-a402-43ea-be61-d1cc077e0314/dtcc-wordmark-huntergreen.png",
      duration: "June 2024 – August 2024",
      points: ["Designed a high-performance Splunk dashboard in an Agile setting for Real Time Trade Management, handling over 10 million daily messages to boost system reliability by 20%, and developed a strategic Power BI dashboard to enhance treasury project oversight through advanced analytics and real-time reporting.\n"],
    },
    {
      title: "Front Desk Assistant",
      company: "UMBC Residential Life",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvSGBvoJZs1cF9G8NiRzCDe7Zfgr-0Fd2Lg&s",
      duration: "August 2023 – May 2025",
      points: ["Managed administrative tasks, provided exceptional customer service, and collaborated with residential life staff to organize community events, enhancing building security and resident satisfaction.\n"],
    },
    {
      title: "Cook",
      company: "Capriotti's Sandwich Shop",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKC8B1QZ1i6yvAyaLqOMa4EP9qX4CvDmz-Pw&s",
      duration: "May 2023 – Aug 2023",
      points: ["Prepared high-quality sandwiches and meals while maintaining a clean, organized kitchen environment, ensuring compliance with health and safety standards and customer satisfaction.\n"],
    },
    {
      title: "Home Remodeler",
      company: "JMarra LLC",
      logo: "https://static.vecteezy.com/system/resources/previews/036/519/438/non_2x/ai-generated-cartoon-house-clipart-desigh-illustration-free-png.png",
      duration: "June 2022 – Aug 2022",
      points: ["Assisted in residential remodeling projects such as painting and flooring, ensuring accurate measurements and attention to detail for high-quality craftsmanship,\n"],
    },
    {
      title: "Cashier & Car Hopper",
      company: "Sonic Drive-Inn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/SONIC_New_Logo_2020.svg",
      duration: "May 2021 – Dec 2021",
      points: ["Delivered food orders promptly and supported kitchen staff during peak hours, providing excellent customer service to ensure customer satisfaction and smooth operations. I was too scared to use roller skates.\n"],
    }
  ];

  const researchExperiences = [
    {
      title: "Data Privacy Researcher",
      company: "Data Semantics & Management (DAMS) Lab - UMBC",
      logo: "https://damslabumbc.github.io/media/dams_logo_hubefdcdfbc7fb023811089c66a712f697_12573_1200x0_resize_lanczos_3.png",
      duration: "February 2025 - May 2025",
      points: ["MQTT-PF: Enabling GDPR Compliance in MQTT\n"],
    },
    {
      title: "Materials Science & Machine Learning Researcher",
      company: "University of Wisconsin – Madison Department of Materials Science & Engineering",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHd6wBu4az8q1t_KrVgw8tagCTXRCKAiPhaA&s",
      duration: "February 2025 - May 2025",
      points: ["Assessing generative models for predicting materials structure and properties\" under Dr Benjamin Afflerbach (Spring 2025)\n"],
    },
    {
      title: "Machine Learning & Data Analytics Researcher",
      company: "University of Wisconsin – Madison Department of Materials Science & Engineering",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHd6wBu4az8q1t_KrVgw8tagCTXRCKAiPhaA&s",
      duration: "September 2024 – December 2024",
      points: ["Collaborated with three peers to create machine learning models and a dynamic donation map using gradient-boosted trees and SHAP analysis, enhancing donor engagement for Wisconsin's largest food pantry, The River Food Pantry.\n"],
    },
    {
      title: "Machine Learning Researcher",
      company: "UMBC Department of Information Systems",
      logo: "https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/03/UMBC-vertical-logo-CMYK-on-black.png",
      duration: "June 2024 – December 2024",
      points: ["Researched and developed SVM models to predict student dropout, analyzing normalized datasets and collaborating to publish effective strategies under Dr. Michael Brown.\n"],
    },
    {
      title: "Cybersecurity Research Assistant",
      company: "UMBC Department of Information Systems",
      logo: "https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/03/UMBC-vertical-logo-CMYK-on-black.png",
      duration: "January 2024 – May 2024",
      points: ["Assisted in a research project under Dr. Zhiyuan Chen on deception-based attacks in IoT and authored an IEEE literature review on advancements and challenges in cybersecurity deception strategies.\n"],
    }
  ];

  const sortedProfessionalExperiences = professionalExperiences.sort((a, b) => {
    const dateA = new Date(a.duration.split(" – ")[1] || new Date());
    const dateB = new Date(b.duration.split(" – ")[1] || new Date());
    return dateB - dateA;
  });

  const sortedResearchExperiences = researchExperiences.sort((a, b) => {
    const dateA = new Date(a.duration.split(" – ")[1] || new Date());
    const dateB = new Date(b.duration.split(" – ")[1] || new Date());
    return dateB - dateA;
  });

  const leadership = [
    {
      title: "President",
      organization: "Information Systems Security Association (ISSA) - UMBC Chapter",
      logo: issa,
      duration: "April 2024 – Present",
      points: ["Led the UMBC ISSA chapter with the goal of building the next generation of tech professionals, organizing events and mentoring initiatives to foster collaboration, and create an inclusive environment for professional development.\n"],
    },
    {
      title: "Vice President",
      organization: "UMBC Men's Rugby (DII)",
      logo: rugby,
      duration: "May 2024 – Present",
      points: ["Coordinated team logistics, provided leadership and mentorship, and assisted in fundraising and community engagement to support team operations and promote sportsmanship on campus.\n"],
      accolades: [
        "Rookie of the Year",
        "Haud Collumni Scholarship Awardee",
        "Scholastic All American",
        "National Collegiate Rugby (NCR) Mid Atlantic All-Star Nominee",
      ],
    },
  ];

  useEffect(() => {
    // Create enhanced Netflix cursor
    const cursor = document.createElement('div');
    cursor.className = 'netflix-cursor';
    cursor.innerHTML = `
      <div class="cursor-core"></div>
      <div class="cursor-ring"></div>
      <div class="cursor-glow"></div>
    `;
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Magnetic effect for floating circles
      const circles = document.querySelectorAll('.floating-circle');
      circles.forEach(circle => {
        const rect = circle.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );

        if (distance < 150) {
          const force = (150 - distance) / 150;
          const deltaX = (e.clientX - centerX) * force * 0.3;
          const deltaY = (e.clientY - centerY) * force * 0.3;

          circle.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${1 + force * 0.2})`;
          circle.style.boxShadow = `0 0 ${30 + force * 20}px rgba(229, 9, 20, ${0.3 + force * 0.4})`;
        } else {
          circle.style.transform = '';
          circle.style.boxShadow = '';
        }
      });
    };

    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
      .netflix-cursor {
        position: fixed;
        pointer-events: none;
        z-index: 10000;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease-out;
      }
      .cursor-core {
        width: 6px;
        height: 6px;
        background: #e50914;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 15px rgba(229, 9, 20, 0.8);
      }
      .cursor-ring {
        width: 25px;
        height: 25px;
        border: 2px solid rgba(229, 9, 20, 0.6);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: netflixPulse 2s ease-in-out infinite;
      }
      .cursor-glow {
        width: 40px;
        height: 40px;
        background: radial-gradient(circle, rgba(229, 9, 20, 0.2), transparent);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: netflixGlow 3s ease-in-out infinite reverse;
      }
      @keyframes netflixPulse {
        0%, 100% { 
          transform: translate(-50%, -50%) scale(1); 
          opacity: 0.6;
        }
        50% { 
          transform: translate(-50%, -50%) scale(1.3); 
          opacity: 1;
        }
      }
      @keyframes netflixGlow {
        0%, 100% { 
          transform: translate(-50%, -50%) scale(1); 
          opacity: 0.3;
        }
        50% { 
          transform: translate(-50%, -50%) scale(1.5); 
          opacity: 0.1;
        }
      }
    `;
    document.head.appendChild(cursorStyle);

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.head.removeChild(cursorStyle);
    };
  }, []);

  // Drag functionality for floating elements
  useEffect(() => {
    let isDragging = false;
    let currentElement = null;
    let startPos = { x: 0, y: 0 };
    let elementPos = { x: 0, y: 0 };

    const handleStart = (e) => {
      const element = e.target.closest('.floating-circle, .project-card, .cert-card');
      if (element) {
        isDragging = true;
        currentElement = element;
        element.classList.add('dragging');

        const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;

        startPos = { x: clientX, y: clientY };
        const rect = element.getBoundingClientRect();
        elementPos = { x: rect.left, y: rect.top };

        e.preventDefault();
      }
    };

    const handleMove = (e) => {
      if (!isDragging || !currentElement) return;

      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - startPos.x;
      const deltaY = clientY - startPos.y;

      const newX = elementPos.x + deltaX;
      const newY = elementPos.y + deltaY;

      currentElement.style.position = 'fixed';
      currentElement.style.left = `${newX}px`;
      currentElement.style.top = `${newY}px`;
      currentElement.style.zIndex = '1000';

      e.preventDefault();
    };

    const handleEnd = () => {
      if (currentElement) {
        currentElement.classList.remove('dragging');
        isDragging = false;
        currentElement = null;
      }
    };

    // Mouse events
    document.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);

    // Touch events for mobile
    document.addEventListener('touchstart', handleStart, { passive: false });
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousedown', handleStart);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchstart', handleStart);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-out-cubic',
      offset: 30,
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
      disable: false,
      startEvent: 'DOMContentLoaded',
      animatedClassName: 'aos-animate',
      initClassName: 'aos-init',
      delay: 50,
    });

    let typingSpeed = isDeleting ? 50 : 150;
    let timeout;
    if (!isDeleting && displayText === words[currentWordIndex]) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentWordIndex(prev => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        const currentWord = words[currentWordIndex];
        setDisplayText(prev =>
          isDeleting ? currentWord.substring(0, prev.length - 1)
                     : currentWord.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);


  return (
      <div className="home">
        <div className="hero" id="home">
          <div className="animated-bg"></div>
          <div className="moving-lines">
            {[...Array(20)].map((_, index) => (
              <div key={index} className={`moving-line line-${index + 1}`} style={{'--delay': `${index * 0.3}s`, '--duration': `${3 + (index % 4)}s`}}></div>
            ))}
          </div>
          {[...Array(5)].map((_, index) => (
              <div key={index} className={`floating-circle circle-${index + 1} draggable`} style={{'--i': index}}></div>
          ))}
          <div className="hero-content">
            <img src={headshot1} alt="Leon Tang" className="headshot" data-aos="zoom-in" data-aos-duration="1000"/>
            <h1 className="hero-title" data-aos="fade-right" data-aos-delay="500">Hi, I'm <span>Leon Tang!</span></h1>
            <h2
                className="hero-subtitle"
                data-aos="fade-left"
                data-aos-delay="0"
            >
              Aspiring <span className="dynamic-text">{displayText}</span>
            </h2>


          </div>
        </div>

        <section id="education" className="section education">
          <h2 data-aos="slide-down" data-aos-duration="600">Education</h2>
          <div className="education-grid">
            <div className="education-card" data-aos="flip-left" data-aos-duration="1000">
              <img
                  src="https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/03/UMBC-vertical-logo-CMYK-on-black.png"
                  alt="University of Maryland, Baltimore County" className="education-logo"/>
              <h3>University of Maryland, Baltimore County</h3>
              <p><strong>Bachelor of Science in Information Systems</strong></p>
              <p>Junior Class · Expected Graduation: <strong>Fall 2025</strong></p>
              <p><strong>Accelerated BS/MS Program Graduate</strong></p>
              <p>Major GPA: <strong>4.0</strong> · Cumulative GPA: <strong>3.8</strong> · President's List</p>
            </div>
          </div>
        </section>

        <section id="professional-experience" className="timeline-section">
          <h2 data-aos="fade-down" data-aos-duration="600" data-aos-delay="100">Professional Experience</h2>
          <div className="timeline">
            {sortedProfessionalExperiences.map((experience, index) => (
                <div
                    key={index}
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} enhanced-timeline-item`}
                    data-aos={index % 2 === 0 ? 'slide-right' : 'slide-left'}
                    data-aos-duration="400"
                    data-aos-delay={index * 80}
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                >
                  <div className="timeline-logo" data-aos="zoom-in" data-aos-delay={index * 80 + 150} data-aos-duration="300">
                    <img src={experience.logo} alt={`${experience.company} logo`} className="company-logo"/>
                  </div>
                  <div className="timeline-content">
                    <h3 data-aos="fade-up" data-aos-delay={index * 80 + 50} data-aos-duration="300">{experience.title}</h3>
                    <h4 data-aos="fade-up" data-aos-delay={index * 80 + 80} data-aos-duration="300">{experience.company}</h4>
                    <h5 data-aos="fade-up" data-aos-delay={index * 80 + 120} data-aos-duration="300">{experience.duration}</h5>
                    <ul>
                      {experience.points.map((pt, i) => <li key={i} data-aos="fade-up" data-aos-delay={index * 80 + 150 + (i * 40)} data-aos-duration="300">{pt}</li>)}
                    </ul>
                  </div>
                </div>
            ))}
          </div>
        </section>

        <section id="research-experience" className="timeline-section">
          <h2 data-aos="fade-down" data-aos-duration="600" data-aos-delay="100">Research Experience</h2>
          <div className="timeline">
            {sortedResearchExperiences.map((experience, index) => (
                <div
                    key={index}
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} enhanced-timeline-item`}
                    data-aos={index % 2 === 0 ? 'slide-right' : 'slide-left'}
                    data-aos-duration="400"
                    data-aos-delay={index * 80}
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                >
                  <div className="timeline-logo" data-aos="zoom-in" data-aos-delay={index * 80 + 150} data-aos-duration="300">
                    <img src={experience.logo} alt={`${experience.company} logo`} className="company-logo"/>
                  </div>
                  <div className="timeline-content">
                    <h3 data-aos="fade-up" data-aos-delay={index * 80 + 50} data-aos-duration="300">{experience.title}</h3>
                    <h4 data-aos="fade-up" data-aos-delay={index * 80 + 80} data-aos-duration="300">{experience.company}</h4>
                    <h5 data-aos="fade-up" data-aos-delay={index * 80 + 120} data-aos-duration="300">{experience.duration}</h5>
                    <ul>
                      {experience.points.map((pt, i) => <li key={i} data-aos="fade-up" data-aos-delay={index * 80 + 150 + (i * 40)} data-aos-duration="300">{pt}</li>)}
                    </ul>
                  </div>
                </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects" data-aos="fade-up" data-aos-duration="1200">
          <h2 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200">My Projects</h2>
          <div className="project-carousel">
            {projects.map((project, index) => (
                <div className="project-card draggable enhanced-project-card" key={index} 
                     data-aos="flip-up" 
                     data-aos-duration="500" 
                     data-aos-delay={index * 150}
                     data-aos-anchor-placement="top-bottom">
                  <img src={project.image} alt={project.title} className="project-image" 
                       data-aos="zoom-in" data-aos-delay={index * 150 + 200} data-aos-duration="400"/>
                  <h3 data-aos="fade-up" data-aos-delay={index * 150 + 50} data-aos-duration="400">{project.title}</h3>
                  <p data-aos="fade-up" data-aos-delay={index * 150 + 100} data-aos-duration="400">{project.description}</p>
                  {project.link && (
                      <p data-aos="fade-up" data-aos-delay={index * 150 + 300} data-aos-duration="400">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Read
                        more about it here</a>
                      </p>
                  )}
                </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills" data-aos="fade-up" data-aos-duration="1200">
          <h2 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200">My Skills</h2>
          <div className="skills-container">
            <div className="skills-category enhanced-skills-category" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="300">
              <h3 data-aos="fade-down" data-aos-delay="400">Interpersonal</h3>
              <div className="skills-grid">
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="zoom-in-up" data-aos-delay="300"><FaUsers className="skill-icon"/> Team
                  Player
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="zoom-in-up" data-aos-delay="350"><FaCrown
                    className="skill-icon"/> Leader
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="zoom-in-up" data-aos-delay="400"><FaHardHat
                    className="skill-icon"/> Hard Worker
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="zoom-in-up" data-aos-delay="450"><FaHandshake
                    className="skill-icon"/> Customer Service
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="zoom-in-up" data-aos-delay="500"><FaEye
                    className="skill-icon"/> Attention to Detail
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="zoom-in-up" data-aos-delay="550"><FaRecycle
                    className="skill-icon"/> Flexible
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="zoom-in-up" data-aos-delay="600"><FaShieldAlt
                    className="skill-icon"/> Honesty
                </div>
              </div>
            </div>
            <div className="skills-category enhanced-skills-category" data-aos="slide-left" data-aos-duration="600" data-aos-delay="300">
              <h3>Functional</h3>
              <div className="skills-grid">
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="0" data-aos-duration="400"><FaLaptopCode
                    className="skill-icon"/> Information Technology
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="50" data-aos-duration="400"><FaProjectDiagram
                    className="skill-icon"/> Project Management
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="100" data-aos-duration="400"><FaLayerGroup
                    className="skill-icon"/> Agile
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="150" data-aos-duration="400"><FaTasks
                    className="skill-icon"/> Scrum
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="200" data-aos-duration="400"><FaLock
                    className="skill-icon"/> Cybersecurity
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="250" data-aos-duration="400"><FaChartBar
                    className="skill-icon"/> Data Analyst
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="300" data-aos-duration="400"><FaBrain
                    className="skill-icon"/> AI/ML
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="350" data-aos-duration="400"><FaMicrosoft
                    className="skill-icon"/> Microsoft Office
                </div>
              </div>
            </div>
            <div className="skills-category enhanced-skills-category" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
              <h3>Technical</h3>
              <div className="skills-grid">
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="0" data-aos-duration="400"><FaPython
                    className="skill-icon"/> Python
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="50" data-aos-duration="400"><SiCplusplus
                    className="skill-icon"/> C++
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="100" data-aos-duration="400"><FaDatabase
                    className="skill-icon"/> SQL
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="150" data-aos-duration="400"><FaJs
                    className="skill-icon"/> JavaScript
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="200" data-aos-duration="400"><FaLinux
                    className="skill-icon"/> Linux
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="250" data-aos-duration="400"><SiSwift
                    className="skill-icon"/> Swift
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="300" data-aos-duration="400"><SiCsharp
                    className="skill-icon"/> C#
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="350" data-aos-duration="400"><FaHtml5
                    className="skill-icon"/> HTML/CSS
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="400" data-aos-duration="400"><FaPhp className="skill-icon"/> PHP
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="450" data-aos-duration="400"><SiLatex
                    className="skill-icon"/> LaTeX
                </div>
              </div>
            </div>
            <div className="skills-category enhanced-skills-category" data-aos="fade-up" data-aos-delay="500" data-aos-duration="600">
              <h3>Software</h3>
              <div className="skills-grid">
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="0" data-aos-duration="400"><SiPycharm
                    className="skill-icon"/> PyCharm
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="50" data-aos-duration="400"><SiVisualstudiocode
                    className="skill-icon"/> VSCode
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="100" data-aos-duration="400"><SiJira
                    className="skill-icon"/> Jira
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="150" data-aos-duration="400"><SiOracle
                    className="skill-icon"/> Oracle
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="200" data-aos-duration="400"><SiMicrosoftword
                    className="skill-icon"/> Microsoft Excel
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="250" data-aos-duration="400"><SiMicrosoftsharepoint
                    className="skill-icon"/> Microsoft Teams
                </div>
                <div className="skill-item enhanced-skill-item interactive-hover" data-aos="flip-up" data-aos-delay="300" data-aos-duration="400"><FaHardHat
                    className="skill-icon"/> VMware
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="publications" className="section publications" data-aos="fade-up">
          <h2 data-aos="slide-down" data-aos-duration="800">Publications</h2>

          <div className="publication-card" data-aos="fade-in" data-aos-delay="200">
            {/* Left: Conference/Image */}
            <img
                src= {bigdataPub}
                alt="IEEE Big Data Conference"
                className="publication-image"
                data-aos="zoom-in"
                data-aos-duration="1000"
            />

            {/* Right: Text Details */}
            <div className="publication-details">
              <h3 className="publication-title">
                Support Vector Machine for Predicting Student Dropout Under Different Normalization Methods
              </h3>
              <p className="publication-authors">
                G. Boteju, L. Tang, M. S. Brown
              </p>
              <p className="publication-conference">
                2024 IEEE International Conference on Big Data (BigData), Washington, DC, USA, 2024, pp. 8633–8636
              </p>
              <a
                  href="https://ieeexplore.ieee.org/document/10825023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
              >
                Read on IEEE Xplore ↗
              </a>
            </div>
          </div>
        </section>

        <section id="certifications" className="section certifications" data-aos="fade-up">
          <h2 data-aos="slide-down" data-aos-duration="600">Certifications</h2>
          <div className="cert-grid">
            <div className="cert-card draggable interactive-hover glass-effect" data-aos="flip-up" data-aos-once="false" data-aos-duration="500">
              <img src="https://images.credly.com/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob" alt="CompTIA Security+" className="cert-image"/>
              <h3>CompTIA Security+</h3>
              <a
                  href="https://www.credly.com/badges/031fccd5-d849-4de6-a0ae-3903ddce13f5/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
              >
                View Credential ↗
              </a>
            </div>
          </div>
        </section>

        <section id="leadership" className="section leadership" data-aos="fade-up">
          <h2 data-aos="slide-down" data-aos-duration="800">Leadership Experience</h2>
          <div className="leadership-grid">
            {leadership.map((role, index) => (
                <div
                    key={index}
                    className="leadership-card"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                >
                  <div className="leadership-logo">
                    <img src={role.logo} alt={`${role.organization} logo`} className="organization-logo"/>
                  </div>
                  <h3>{role.title}</h3>
                  <h4>{role.organization}</h4>
                  <h5>{role.duration}</h5>
                  <ul>
                    {role.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {role.accolades && (
                      <>
                        <h4>Accolades:</h4>
                        <ul>
                          {role.accolades.map((accolade, i) => (
                              <li key={i}>{accolade}</li>
                          ))}
                        </ul>
                      </>
                  )}
                </div>
            ))}
          </div>
        </section>

        <section id="hobbies" className="section hobbies" data-aos="fade-up">
          <h2 className="section-title" data-aos="fade-right" data-aos-duration="1000">Hobbies & More</h2>
          <div className="hobbies-container">
            <div className="hobbies-text" data-aos="fade-left" data-aos-duration="1000">
              <p>Staying active is an important part of my life. I enjoy <span
                  className="highlight">lifting weights</span>, <span className="highlight">running</span>, and <span
                  className="highlight">hiking</span>.</p>
              <p>I'm a big fan of the <span className="highlight">Baltimore Ravens</span> and the <span
                  className="highlight">Washington Wizards</span>.</p>
              <p>My dog, <span className="highlight">Bobby</span>, is a big part of my life, and I enjoy spending time
                playing with him.</p>
              <p><span className="highlight">Learning new things</span> and applying them in meaningful ways is a
                passion of mine.</p>
              <p>I firmly believe in the value of embracing <span className="highlight">challenges</span>, learning
                from <span className="highlight">mistakes</span>, and using <span
                    className="highlight">failures</span> as stepping stones for growth. Hard work beats talent when
                paired with intentional effort and smart strategies.</p>
              <p>Above all, I strive to <span className="highlight">embrace the present moment</span> and take time to
                reflect on where I am while continuing to move forward.</p>
              <p>At the end of the day, <span>the world is yours</span>.</p>
            </div>
            <div className="hobbies-image" data-aos="fade-left" data-aos-duration="1000">
              <div className="dog-section" data-aos="zoom-in">
                <h3 className="dog-title">Meet Bobby</h3>
                <img src={bobby} alt="Bobby the Dog" className="dog-image"/>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2 data-aos="slide-down" data-aos-duration="800">Contact Me</h2>
          <p data-aos="fade-up" data-aos-duration="1000">Have questions or want to work together? Feel free to reach
            out!</p>
          <a href="mailto:leontang27@icloud.com" className="contact-button" data-aos="zoom-in" data-aos-delay="200">Send
            Me an Email</a>
        </section>
      </div>
  );
};

export default Home;