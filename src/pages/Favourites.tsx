import React from 'react';

import { Pagination } from '../components/Pagination/Pagination';
import { usePhonesContext } from '../providers/PhonesProvider/PhonesProvider';
import { Loader } from '../components/Loader/Loader';
import { CardsLayout } from '../components/CardsLayout/CardsLayout';
import { BreadCrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import { Wrapper } from '../components/utils/Wrapper/Wrapper';
import './phones.scss';

export const Favourites = () => {
  const { isLoading } = usePhonesContext();

  return (
    <section className="phones">
      <Wrapper>
        <BreadCrumbs />
        <h1 className="phones__h1">Favourites</h1>
        {isLoading && <Loader />}
        <div className="phones__grid grid-global">
          <CardsLayout />
          {!isLoading && <Pagination />}
        </div>
      </Wrapper>
    </section>
  );
};
