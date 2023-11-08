import React from 'react';
import './cardsSlider.scss';
import { Phone } from '../../types/Phones';

type CardsSliderProps = {
items: Phone[],
title: string,
}

export const CardsSlider = ({ items, title }: CardsSliderProps ) => {
  return (
    <div className='cards-slider__section'>
      <div className='section__title'>
        <h2 className='title'>{title}</h2>
        {/* <ButtonSlide />
        <ButtonSlide /> */}
      </div>
    </div>
  );
};
