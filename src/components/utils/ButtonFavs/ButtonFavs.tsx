import React from 'react';
import './buttonFavs.scss';
import cn from 'classnames';

type ButtonFavsProps = {
  handleFavouritesToggle: () => void;
  isFavouritesSelected: boolean;
};

export const ButtonFavs = ({ handleFavouritesToggle, isFavouritesSelected }: ButtonFavsProps) => {
  return (
    <button
      className={cn('button__fav', {
        'button__fav-filled': isFavouritesSelected,
      })}
      onClick={handleFavouritesToggle}>
    </button>
  );
};
