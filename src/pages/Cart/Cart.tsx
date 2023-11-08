import React from 'react';
import { ButtonBack } from '../../components/utils/ButtonBack/ButtonBack';
import { Wrapper } from '../../components/utils/Wrapper/Wrapper';
import './cart.scss';
import { CartItem } from '../../components/CartItem/CartItem';

export const Cart: React.FC = () => {
  return (
    <section className="cart">
      <Wrapper>
        <ButtonBack />
        <h1 className='cart__h1'>
          Cart
        </h1>
        <div className="cart__grid grid-global">
          <div className='cart__left'>
            <CartItem
              name={'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)'}
              imgURL={'https://cdn.shopify.com/s/files/1/0824/3121/t/204/assets/14plus-1682521510056.png?v=1682521531'}
              price={123} />
            <CartItem
              name={'Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)'}
              imgURL={'https://cdn.shopify.com/s/files/1/0824/3121/t/204/assets/14plus-1682521510056.png?v=1682521531'}
              price={123} />
            <CartItem
              name={'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)'}
              imgURL={'https://cdn.shopify.com/s/files/1/0824/3121/t/204/assets/14plus-1682521510056.png?v=1682521531'}
              price={123} />
          </div>
          <div className="cart__right">
            <div className='cart__checkout'>
              <div className="cart__checkout__total">$2657</div>
              <div className="cart__checkout__sumary">Total for 3 items</div>
              <span className="cart__checkout__br"></span>
              <button
                className="cart__checkout__button"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
