import React from 'react';

import { Pagination } from '../components/Pagination/Pagination';
import { usePhonesContext } from '../providers/PhonesProvider/PhonesProvider';
import { Loader } from '../components/Loader/Loader';
import { CardsLayout } from '../components/CardsLayout/CardsLayout';
import { Wrapper } from '../components/utils/Wrapper/Wrapper';
import { BreadCrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import './phones.scss';
import { DropdownMenu } from '../components/DropdownMenu/DropdownMenu';

export const SortBy = [
  'Category',
  'Name',
  'Price',
  'Screen',
  'Capacity',
  'Color',
  'RAM',
  'Newest',
];

export const perPage = ['4', '8', '16', '32'];

export const Phones: React.FC = () => {
  const { phones, isLoading } = usePhonesContext();

  return (
    <section className="phones">
      <Wrapper>
        <BreadCrumbs />
        <h1 className="phones__h1">Mobile Phones</h1>
        <p className="homepage-models p">{phones.count} models</p>
        <DropdownMenu items={SortBy} menuName="Sort By" defaultValue="Newest" />
        <DropdownMenu
          items={perPage}
          menuName="Items on page"
          defaultValue="16"
        />
        {isLoading && <Loader />}
        <div className="phones__grid grid-global">
          <CardsLayout />
          {!isLoading && <Pagination />}
        </div>
      </Wrapper>
    </section>
  );
};
