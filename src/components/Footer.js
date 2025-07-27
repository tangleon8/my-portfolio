import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background: linear-gradient(135deg, 
              rgba(0, 0, 0, 0.95) 0%, 
              rgba(20, 20, 20, 0.9) 25%,
              rgba(0, 0, 0, 0.95) 50%,
              rgba(40, 0, 0, 0.9) 75%,
              rgba(0, 0, 0, 0.95) 100%);
            text-align: center;
            padding: 4rem 2rem 3rem;
            color: #ffffff;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 1.1rem;
            border-top: 4px solid #e50914;
            margin-top: 4rem;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            box-shadow: 
              0 -8px 32px rgba(229, 9, 20, 0.2),
              0 0 60px rgba(0, 0, 0, 0.8),
              inset 0 4px 0 rgba(229, 9, 20, 0.1);
            animation: footerReveal 1.2s ease-out;
          }

          @keyframes footerReveal {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(229, 9, 20, 0.8) 25%, 
              rgba(255, 215, 0, 0.6) 50%, 
              rgba(229, 9, 20, 0.8) 75%, 
              transparent 100%);
            animation: footerPulse 3s ease-in-out infinite;
            box-shadow: 0 0 20px rgba(229, 9, 20, 0.6);
          }

          .footer::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(229, 9, 20, 0.1), 
              transparent);
            animation: footerShimmer 4s ease-in-out infinite;
            pointer-events: none;
          }

          @keyframes footerPulse {
            0%, 100% { 
              opacity: 0.6; 
              transform: scaleX(1);
            }
            50% { 
              opacity: 1; 
              transform: scaleX(1.02);
            }
          }

          @keyframes footerShimmer {
            0% { left: -100%; }
            50% { left: 100%; }
            100% { left: 100%; }
          }

          .footer-content {
            position: relative;
            z-index: 10;
            animation: contentFadeIn 1.5s ease-out 0.3s both;
          }

          @keyframes contentFadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .footer p {
            margin: 0;
            line-height: 1.8;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.9);
            position: relative;
            max-width: 600px;
            margin: 0 auto;
          }

          .footer-brand {
            background: linear-gradient(135deg, #e50914 0%, #ff6b35 50%, #e50914 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
            font-size: 1.2em;
            text-transform: uppercase;
            letter-spacing: 2px;
            animation: brandGlow 3s ease-in-out infinite alternate;
            display: inline-block;
            margin: 0 0.5rem;
          }

          @keyframes brandGlow {
            0% {
              filter: drop-shadow(0 0 5px rgba(229, 9, 20, 0.4));
            }
            100% {
              filter: drop-shadow(0 0 15px rgba(229, 9, 20, 0.8));
            }
          }

          .footer-link {
            color: #e50914;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            position: relative;
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            overflow: hidden;
          }

          .footer-link::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #e50914, #ffd700, #e50914);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transform: translateX(-50%);
            border-radius: 1px;
          }

          .footer-link::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(229, 9, 20, 0.2), 
              transparent);
            transition: left 0.6s ease;
            z-index: -1;
          }

          .footer-link:hover::after {
            left: 100%;
          }

          .footer-link:hover {
            color: #ffffff;
            background: rgba(229, 9, 20, 0.1);
            text-shadow: 0 0 12px rgba(229, 9, 20, 0.8);
            transform: translateY(-2px) scale(1.05);
            box-shadow: 
              0 4px 15px rgba(229, 9, 20, 0.4),
              0 0 20px rgba(229, 9, 20, 0.3);
          }

          .footer-link:hover::before {
            width: 100%;
            box-shadow: 0 0 10px rgba(229, 9, 20, 0.8);
          }

          .footer-emoji {
            display: inline-block;
            animation: emojiFloat 2s ease-in-out infinite;
            margin: 0 0.5rem;
          }

          @keyframes emojiFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-3px) rotate(2deg); }
          }

          .footer-divider {
            display: inline-block;
            margin: 0 1rem;
            color: rgba(229, 9, 20, 0.6);
            font-weight: 700;
            animation: dividerPulse 2s ease-in-out infinite;
          }

          @keyframes dividerPulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }

          .footer-floating-elements {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
          }

          .floating-dot {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(229, 9, 20, 0.6);
            border-radius: 50%;
            animation: floatUp 8s linear infinite;
          }

          .floating-dot:nth-child(1) {
            left: 10%;
            animation-delay: -2s;
            animation-duration: 6s;
          }

          .floating-dot:nth-child(2) {
            left: 20%;
            animation-delay: -4s;
            animation-duration: 8s;
          }

          .floating-dot:nth-child(3) {
            left: 30%;
            animation-delay: -1s;
            animation-duration: 7s;
          }

          .floating-dot:nth-child(4) {
            left: 70%;
            animation-delay: -3s;
            animation-duration: 9s;
          }

          .floating-dot:nth-child(5) {
            left: 80%;
            animation-delay: -5s;
            animation-duration: 6s;
          }

          .floating-dot:nth-child(6) {
            left: 90%;
            animation-delay: -1.5s;
            animation-duration: 8s;
          }

          @keyframes floatUp {
            0% {
              bottom: -10px;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              bottom: 100%;
              opacity: 0;
            }
          }

          @media (max-width: 768px) {
            .footer {
              padding: 3rem 1.5rem 2rem;
              font-size: 1rem;
            }

            .footer-brand {
              font-size: 1.1em;
              letter-spacing: 1px;
            }
          }

          @media (max-width: 480px) {
            .footer {
              padding: 2.5rem 1rem 1.5rem;
              font-size: 0.9rem;
            }

            .footer-brand {
              font-size: 1em;
            }

            .footer-divider {
              margin: 0 0.5rem;
            }
          }
        `}
      </style>
      <footer className="footer">
        <div className="footer-floating-elements">
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
        </div>
        <div className="footer-content">
          <p>
            © Designed & Made by Leon Tang (me) <span className="footer-emoji">🎬</span> Last updated July 2025
            <br />
            <a
              href="https://kyancox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Website Inspiration
            </a>
            <span className="footer-divider">|</span>
            Netflix Theme by <span className="footer-brand">LEONFLIX</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
