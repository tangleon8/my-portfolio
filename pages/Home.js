import React, { useState, useEffect } from 'react';
import './Home.css';
import Chatbot from '../pages/chatbot';
import 'aos/dist/aos.css';
import AOS from 'aos';
import rugby from '../assets/download (2).png';
import issa from '../assets/Screenshot_2024-11-24_at_6.44.46_PM-removebg-preview.png';
import bobby from '../assets/IMG_4585.jpg';
import resume from '../assets/TheResume-20.pdf';
import skunkwork from '../assets/skunkworks.png';
import headshot1 from '../assets/headshot1.jpeg';
import rugbysite from '../assets/umbcrugby.png';
import issasite from '../assets/umbcissa.png';
import house from '../assets/house.webp';
import textron from '../assets/textron.png';
import sec from '../assets/sec+.png';
import bigdataPub from '../assets/bigdata24.jpg';

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


  const experiences = [
    {
      title: "Information Technology Intern",
      company: "Textron Systems",
      logo: textron,
      duration: "June 2025 - Present",
      points: ["Cybersecurity Team\n"],
    },
    {
      title: "Data Privacy Researcher",
      company: "Data Semantics & Management (DAMS) Lab - UMBC",
      logo: "https://damslabumbc.github.io/media/dams_logo_hubefdcdfbc7fb023811089c66a712f697_12573_400x0_resize_lanczos_3.png",
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
      title: "Front Desk Assistant",
      company: "UMBC Residential Life",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvSGBvoJZs1cF9G8NiRzCDe7Zfgr-0Fd2Lg&s",
      duration: "August 2023 – May 2025",
      points: ["Managed administrative tasks, provided exceptional customer service, and collaborated with residential life staff to organize community events, enhancing building security and resident satisfaction.\n"],
    },
    {
      title: "Machine Learning & Data Analytics Researcher",
      company: "University of Wisconsin – Madison Department of Materials Science & Engineering",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHd6wBu4az8q1t_KrVgw8tagCTXRCKAiPhaA&s",
      duration: "September 2024 – December 2024",
      points: ["Collaborated with three peers to create machine learning models and a dynamic donation map using gradient-boosted trees and SHAP analysis, enhancing donor engagement for Wisconsin's largest food pantry, The River Food Pantry.\n"],
    },
    {
      title: "Information Technology Intern",
      company: "The Depository Trust & Clearing Corporation (DTCC) – McLean, Virginia",
      logo: "https://cdn.cookielaw.org/logos/751749a6-c2f4-4385-890c-83226f749435/0192a0ec-6f90-7c90-b811-fac24b6c01f6/9a693b73-a402-43ea-be61-d1cc077e0314/dtcc-wordmark-huntergreen.png",
      duration: "June 2024 – August 2024",
      points: ["Designed a high-performance Splunk dashboard in an Agile setting for Real Time Trade Management, handling over 10 million daily messages to boost system reliability by 20%, and developed a strategic Power BI dashboard to enhance treasury project oversight through advanced analytics and real-time reporting.\n"],
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

  const sortedExperiences = experiences.sort((a, b) => {
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
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-back',
      offset: 0,
      once: false,      // re‑animate on each scroll down
      mirror: true,     // animate on scroll‑up as well
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
          {[...Array(15)].map((_, index) => (
              <div key={index} className={`floating-circle circle-${index + 1}`} style={{'--i': index}}></div>
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

        <section id="about" className="section about">
          <h2 data-aos="slide-down" data-aos-duration="800">About Me</h2>
          <p data-aos="fade-up" data-aos-duration="1200">
            Hi, I'm Leon Tang! I’m passionate about learning, collaborating, and tackling challenges through impactful
            projects and experiences with others. After graduating from UMBC, I plan to pursue a Master’s while working
            full-time with a potential path toward a PhD. Explore my site to learn more, and feel free to reach out. I’d
            love to connect!
          </p>
          <div className="about-links" data-aos="fade-up" data-aos-delay="300">
            <a href="brown-amandi-9.tiiny.site" target="_blank" rel="noopener noreferrer" title="View My Resume">
              <img src="https://cdn-icons-png.flaticon.com/512/3258/3258479.png" alt="Resume" className="about-logo"/>
            </a>
            <a href="https://github.com/tangleon8" target="_blank" rel="noopener noreferrer" title="Visit My GitHub">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="about-logo"/>
            </a>
            <a href="https://www.linkedin.com/in/leon-tang-4328b6246/" target="_blank" rel="noopener noreferrer"
               title="Visit My LinkedIn">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="about-logo"/>
            </a>
            <a href="https://scholar.google.com/citations?user=lj5Ia-IAAAAJ&hl=en&authuser=2" target="_blank"
               rel="noopener noreferrer" title="Visit My Google Scholar Profile">
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/1024px-Google_Scholar_logo.svg.png?20200110094142"
                  alt="Google Scholar" className="about-logo"/>
            </a>
          </div>
        </section>

        <section id="education" className="section education">
          <h2 data-aos="slide-down" data-aos-duration="800">Education</h2>
          <div className="education-grid">
            <div className="education-card" data-aos="flip-left" data-aos-duration="1000">
              <img
                  src="https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/03/UMBC-vertical-logo-CMYK-on-black.png"
                  alt="University of Maryland, Baltimore County" className="education-logo"/>
              <h3>University of Maryland, Baltimore County</h3>
              <p><strong>Bachelor of Science in Information Systems</strong></p>
              <p>Junior Class · Expected Graduation: <strong>Fall 2025</strong></p>
              <p><strong>Accelerated BS/MS Program Graduate</strong></p>
              <p>GPA: <strong>3.79</strong> · President's List</p>
            </div>
          </div>
        </section>


        <section id="certifications" className="section certifications" data-aos="fade-up">
          <h2 data-aos="slide-down" data-aos-duration="800">Certifications</h2>
          <div className="cert-grid">
            <div className="cert-card" data-aos="flip-up" data-aos-once="false">
              <img src={sec} alt="CompTIA Security+" className="cert-image"/>
              <h3>CompTIA Security+</h3>
<span className="cert-link disabled">
                View Credential ↗
              </span>
            </div>
          </div>
        </section>

        <section id="publications" className="section publications" data-aos="fade-up">
          <h2 data-aos="slide-down" data-aos-duration="800">Publications</h2>

          <div className="publication-card" data-aos="fade-in" data-aos-delay="200">
            {/* Left: Conference/Image */}
            <img
                src="https://cdn.shopify.com/s/files/1/1268/5407/files/what-is-ieee-802.3.jpg?v=1591386495"
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


        <section id="experience" className="timeline-section">
          <h2 data-aos="slide-down" data-aos-duration="800">Experience</h2>
          <div className="timeline">
            {sortedExperiences.map((experience, index) => (
                <div
                    key={index}
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                    data-aos-duration="1200"
                    data-aos-once="false"
                >
                  <div className="timeline-logo">
                    <img src={experience.logo} alt={`${experience.company} logo`} className="company-logo"/>
                  </div>
                  <div className="timeline-content">
                    <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4>
                    <h5>{experience.duration}</h5>
                    <ul>
                      {experience.points.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  </div>
                </div>
            ))}
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

        <section id="skills" className="section skills" data-aos="fade-up">
          <h2 data-aos="slide-down" data-aos-duration="800">My Skills</h2>
          <div className="skills-container">
            <div className="skills-category" data-aos="fade-up" data-aos-delay="200">
              <h3>Interpersonal</h3>
              <div className="skills-grid">
                <div className="skill-item" data-aos="flip-up" data-aos-delay="0"><FaUsers className="skill-icon"/> Team
                  Player
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="50"><FaCrown
                    className="skill-icon"/> Leader
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="100"><FaHardHat
                    className="skill-icon"/> Hard Worker
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="150"><FaHandshake
                    className="skill-icon"/> Customer Service
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="200"><FaEye
                    className="skill-icon"/> Attention to Detail
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="250"><FaRecycle
                    className="skill-icon"/> Flexible
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="300"><FaShieldAlt
                    className="skill-icon"/> Honesty
                </div>
              </div>
            </div>
            <div className="skills-category" data-aos="fade-up" data-aos-delay="400">
              <h3>Functional</h3>
              <div className="skills-grid">
                <div className="skill-item" data-aos="flip-up" data-aos-delay="0"><FaLaptopCode
                    className="skill-icon"/> Information Technology
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="50"><FaProjectDiagram
                    className="skill-icon"/> Project Management
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="100"><FaLayerGroup
                    className="skill-icon"/> Agile
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="150"><FaTasks
                    className="skill-icon"/> Scrum
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="200"><FaLock
                    className="skill-icon"/> Cybersecurity
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="250"><FaChartBar
                    className="skill-icon"/> Data Analyst
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="300"><FaBrain
                    className="skill-icon"/> AI/ML
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="350"><FaMicrosoft
                    className="skill-icon"/> Microsoft Office
                </div>
              </div>
            </div>
            <div className="skills-category" data-aos="fade-up" data-aos-delay="600">
              <h3>Technical</h3>
              <div className="skills-grid">
                <div className="skill-item" data-aos="flip-up" data-aos-delay="0"><FaPython
                    className="skill-icon"/> Python
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="50"><SiCplusplus
                    className="skill-icon"/> C++
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="100"><FaDatabase
                    className="skill-icon"/> SQL
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="150"><FaJs
                    className="skill-icon"/> JavaScript
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="200"><FaLinux
                    className="skill-icon"/> Linux
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="250"><SiSwift
                    className="skill-icon"/> Swift
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="300"><SiCsharp
                    className="skill-icon"/> C#
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="350"><FaHtml5
                    className="skill-icon"/> HTML/CSS
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="400"><FaPhp className="skill-icon"/> PHP
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="450"><SiLatex
                    className="skill-icon"/> LaTeX
                </div>
              </div>
            </div>
            <div className="skills-category" data-aos="fade-up" data-aos-delay="800">
              <h3>Software</h3>
              <div className="skills-grid">
                <div className="skill-item" data-aos="flip-up" data-aos-delay="0"><SiPycharm
                    className="skill-icon"/> PyCharm
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="50"><SiVisualstudiocode
                    className="skill-icon"/> VSCode
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="100"><SiJira
                    className="skill-icon"/> Jira
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="150"><SiOracle
                    className="skill-icon"/> Oracle
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="200"><SiMicrosoftword
                    className="skill-icon"/> Microsoft Excel
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="250"><SiMicrosoftsharepoint
                    className="skill-icon"/> Microsoft Teams
                </div>
                <div className="skill-item" data-aos="flip-up" data-aos-delay="300"><FaHardHat
                    className="skill-icon"/> VMware
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hobbies" className="section hobbies" data-aos="fade-up">
          <h2 className="section-title" data-aos="fade-right" data-aos-duration="1000">Hobbies & More</h2>
          <div className="hobbies-container">
            <div className="hobbies-text" data-aos="fade-left" data-aos-duration="1000">
              <p>Staying active is an important part of my life. I enjoy <span
                  className="highlight">lifting weights</span>, <span className="highlight">running</span>, and <span
                  className="highlight">hiking</span>.</p>
              <p>I’m a big fan of the <span className="highlight">Baltimore Ravens</span> and the <span
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
