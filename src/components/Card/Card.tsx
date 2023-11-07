import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';
import { ButtonFavs } from '../utils/ButtonFavs/ButtonFavs';
import { ButtonDefault } from '../utils/ButtonDefault/ButtonDefault';
import { Phone } from '../../types/Phones';

type CardProps = {
  item: Phone;
};
const BASE_URL = 'https://webweavers.onrender.com/';

export const Card = ({ item }: CardProps) => {
  return (
    <div className='card card__background card-item'>
      <Link to={`/:${item.itemId}`} className='card card__link'>
        <img src={BASE_URL + item.image} className='card card__img'></img>
      </Link>

      <p className='card card__title'>{item.name}</p>

      <div className='card card__prices'>
        <h3 className='card card__price'>{item.price}</h3>

        <h3 className='card card__fullprice'>{item.fullPrice}</h3>
      </div>

      <div className='card card__divider' />

      <div>
        <div className='card small-text card__info'>
          <p className='card card__info-name small-text'>Screen</p>
          <p className='card card__info-tag small-text'>{item.screen}</p>
        </div>

        <div className='card card__info'>
          <p className='card card__info-name small-text'>Capacity</p>
          <p className='card card__info-tag small-text'>{item.capacity}</p>
        </div>

        <div className='card card__info'>
          <p className='card card__info-name small-text'>RAM</p>
          <p className='card card__info-tag small-text'>{item.ram}</p>
        </div>
      </div>

      <div className='card card__buttons'>
        <ButtonDefault />
        <ButtonFavs />
      </div>
    </div>
  );
};
