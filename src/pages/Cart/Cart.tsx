import React from 'react';
import { ButtonBack } from '../../components/utils/ButtonBack/ButtonBack';
import { Wrapper } from '../../components/utils/Wrapper/Wrapper';
import './cart.scss';
import { CartItem } from '../../components/CartItem/CartItem';
import { useProductCatalog } from '../../context/ProductCatalogContext';

export const Cart: React.FC = () => {
  const { cartItems } = useProductCatalog();

  return (
    <section className="cart">
      <Wrapper>
        <ButtonBack />
        <h1 className="cart__h1">Cart</h1>
        {cartItems.length === 0 ? (
          <div>yes</div>
        ) : (
          <div className="cart__grid grid-global">
            <div className="cart__left">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="cart__right">
              <div className="cart__checkout">
                <div className="cart__checkout__total">$2657</div>
                <div className="cart__checkout__sumary">Total for 3 items</div>
                <span className="cart__checkout__br"></span>
                <button className="cart__checkout__button">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </section>
  );
};
