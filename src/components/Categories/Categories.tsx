import React from 'react';
import './categories.scss';
import { Category } from '../Category/Category';

export const Categories = () => {
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
    <div className='categories'>
      {imgs.map((img, index) => {
        return (
          <div key={index} className='category-item'>
            <Category
              categoryImg={url + img}
              category={categories[index]}
              index={index}
            />
          </div>
        );})
      }
    </div>
  );
};
