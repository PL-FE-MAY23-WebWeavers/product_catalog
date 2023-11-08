import React from 'react';
import './buttonFavs.scss';

type ButtonFavsProps = {
  handleFavouritesToggle: () => void;
  isFavouritesSelected: boolean;
};

export const ButtonFavs = ({ handleFavouritesToggle, isFavouritesSelected }: ButtonFavsProps) => {
  return (
    <button className={`button__fav ${
      isFavouritesSelected ? 'button__fav-filled' : ''
    }`}
    onClick={handleFavouritesToggle}>
    </button>
  );
};
