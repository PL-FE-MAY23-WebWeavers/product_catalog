import React from 'react';
import { Categories } from '../components/Categories/Categories';
import { Slider } from '../components/Slider/Slider';

export const Home = () => {
  return (
    <div className='grid-container'>
      <div className='grid-global'>
        <h1 className='homepage-item__h1'>
          Welcome to Nice Gadgets store!
        </h1>

        <section className='homepage-item__slider'>
          <Slider />
        </section>

        <section className='homepage-item__section'>
        </section>

        <section className='homepage-item__section section__category'>
          <Categories />
        </section>

        <section className='homepage-item__section'>
        </section>
      </div>
    </div>
  );
};
