import React from 'react';
import './buttonDefault.scss';
import cn from 'classnames';

type ButtonDefaultProps = {
  handleAddToCart: () => void;
};

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({ handleAddToCart }) => {
  return (
    <button
      className={cn({
        'button-default': true,
        'button-default__added': false,
      })}
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  );
};
