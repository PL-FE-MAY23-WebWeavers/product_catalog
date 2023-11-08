import React from 'react';
import { Categories } from '../components/Categories/Categories';
import { Slider } from '../components/Slider/Slider';
import { CardsSlider } from '../components/CardsSlider/CardsSlider';

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
          <CardsSlider
            title='Brand new models'
            items={[{
              id: 1,
              category: 'phones',
              phoneId: 'apple-iphone-11-128gb-yellow',
              itemId: 'apple-iphone-11-128gb-yellow',
              name: 'Apple iPhone 11 128GB Yellow',
              fullPrice: 1100,
              price: 1050,
              screen: '6.1\' IPS',
              capacity: '128GB',
              color: 'yellow',
              ram: '4GB',
              year: 2019,
              image: 'img/phones/apple-iphone-7/black/00.jpg'
            }]}
          />
        </section>

        <section className='homepage-item__section section__category'>
          <Categories />
        </section>

        <section className='homepage-item__section homepage-item__recomend'>
          <CardsSlider
            title='Brand new models'
            items={[{
              id: 1,
              category: 'phones',
              phoneId: 'apple-iphone-11-128gb-yellow',
              itemId: 'apple-iphone-11-128gb-yellow',
              name: 'Apple iPhone 11 128GB Yellow',
              fullPrice: 1100,
              price: 1050,
              screen: '6.1\' IPS',
              capacity: '128GB',
              color: 'yellow',
              ram: '4GB',
              year: 2019,
              image: 'img/phones/apple-iphone-7/black/00.jpg'
            }]}
          />
        </section>
      </div>
    </div>
  );
};
