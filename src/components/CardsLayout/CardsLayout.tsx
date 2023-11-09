/* eslint-disable indent */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePhonesContext } from '../../providers/PhonesProvider/PhonesProvider';
import { Card } from '../Card/Card';
import { useProductCatalog } from '../../context/ProductCatalogContext';
import { CardFavs } from '../CardFavs/CardFavs';

export const CardsLayout: React.FC = () => {
  const { phones } = usePhonesContext();
  const { favourites } = useProductCatalog();
  const location = useLocation();

  const isFavouritesPage = location.pathname.endsWith('/favourites');

  return (
    <div className="cards-layout">
      {isFavouritesPage
        ? favourites.map((favPhone) => (
            <CardFavs key={favPhone.id} item={favPhone} />
          ))
        : phones.rows.map((phone) => <Card key={phone.id} item={phone} />)}
    </div>
  );
};
