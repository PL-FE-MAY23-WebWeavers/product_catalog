import React from 'react';
import { usePhonesContext } from '../../providers/PhonesProvider/PhonesProvider';
import { Card } from '../Card/Card';

export const CardsLayout = () => {
  const { phones } = usePhonesContext();
  console.log(phones);
  return (
    <div className='homepage-catalog__layout'>
      {phones.rows.map(phone => (
        <Card key={phone.id} item={phone}/>
      ))}
    </div>
  );
};
