
import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          /* Footer Styling */
          .footer {
            background-color: #0d1117; /* Matches body and navbar background */
            text-align: center;
            padding: 2rem 1rem;
            color: #c9d1d9; /* Matches body text color */
            font-family: 'Exo 2', sans-serif; /* Matches site font */
            font-size: 1rem;
            border-top: 2px solid rgba(0, 123, 255, 0.2); /* Subtle blue border */
            margin-top: 2rem;
          }

          .footer p {
            margin: 0;
            line-height: 1.6;
          }

          .footer-link {
            color: #007bff; /* Primary blue accent */
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease, text-shadow 0.3s ease;
          }

          .footer-link:hover {
            color: #0056b3; /* Darker blue on hover */
            text-decoration: underline;
            text-shadow: 0 0 10px rgba(0, 123, 255, 0.5); /* Matches site glow effect */
          }

          /* Responsive Footer */
          @media (max-width: 768px) {
            .footer {
              padding: 1.5rem 1rem;
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            .footer {
              padding: 1rem 0.5rem;
              font-size: 0.85rem;
            }
          }
        `}
      </style>
      <footer className="footer">
        <p>
          © Designed & Made by Leon Tang (me) 😃. Last updated May 2025{' '}
          <a
            href="https://kyancox.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Website Inspiration
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
