import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import arrowUp from '../../images/ArrowUp.svg';
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
        <Logo />

        <div className="footer__nav">
          <Link
            to="https://PL-FE-MAY23-WebWeavers.github.io/react_phone-catalog/"
            target="_blank"
            className={'footer__nav footer__nav-link'}
          >
            Github
          </Link>

          <Link
            to="/contacts"
            className={'footer__nav footer__nav-link'}
          >
            Contacts
          </Link>

          <Link
            to="/rights"
            className={'footer__nav footer__nav-link'}
          >
            Rights
          </Link>

        </div>

        <div className="footer__back-to-top">
          <Link
            to={{pathname}}
            className='footer__back-label'
            onClick={handleScroll}
          >
            Back to top
          </Link>

          <Link
            to={{pathname}}
            className='footer__back-button'
            onClick={handleScroll}
          >
            <img
              src={arrowUp}
              alt="arrow"
              className="icon__arrow"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
