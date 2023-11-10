import React from 'react';
import { Link } from 'react-router-dom';
import './CartItem.scss';
import { CartItem as CartItemTypes } from '../../types/CartItem';
import { useProductCatalog } from '../../context/ProductCatalogContext';

type CartItemProps = {
  item: CartItemTypes;
};

const BASE_URL = 'https://-app.onrender.com/';

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useProductCatalog();

  const handleIncreaseQuantity = () => increaseCartQuantity(item);
  const handleDecreaseQuantity = () => decreaseCartQuantity(item.id);
  const handleRemoveItem = () => removeFromCart(item.id);

  return (
    <div className="cart-item">
      <div className="cart-item__row">
        <button
          className="cart-item__remove"
          onClick={handleRemoveItem}
        ></button>
        <Link to={`/phones/:${item.id}`} className="cart-item__link">
          <img
            className="cart-item__image"
            src={BASE_URL + item.image}
            alt="Cart item image"
          />
          <div className="cart-item__name">{item.name}</div>
        </Link>
      </div>
      <div className="cart-item__row">
        <div className="cart-item__count">
          <button
            className="cart-item__button cart-item__button--decrease"
            onClick={handleDecreaseQuantity}
            disabled={item.quantity === 1}
          />
          <div className="cart-item__amount">{item.quantity}</div>
          <button
            className="cart-item__button cart-item__button--increase"
            onClick={handleIncreaseQuantity}
          />
        </div>
        <div className="cart-item__price">${item.price}</div>
      </div>
    </div>
  );
};
