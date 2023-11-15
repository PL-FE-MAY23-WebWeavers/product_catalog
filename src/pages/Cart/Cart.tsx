import React from 'react';
import { ButtonBack } from '../../components/utils/ButtonBack/ButtonBack';
import { Wrapper } from '../../components/utils/Wrapper/Wrapper';
import './cart.scss';
import { CartItem } from '../../components/CartItem/CartItem';
import { useProductCatalog } from '../../context/ProductCatalogContext';
import emptyCart from '../../images/empty-cart.png';

export const Cart: React.FC = () => {
  const { cartItems } = useProductCatalog();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <Wrapper>
        <ButtonBack />
        <h1 className="cart__h1">Cart</h1>
        {cartItems.length === 0 ? (
          <div className="cart__empty">
            <img
              src={emptyCart}
              alt="empty cart"
              className="cart__empty__img"
            />
            <p className="cart__empty__msg">Your cart is empty</p>
          </div>
        ) : (
          <div className="cart__grid grid-global">
            <div className="cart__left">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="cart__right">
              <div className="cart__checkout">
                <div className="cart__checkout__total">${totalPrice}</div>
                <div className="cart__checkout__sumary">
                  Total for {totalQuantity}{' '}
                  {totalQuantity === 1 ? 'item' : 'items'}
                </div>
                <span className="cart__checkout__br"></span>
                <button
                  className="cart__checkout__button"
                  aria-label="Proceed to Checkout"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </section>
  );
};
