import React from 'react';

import { usePhonesContext } from '../providers/PhonesProvider/PhonesProvider';
import { Loader } from '../components/Loader/Loader';
import { CardsLayout } from '../components/CardsLayout/CardsLayout';
import { BreadCrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import { Wrapper } from '../components/utils/Wrapper/Wrapper';
import './phones.scss';
import { useProductCatalog } from '../context/ProductCatalogContext';

export const Favourites: React.FC = () => {
  const { isLoading } = usePhonesContext();
  const { favourites } = useProductCatalog();

  return (
    <section className="phones">
      <Wrapper>
        <BreadCrumbs />
        <h1 className="phones__h1">Favourites</h1>
        <p className="phones__count p">{favourites.length} models</p>
        {favourites.length === 0 && (
          <h3 className="phones__h1">
            No phones have been added to favourites!
          </h3>
        )}
        {isLoading && <Loader />}
        <div className="phones__grid grid-global">
          <CardsLayout />
          {!isLoading}
        </div>
      </Wrapper>
    </section>
  );
};
