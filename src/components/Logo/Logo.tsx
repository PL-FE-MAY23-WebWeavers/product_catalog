import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './logo.scss';

export function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <img src={logo} alt="logo" className="logo__img" />
      </Link>
    </div>
  );
}
