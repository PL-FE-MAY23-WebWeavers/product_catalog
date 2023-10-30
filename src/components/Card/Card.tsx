import React from 'react';
import { Item } from '../../types/Item';
import { Link } from 'react-router-dom';

type CardProps = {
item: Item,
}

export const Card = ({item}: CardProps ) => {
  return (
    <div className='card card__background'>
      <Link to={`/:${item.itemId}`} className='card card__link'>
        <img src={item.image} className='card card__img'></img>
      </Link>

      <p className='card card__title'>
        {item.name}
      </p>

      <div className='card card__prices'>
        <h3 className='card card__price'>
          {item.price}
        </h3>

        <h3 className='card card__fullprice'>
          {item.fullPrice}
        </h3>
      </div>

      <div className='card card__divider'/>

      <div>
        <div className='card small-text card__info'>
          <p className='card card__info-name small-text'>
            Screen
          </p>
          <p className='card card__info-tag small-text'>
            {item.screen}
          </p>
        </div>

        <div className='card card__info'>
          <p className='card card__info-name small-text'>
            Capacity
          </p>
          <p className='card card__info-tag small-text'>
            {item.capacity}
          </p>
        </div>

        <div className='card card__info'>
          <p className='card card__info-name small-text'>
            RAM
          </p>
          <p className='card card__info-tag small-text'>
            {item.ram}
          </p>
        </div>
      </div>

      <div className='card card__buttons'>
        <button className='card card__button'>
            Add to cart
        </button>
        <button className='card card__fav'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.62803 1.63142C10.158 1.41184 10.7259 1.29883 11.2996 1.29883C11.8732 1.29883 12.4412 1.41184 12.9711 1.63142C13.501 1.85099 13.9825 2.17282 14.388 2.57852C14.7936 2.98398 15.1153 3.46537 15.3349 3.99519C15.5544 4.52511 15.6674 5.0931 15.6674 5.66671C15.6674 6.24032 15.5544 6.80831 15.3349 7.33824C15.1153 7.86811 14.7935 8.34953 14.3879 8.75502C14.3878 8.75506 14.3879 8.75498 14.3879 8.75502L8.49453 14.6484C8.22117 14.9217 7.77795 14.9217 7.50458 14.6484L1.61125 8.75502C0.79218 7.93595 0.332031 6.82505 0.332031 5.66671C0.332031 4.50837 0.79218 3.39747 1.61125 2.5784C2.43032 1.75933 3.54122 1.29918 4.69956 1.29918C5.8579 1.29918 6.9688 1.75933 7.78787 2.5784L7.99956 2.7901L8.21113 2.57852C8.2111 2.57856 8.21117 2.57848 8.21113 2.57852C8.61662 2.17288 9.09816 1.85097 9.62803 1.63142ZM13.3978 3.56824C13.1223 3.29261 12.7952 3.07396 12.4352 2.92479C12.0751 2.77561 11.6893 2.69883 11.2996 2.69883C10.9099 2.69883 10.524 2.77561 10.1639 2.92479C9.80392 3.07396 9.47681 3.29261 9.20132 3.56824L8.49453 4.27502C8.22117 4.54839 7.77795 4.54839 7.50458 4.27502L6.79792 3.56835C6.2414 3.01183 5.4866 2.69918 4.69956 2.69918C3.91252 2.69918 3.15772 3.01183 2.6012 3.56835C2.04468 4.12487 1.73203 4.87967 1.73203 5.66671C1.73203 6.45375 2.04468 7.20855 2.6012 7.76507L7.99956 13.1634L13.3979 7.76507C13.6735 7.48957 13.8923 7.16235 14.0415 6.80233C14.1907 6.4423 14.2674 6.05642 14.2674 5.66671C14.2674 5.27701 14.1907 4.89112 14.0415 4.5311C13.8923 4.17107 13.6734 3.84374 13.3978 3.56824Z" fill="#313237"/>
          </svg>
        </button>
      </div>

    </div>
  );
};