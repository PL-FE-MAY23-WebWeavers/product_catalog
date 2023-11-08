import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePhonesContext } from '../../providers/PhonesProvider/PhonesProvider';
import { Card } from '../Card/Card';
import { useProductCatalog } from '../../context/ProductCatalogContext';

export const CardsLayout: React.FC = () => {
  const { phones } = usePhonesContext();
  const { favourites } = useProductCatalog();
  const location = useLocation();

  const isFavouritesPage = location.pathname.endsWith('/favourites');

  return (
    <div className='cards-layout'>
      {phones.rows.map(phone => (
        (isFavouritesPage && favourites.some(favoritePhone =>
          favoritePhone.id === phone.id))
          || !isFavouritesPage
          ? <Card key={phone.id} item={phone} />
          : null
      ))}
    </div>
  );
};
