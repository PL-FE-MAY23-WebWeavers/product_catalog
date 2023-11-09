import React from 'react';
import './buttonDefault.scss';
import cn from 'classnames';

type ButtonDefaultProps = {
  handleAddToCart: () => void;
  itemQuantity: number;
};

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  handleAddToCart,
  itemQuantity,
}) => {
  return (
    <button
      className={cn({
        'button-default': true,
        'button-default__added': itemQuantity > 0,
      })}
      onClick={handleAddToCart}
    >
      {itemQuantity > 0 ? 'Added to cart' : 'Add to cart'}
    </button>
  );
};
