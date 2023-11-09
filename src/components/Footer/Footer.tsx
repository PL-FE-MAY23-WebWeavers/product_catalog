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

        <ul className="footer__nav">
          <Link
            to="https://PL-FE-MAY23-WebWeavers.github.io/react_phone-catalog/"
            target="_blank"
            className={'footer__nav footer__nav-link'}
          >
            Github
          </Link>

          <Link to="/contacts" className={'footer__nav footer__nav-link'}>
            Contacts
          </Link>

          <Link to="/rights" className={'footer__nav footer__nav-link'}>
            Rights
          </Link>
        </ul>

        <div className="footer__back-to-top">
          <Link
            to={{ pathname }}
            className="footer__back-label"
            onClick={handleScroll}
          >
            Back to top
          </Link>

          <Link
            to={{ pathname }}
            className="footer__back-button"
            onClick={handleScroll}
          ></Link>
        </div>
      </div>
    </footer>
  );
};
