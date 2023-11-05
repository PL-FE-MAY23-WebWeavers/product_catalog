import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import cn from 'classnames';
import './header.scss';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width && width >= 640) {
      setIsMenuOpen(false);
    }
  }, [width]);

  return (
    <header
      className={cn('header', {
        'header--menu-open': isMenuOpen,
      })}
    >
      <div className="header__top" id="header__top">
        <Logo />
        <button
          className={cn('header__menu', {
            'header__menu--active': isMenuOpen,
          })}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="header__menu-icon">
            <div className="header__menu-bar header__menu-bar--top"></div>
            <div className="header__menu-bar header__menu-bar--mid"></div>
            <div className="header__menu-bar header__menu-bar--bottom"></div>
          </div>
        </button>
      </div>

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn('header__link', {
              'header__link--active': isActive,
            })
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/phones"
          className={({ isActive }) =>
            cn('header__link', {
              'header__link--active': isActive,
            })
          }
        >
          Phones
        </NavLink>
        <NavLink
          to="/tablets"
          className={({ isActive }) =>
            cn('header__link', {
              'header__link--active': isActive,
            })
          }
        >
          Tablets
        </NavLink>
        <NavLink
          to="/accessories"
          className={({ isActive }) =>
            cn('header__link', {
              'header__link--active': isActive,
            })
          }
        >
          Accessories
        </NavLink>
      </nav>

      <div className="header__sub-nav">
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            cn('header__ico-link header__ico-link--favs', {
              'header__link--active': isActive,
            })
          }
        ></NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            cn('header__ico-link header__ico-link--cart', {
              'header__link--active': isActive,
            })
          }
        ></NavLink>
      </div>
    </header>
  );
};
