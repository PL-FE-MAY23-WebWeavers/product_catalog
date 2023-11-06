import React from 'react';
import cn from 'classnames';
import './buttonFavs.scss';

export const ButtonFavs = () => {
  return (
    <button
      className={cn({
        button__fav: true,
        'button__fav-filled': false,
      })}
    ></button>
  );
};
