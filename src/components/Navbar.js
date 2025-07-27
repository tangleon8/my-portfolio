import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced smooth scroll to section with faster animation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Add visual feedback
      element.classList.add('scroll-target-active');
      setTimeout(() => {
        element.classList.remove('scroll-target-active');
      }, 600); // Faster animation

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  // Detect active section and update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'professional-experience', 'research-experience', 'skills', 'hobbies', 'contact'];
      const scrollPosition = window.scrollY + 150;

      // Update scroll progress with better accuracy
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, Math.round(progress))));

      // Update active section with better accuracy
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop - 120; // Account for navbar height
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (sectionId) => {
    return activeSection === sectionId;
  };

  return (
    <nav className="navbar">
      {/* Scroll progress indicator */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{
          width: `${scrollProgress}%`
        }}></div>
      </div>
      
      {/* Interactive floating elements */}
      <div className="navbar-floaters">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`nav-floater nav-floater-${i + 1}`} />
        ))}
      </div>
      
      {/* Moving neural lines */}
      <div className="navbar-neural-lines">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`nav-neural-line nav-neural-${i + 1}`} />
        ))}
      </div>

      {/* Dynamic background */}
      <div 
        className="navbar-dynamic-bg"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(229, 9, 20, 0.1) 0%, transparent 50%)`
        }}
      />

      <div className="navbar-container">
        {/* Logo */}
        <button onClick={() => scrollToSection('home')} className="navbar-logo">
          LEONFLIX
        </button>

        {/* Toggler (visible on mobile) */}
        <button
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className={`navbar-toggler${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links */}
        <div
          className={`navbar-links${menuOpen ? ' active' : ''}`}
        >
          <button onClick={() => scrollToSection('home')} className={`navbar-link ${isActive('home') ? 'active' : ''}`}>Home</button>
          <button onClick={() => scrollToSection('education')} className={`navbar-link ${isActive('education') ? 'active' : ''}`}>Education</button>
          <button onClick={() => scrollToSection('professional-experience')} className={`navbar-link ${isActive('professional-experience') ? 'active' : ''}`}>Professional</button>
          <button onClick={() => scrollToSection('research-experience')} className={`navbar-link ${isActive('research-experience') ? 'active' : ''}`}>Research</button>
          <button onClick={() => scrollToSection('skills')} className={`navbar-link ${isActive('skills') ? 'active' : ''}`}>Skills</button>
          <button onClick={() => scrollToSection('hobbies')} className={`navbar-link ${isActive('hobbies') ? 'active' : ''}`}>Hobbies</button>
          <button onClick={() => scrollToSection('contact')} className={`navbar-link ${isActive('contact') ? 'active' : ''}`}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;