import React from 'react';
import { Slider } from '../components/Slider/Slider';

export const Home = () => {
  return (
    <div className='grid-container'>
      <div className='grid-global'>
        <h1 className='homepage-item__h1'>
      Welcome to Nice Gadgets store!
        </h1>

        <div className='homepage-item__slider'>
          <Slider />
        </div>

        <div className='homepage-item__section'>

        </div>

        <div className='homepage-item__section'>

        </div>

      </div>
    </div>
  );
};
