import React from 'react';
import './CartItem.scss';

type CartItemProps = {
  name: string;
  imgURL: string;
  price: number;
};

export const CartItem: React.FC<CartItemProps> = ({ name, price, imgURL }) => (
  <div className="cart-item">
    <div className="cart-item__row">
      <button className="cart-item__remove"></button>
      <img
        className="cart-item__image"
        src={`${[imgURL]}`}
        alt="Cart item image"
      />
      <div className="cart-item__name">
        {name}
      </div>
    </div>
    <div className="cart-item__row">
      <div className="cart-item__count">
        <button
          className="cart-item__button cart-item__button--decrease"
          disabled
        />
        <div className="cart-item__amount">1</div>
        <button className="cart-item__button cart-item__button--increase" />
      </div>
      <div className="cart-item__price">${price}</div>
    </div>
  </div>
);
