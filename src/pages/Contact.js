import React from 'react';

const Contact = () => {
  return (
    <div style={{ 
      padding: '100px 20px 50px', 
      background: '#000000', 
      color: '#ffffff', 
      minHeight: '100vh',
      textAlign: 'center' 
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #e50914, #ff6b35)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Contact Me
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#e5e5e5' }}>
        This page is currently under construction. Please visit the Home page for contact information.
      </p>
      <a 
        href="/" 
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          background: 'linear-gradient(135deg, #e50914, #f40612)',
          color: '#ffffff',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 8px 25px rgba(229, 9, 20, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }}
      >
        Back to Home
      </a>
    </div>
  );
};

export default Contact;