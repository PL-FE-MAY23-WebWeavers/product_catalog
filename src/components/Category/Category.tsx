import React from 'react';
import './category.scss';

type CategoryProps = {
categoryImg: string,
category: string,
index: number,
}

export const Category = ({ categoryImg, category, index }: CategoryProps ) => {
  return (
    <div className='category'>
      <img
        src={categoryImg}
        alt={category}
        className={`category__img category__img--${index}`}/>
      <h4>
        {category}
      </h4>
      <p>95 models</p>
    </div>
  );
};
