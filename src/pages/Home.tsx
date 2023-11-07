import React from 'react';
import { Category } from '../components/Category/Category';

export const Home = () => {
  const url = 'https://webweavers.onrender.com/img/';
  const imgs = [
    'category-phones.png',
    'category-tablets.png',
    'category-accessories.png',
  ];
  const categories = [
    'Mobile phones',
    'Tablets',
    'Accessories',
  ];

  return (
    <div className='grid-global'>
      <h1 className='homepage-item__h1'>
      Welcome to Nice Gadgets store!
      </h1>

      <section className='homepage-item__section'>

      </section>

      <section className='homepage-item__section'>
        <h2>
          Shop by category
        </h2>
        {imgs.map((img, index) => {
          return (
            <Category
              key={index}
              categoryImg={url + img}
              category={categories[index]}
              index={index}
            />
          );})
        }
      </section>

      <section className='homepage-item__section'>

      </section>

    </div>
  );
};
