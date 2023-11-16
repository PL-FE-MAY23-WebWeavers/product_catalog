import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import './Footer.scss';

export const Footer: React.FC = () => {
  // This hook returns the current location object.
  const { pathname } = useLocation();
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <Logo />
        </div>

        <nav className="footer__nav">
          <a
            href="https://PL-FE-MAY23-WebWeavers.github.io/react_phone-catalog/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__nav-link"
            aria-label="Go to GitHub"
          >
            Github
          </a>

          <Link
            to="/contacts"
            className="footer__nav-link"
            aria-label="Go to Contacts"
          >
            Contacts
          </Link>

          <Link
            to="/rights"
            className="footer__nav-link"
            aria-label="Go to Rights"
          >
            Rights
          </Link>
        </nav>

        <div className="footer__back-to-top">
          <Link
            to={{ pathname }}
            className="footer__back-label"
            onClick={handleScroll}
            aria-label="back to top"
          >
            Back to top
          </Link>

          <Link
            to={{ pathname }}
            className="footer__back-button"
            onClick={handleScroll}
            aria-label="back to top"
          ></Link>
        </div>
      </div>
    </footer>
  );
};
