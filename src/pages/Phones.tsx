import React from 'react';

import { Pagination } from '../components/Pagination/Pagination';
import { usePhonesContext } from '../providers/PhonesProvider/PhonesProvider';
import { Loader } from '../components/Loader/Loader';
import { CardsLayout } from '../components/CardsLayout/CardsLayout';
import { Wrapper } from '../components/utils/Wrapper/Wrapper';
import { BreadCrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import './phones.scss';

export const Phones: React.FC = () => {
  const { isLoading } = usePhonesContext();

  return (
    <section className="phones">
      <Wrapper>
        <BreadCrumbs />
        <h1 className="phones__h1">Mobile Phones</h1>
        {isLoading && <Loader />}
        <div className="phones__grid grid-global">
          <CardsLayout />
          {!isLoading && <Pagination />}
        </div>
      </Wrapper>
    </section>
  );
};
