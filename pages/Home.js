import React, { useState, useEffect } from 'react';
import './Home.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import fart from '../assets/fart.png';
import Particles from "react-tsparticles";
import headshot from '../assets/headshot.png';
import wisconsin from '../assets/Wisconsin.png'
import skunkwork from '../assets/skunkworks.png';
import headshot1 from '../assets/headshot1.jpeg';
import projectImage1 from '../assets/autonomous-systems.png';
import projectImageIC24 from '../assets/IC-24.jpeg';
import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3,
  FaReact,
  FaDatabase,
  FaGit,
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
  const words = ["Tech Innovator.", "Philanthropist.", "IT Project Manager.","Motivational Speaker.", "Engineer.", "Pro Rugby Player." ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Projects Data
  const projects = [
    {
      title: "Exploring Deceptive Techniques in Mobile Intelligent Autonomous Systems: Attacks and Defenses",
      image: projectImage1,
      description: `
        Award-Winning Research on Cybersecurity Threats: This two-time award-winning research paper offers a deep dive into the security challenges faced by autonomous systems like drones, unmanned vehicles, and self-driving cars.
        Learn about defensive measures such as adversarial training and fortification of machine learning models, ensuring these systems can resist and recover from attacks.
      `,
    },
    {
      title: "Login Chronicles: Cybersecurity Insights from Ernst & Young's 2024 UMD IC Analysis",
      image: projectImageIC24,
      description: `
        Award-Winning Cybersecurity Project: This presentation delves into Ernst & Young's authentication logs, uncovering critical security vulnerabilities.
        Combining C++ data structures with Excel analytics, the project identifies unusual login patterns and visualizes key security metrics.
      `,
      link: "https://ischool.umd.edu/about/info-challenge-initiative/challenge/projects/",
    },

      {
  title: " Student Dropout Prediction with Support Vector Machines and Data Normalization Techniques",
        image: fart ,
  description: `
This study investigates the application of Support Vector Machines (SVMs) to predict student dropout rates, with a focus on evaluating the effectiveness of nine different data normalization techniques in improving model performance. Using a dataset from the UC Irvine repository, the research categorizes student outcomes into dropout, enrolled, and graduated, and applies normalization methods such as Min Max Scaler, Standard Scaler, and One Hot Encoder to optimize predictive accuracy. The results reveal that One Hot Encoder achieved the highest average F1 score of 0.779, underscoring the critical role of data preprocessing in enhancing the reliability of machine learning models for early identification of at-risk students.  `,

},
      {
  title: "Machine Learning and Predictive Analysis for Donation Campaign Optimization",
        image: skunkwork,
  description: `
   Collaborated with The River Food Pantry, South Central Wisconsin’s busiest food pantry, to develop machine learning models optimizing donation campaigns. Key contributions included feature engineering, SHAP analysis for feature importance, and the development of interactive dashboards to visualize trends and insights, enabling data-driven strategies. This project empowered the organization to enhance its mission of serving over 2,500 people weekly through strategic, impactful donations.
  `,

},

  ];

  // Experience Data
  const experiences = [
      {
      title: "Machine Learning & Data Analytics Researcher",
      company: "University of Wisconsin – Madison",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHd6wBu4az8q1t_KrVgw8tagCTXRCKAiPhaA&s",
      duration: "September 2024 – Present",
      points: [
        "• Collaborated with a team of 3 peers to develop machine learning models, utilizing gradient-boosted trees to identify key factors impacting donation campaigns for The River Food Pantry, the largest food pantry in Wisconsin.",
        "• Applied predictive analytics and SHAP analysis to evaluate model accuracy and interpretability, offering detailed insights into feature importance, enhancing donor engagement strategies, and improving resource allocation for the non-profit organization.",
      ],
    },
    {
      title: "Information Technology Intern",
      company: "The Depository Trust & Clearing Corporation (DTCC) – McLean, Virginia",
      logo: "https://cdn.cookielaw.org/logos/751749a6-c2f4-4385-890c-83226f749435/0192a0ec-6f90-7c90-b811-fac24b6c01f6/9a693b73-a402-43ea-be61-d1cc077e0314/dtcc-wordmark-huntergreen.png",
      duration: "June 2024 – August 2024",
      points: [
        "• Collaborated the design in an Agile environment of a high-performance Splunk observability dashboard for the Real Time Trade Management (RTTM), processing and visualizing over 10 million daily messages and logs, achieving a 20% boost in system reliability and uptime.",
        "• Architected and deployed a strategic Power BI dashboard to optimize treasury project oversight, incorporating advanced data analytics and real-time reporting capabilities to drive decision-making and enhance operational agility."
      ],
    },
    {
      title: "Machine Learning Researcher",
      company: "UMBC Department of Information Systems",
      logo: "https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/03/UMBC-vertical-logo-CMYK-on-black.png",
      duration: "June 2024 – Present",
      points: [
        '• Research Project: "Support Vector Machine for Predicting Student Dropout Under Different Normalization Methods" under Dr. Michael Brown (Summer & Fall 2024).',
        "• Developed machine learning models using Support Vector Machines (SVM) to analyze normalized datasets and predict patterns related to student dropout rates.",
        "• Collaborated with a multidisciplinary team to publish findings and identify impactful normalization strategies."
      ],
    },
    {
      title: "Cybersecurity Research Assistant",
      company: "UMBC Department of Information Systems",
      logo: "https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/03/UMBC-vertical-logo-CMYK-on-black.png",
      duration: "January 2024 – May 2024",
      points: [
        "• Assisted in a research project under Dr. Zhiyuan Chen focusing on the application of deception-based attacks in IoT, specifically in autonomous vehicles, drones, and intelligent support systems.",
        "• Authored an IEEE literature review analyzing advancements in cybersecurity, emphasizing challenges and solutions in deploying deception-based strategies."
      ],
    },
    // Other Experiences (same from before)
    {
      title: "Front Desk Assistant",
      company: "UMBC Residential Life",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvSGBvoJZs1cF9G8NiRzCDe7Zfgr-0Fd2Lg&s",
      duration: "August 2023 – Present",
      points: [
        "• Managed administrative tasks including logging maintenance requests, assisting residents, and maintaining building security.",
        "• Provided exceptional customer service by addressing student concerns and inquiries in a timely and professional manner.",
        "• Collaborated with residential life staff to organize and support community-building events for residents.",
      ],
    },
   {
  title: "Cook",
  company: "Capriotti's Sandwich Shop",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKC8B1QZ1i6yvAyaLqOMa4EP9qX4CvDmz-Pw&s", // Replace with the actual logo link if needed
  duration: "May 2023 – Aug 2023",
  points: [
    "• Prepared high-quality sandwiches and meals, adhering to company recipes and ensuring customer satisfaction.",
    "• Maintained a clean and organized kitchen environment, complying with health and safety standards.",
  ],
},
{
  title: "Home Remodeler",
  company: "JMarra LLC",
  logo: "https://cdn.creazilla.com/cliparts/34224/house-home-clipart-lg.png", // Replace with the actual logo link if needed
  duration: "June 2022 – Aug 2022",
  points: [
    "• Assisted in residential remodeling projects, including painting, flooring, and installation tasks.",
    "• Ensured accurate measurements and attention to detail to maintain high-quality craftsmanship.",
  ],
},
{
  title: "Cashier & Car Hopper",
  company: "Sonic Drive-Inn",
  logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/SONIC_New_Logo_2020.svg", // Replace with the actual logo link if needed
  duration: "May 2021 – Dec 2021",
  points: [
    "• Delivered food orders promptly and accurately while supporting the kitchen staff during peak hours.",
    "• Provided excellent customer service to ensure satisfaction and maintain smooth operations.",
  ],
}

  ];





  const sortedExperiences = experiences.sort((a, b) => {
  const dateA = new Date(a.duration.split(" – ")[1] || new Date()); // Handle 'Present'
  const dateB = new Date(b.duration.split(" – ")[1] || new Date());
  return dateB - dateA; // Sort descending

});


  // Leadership Data
  const leadership = [
  {
    title: "President",
    organization: "Information Systems Security Association (ISSA) - UMBC Chapter",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png", // Replace with the actual logo link
    duration: "April 2024 – Present",
    points: [
      "Led the UMBC chapter of ISSA, fostering collaboration among members to enhance cybersecurity awareness and professional development.",
      "Organized events, workshops, and talks to promote engagement with industry professionals and expand networking opportunities.",
    ],
  },
  {
    title: "Vice President",
    organization: "UMBC Men's Rugby",
    logo: "https://ibb.co/Rc1Q77N", // Replace with the actual logo link
    duration: "May 2024 – Present",
    points: [
      "Coordinated team logistics, including practice schedules, event planning, and tournament participation.",
      "Provided leadership and mentorship to team members, fostering a spirit of teamwork and sportsmanship.",
    ],
    accolades: [
      "Rookie of the Year",
      "Haud Collumni Scholarship Awardee",
      "Scholastic All American",
      "National Collegiate Rugby (NCR) Mid Atlantic All-Star Nominee",
    ],
  },
];


  useEffect(() => {
  const cursor = document.querySelector('.custom-cursor');
  if (!cursor) return; // Ensure the element exists

  const moveCursor = (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  };

  window.addEventListener('mousemove', moveCursor);

  return () => {
    window.removeEventListener('mousemove', moveCursor);
  };
}, []);



  useEffect(() => {
  const circles = document.querySelectorAll('.floating-circle');


  const moveCircles = (e) => {
    const { clientX, clientY } = e;

    circles.forEach((circle, index) => {
      const speed = (index + 1) * 0.1; // Different speeds for each circle
      const x = (clientX * speed) / 10;
      const y = (clientY * speed) / 10;

      circle.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  window.addEventListener('mousemove', moveCircles);

  return () => window.removeEventListener('mousemove', moveCircles);
}, []);



  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ duration: 1000 });

    // Typing animation logic
    let typingSpeed = isDeleting ? 50 : 150;
    let timeout;

    if (!isDeleting && displayText === words[currentWordIndex]) {
      timeout = setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to next word
    } else {
      timeout = setTimeout(() => {
        const currentWord = words[currentWordIndex];
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1) // Deleting
            : currentWord.substring(0, prev.length + 1) // Typing
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);





  return (
      <div className="home">
        <div className="hero" id="home">
          <div className="custom-cursor"></div>
          {/* Custom cursor */}
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <img src={headshot1} alt="Leon Tang" className="headshot"/>
          <h1 className="fade-in">Hi, I'm Leon Tang</h1>
          <h2 className="typewriter">
            Aspiring <span className="dynamic-text">{displayText}</span>
          </h2>
          <p>Welcome to my portfolio!</p>
          <div className="hero-links">
            <a href="#about" className="btn">Learn More About Me</a>
          </div>
        </div>


        <section id="about" className="section about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Leon Tang. Come learn more about me on my site & feel free to reach out !
          </p>
          <div className="about-links">
            <a
                href="/path-to-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="View My Resume"
            >
              <img
                  src="https://cdn-icons-png.flaticon.com/512/3258/3258479.png"
                  alt="Resume"
                  className="about-logo"
              />
            </a>
            <a
                href="https://github.com/tangleon8"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit My GitHub"
            >
              <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub"
                  className="about-logo"
              />
            </a>
            <a
                href="https://www.linkedin.com/in/leon-tang-4328b6246/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit My LinkedIn"
            >
              <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="about-logo"
              />
            </a>
          </div>
        </section>

        <section id="education" className="section education">
          <h2>Education</h2>
          <div className="education-grid">
            <div className="education-card" data-aos="fade-up">
              <img
                  src="https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/03/UMBC-vertical-logo-CMYK-on-black.png"
                  alt="University of Maryland, Baltimore County "
                  className="education-logo"
              />
              <h3>University of Maryland, Baltimore County </h3>
              <p>
                <strong>Bachelor of Science in Information Systems</strong>
              </p>
              <p>
                Junior Class · Expected Graduation: <strong>Spring 2026</strong>
              </p>
              <p>
                <strong>Accelerated BS/MS Program Graduate</strong>
              </p>
              <p>
                GPA: <strong>3.67</strong> · President's List
              </p>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="section projects" data-aos="fade-up">
          <h2>My Projects</h2>
          <div className="project-carousel">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <img src={project.image} alt={project.title} className="project-image"/>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link && (
                      <p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                          Read more about it here
                        </a>
                      </p>
                  )}
                </div>
            ))}
          </div>
          <button
              className="btn project-arrow left"
              onClick={() => {
                document.querySelector('.project-carousel').scrollBy({
                  left: -300,
                  behavior: 'smooth',
                });
              }}
          >
            ⬅
          </button>
          <button
              className="btn project-arrow right"
              onClick={() => {
                document.querySelector('.project-carousel').scrollBy({
                  left: 300,
                  behavior: 'smooth',
                });
              }}
          >
            ➡
          </button>
        </section>


        {/* Experience Section */}


        <section id="experience" className="timeline-section">
          <h2>Experience</h2>
          <div className="timeline">
            {experiences.map((experience, index) => (
                <div
                    key={index}
                    className={`timeline-item ${index % 10 === 0 ? "left" : "right"}`}
                    style={{animationDelay: `${index * 100.0}s`}} // Delay for staggered animation
                >
                  {/* Centered Logo */}
                  <div className="timeline-logo">
                    <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="company-logo"
                    />
                  </div>

                  {/* Content */}
                  <div className="timeline-content">
                    <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4>
                    <h5>{experience.duration}</h5>
                    <ul>
                      {experience.points.map((point, i) => (
                          <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
            ))}
          </div>
          <button
              className="btn experience-arrow left"
              onClick={() => {
                document.querySelector('.experience-carousel').scrollBy({
                  left: -300,
                  behavior: 'smooth',
                });
              }}
          >
            ⬅
          </button>
          <button
              className="btn experience-arrow right"
              onClick={() => {
                document.querySelector('.experience-carousel').scrollBy({
                  left: 300,
                  behavior: 'smooth',
                });
              }}
          >
            ➡
          </button>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="section leadership" data-aos="fade-up">
          <h2>Leadership Experience</h2>
          <div className="leadership-grid">
            {leadership.map((role, index) => (
                <div
                    key={index}
                    className="leadership-card"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                >
                  <div className="leadership-logo">
                    <img
                        src={role.logo}
                        alt={`${role.organization} logo`}
                        className="organization-logo"
                    />
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

  {/* Skills Section */
  }
  <section id="skills" className="section skills" data-aos="fade-up">
    <h2>My Skills</h2>
    <div className="skills-container">
      {/* Interpersonal Skills */}
      <div className="skills-category">
        <h3>Interpersonal</h3>
        <div className="skills-grid">
          <div className="skill-item"><FaUsers className="skill-icon"/> Team Player</div>
          <div className="skill-item"><FaCrown className="skill-icon"/> Leader</div>
          <div className="skill-item"><FaHardHat className="skill-icon"/> Hard Worker</div>
          <div className="skill-item"><FaHandshake className="skill-icon"/> Customer Service</div>
          <div className="skill-item"><FaEye className="skill-icon"/> Attention to Detail</div>
          <div className="skill-item"><FaRecycle className="skill-icon"/> Flexible</div>
          <div className="skill-item"><FaShieldAlt className="skill-icon"/> Integrity/Honesty</div>
              </div>
            </div>

            {/* Functional Skills */}
            <div className="skills-category">
              <h3>Functional</h3>
              <div className="skills-grid">
                <div className="skill-item"><FaLaptopCode className="skill-icon"/> Information Technology/Systems</div>
                <div className="skill-item"><FaProjectDiagram className="skill-icon"/> Business/Project Management</div>
                <div className="skill-item"><FaLayerGroup className="skill-icon"/> Agile</div>
                <div className="skill-item"><FaTasks className="skill-icon"/> Scrum</div>
                <div className="skill-item"><FaLock className="skill-icon"/> Cybersecurity</div>
                <div className="skill-item"><FaChartBar className="skill-icon"/> Data Analyst</div>
                <div className="skill-item"><FaBrain className="skill-icon"/> AI/ML</div>
                <div className="skill-item"><FaMicrosoft className="skill-icon"/> Microsoft Office</div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="skills-category">
              <h3>Technical</h3>
              <div className="skills-grid">
                <div className="skill-item"><FaPython className="skill-icon"/> Python</div>
                <div className="skill-item"><SiCplusplus className="skill-icon"/> C++</div>
                <div className="skill-item"><FaDatabase className="skill-icon"/> SQL</div>
                <div className="skill-item"><FaJs className="skill-icon"/> JavaScript</div>
                <div className="skill-item"><FaLinux className="skill-icon"/> Linux</div>
                <div className="skill-item"><SiSwift className="skill-icon"/> Swift</div>
                <div className="skill-item"><SiCsharp className="skill-icon"/> C#</div>
                <div className="skill-item"><FaHtml5 className="skill-icon"/> HTML/CSS</div>
                <div className="skill-item"><FaPhp className="skill-icon"/> PHP</div>
                <div className="skill-item"><SiLatex className="skill-icon"/> LaTeX</div>
              </div>
            </div>
          </div>


        </section>

        {/* Contact Me Section */}
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>
          <p>Have questions or want to work together? Feel free to reach out!</p>
          <a href="mailto:leontang27@icloud.com" className="contact-button">Send Me an Email</a>
        </section>


      </div>

  );
};

export default Home;
