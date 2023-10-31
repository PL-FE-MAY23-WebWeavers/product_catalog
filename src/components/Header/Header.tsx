import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import cn from 'classnames';
import './header.scss';

export const Header = () => (
  <header className='header'>
    <div className="header__top" id="header__top">
      <Logo/>
    </div>
    <nav className='header__nav'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          cn('header__link', {
            'is-active': isActive,
          })
        }>
          Home
      </NavLink>
      <NavLink
        to='/phones'
        className={({ isActive }) =>
          cn('header__link', {
            'is-active': isActive,
          })
        }>
          Phones
      </NavLink>
      <NavLink
        to='/tablets'
        className={({ isActive }) =>
          cn('header__link', {
            'is-active': isActive,
          })
        }>
          Tablets
      </NavLink>
      <NavLink
        to='/accessories'
        className={({ isActive }) =>
          cn('header__link', {
            'is-active': isActive,
          })
        }>
          Accessories
      </NavLink>
    </nav>
    <div className='header__sub-nav'>
      <NavLink
        to='/favourites'
        className={({ isActive }) =>
          cn('header__ico-link header__ico-link--favs', {
            'is-active': isActive,
          })
        }>
      </NavLink>
      <NavLink
        to='/cart'
        className={({ isActive }) =>
          cn('header__ico-link header__ico-link--cart', {
            'is-active': isActive,
          })
        }>
      </NavLink>
    </div>
  </header>
);
