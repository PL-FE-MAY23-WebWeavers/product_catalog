import React from 'react';
import { Categories } from '../components/Categories/Categories';

export const Home = () => {

  return (
    <div className='grid-container'>
      <div className='grid-global'>
        <h1 className='homepage-item__h1'>
      Welcome to Nice Gadgets store!
        </h1>

        <section className='homepage-item__section'>

        </section>

        <section className='homepage-item__section section__category'>
          <h2>
          Shop by category
          </h2>
          <Categories />
        </section>

        <section className='homepage-item__section'>

        </section>

      </div>
    </div>
  );
};
