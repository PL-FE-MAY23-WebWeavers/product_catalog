import React from 'react';
import './categories.scss';
import { Category } from '../Category/Category';
// import PhonesImg from '../../images/categories/Phones.jpg';
// import TabletsImg from '../../images/categories/Tablets.jpg';
// import AccessoriesImg from '../../images/categories/Accessories.jpg';
import { usePhonesContext } from '../../providers/PhonesProvider/PhonesProvider';

export const Categories = () => {
  const { phones } = usePhonesContext();
  const imgs: string[] = [
    'https://webweavers-app.onrender.com/img/categories/Phones.webp',
    'https://webweavers-app.onrender.com/img/categories/Tablets.webp',
    'https://webweavers-app.onrender.com/img/categories/Accessories.webp',
  ];
  const categories = ['Mobile phones', 'Tablets', 'Accessories'];
  const linkTo = ['phones', 'tablets', 'accessories'];
  const modelsCount = [phones.count, 0, 0];

  return (
    <div className="section__categories">
      <h2 className="section__categories-title">Shop by category</h2>

      <div className="categories">
        {imgs.map((img, index) => {
          return (
            <div key={index} className="category-item">
              <Category
                categoryImg={img}
                category={categories[index]}
                index={index}
                linkTo={linkTo[index]}
                modelsCount={modelsCount[index]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
