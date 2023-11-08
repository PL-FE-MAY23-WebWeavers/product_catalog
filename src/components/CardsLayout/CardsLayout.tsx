import React from 'react';
import { usePhonesContext } from '../../providers/PhonesProvider/PhonesProvider';
import { Card } from '../Card/Card';

export const CardsLayout: React.FC = () => {
  const { phones } = usePhonesContext();

  return (
    <div className='cards-layout'>
      {phones.rows.map(phone => (
        <Card key={phone.id} item={phone}/>
      ))}
    </div>
  );
};
