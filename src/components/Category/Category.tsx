import React from 'react';
import './category.scss';
import { Link } from 'react-router-dom';

type CategoryProps = {
  categoryImg: string;
  category: string;
  index: number;
  linkTo: string;
  modelsCount: number;
};

export const Category = ({
  categoryImg,
  category,
  index,
  linkTo,
  modelsCount,
}: CategoryProps) => {
  return (
    <div className="category">
      <Link to={`/${linkTo}`}>
        <div className="category__img-container">
          <img
            src={categoryImg}
            alt={category}
            className={`category__img category__img--${index}`}
          />
        </div>
        <h4 className="category__title">{category}</h4>
      </Link>
      <p className="category__models-numbers">{modelsCount} models</p>
    </div>
  );
};
