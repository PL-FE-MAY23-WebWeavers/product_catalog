import React from 'react';
import { Pagination } from '../components/Pagination/Pagination';
import { usePhonesContext } from '../providers/PhonesProvider/PhonesProvider';
import { Loader } from '../components/Loader/Loader';
import { CardsLayout } from '../components/CardsLayout/CardsLayout';
import './phones.scss';

export const Phones = () => {

  const { isLoading } = usePhonesContext();
  return (
    <div className='grid-global'>
      <h1 className='homepage-item__h1'>Mobile Phones</h1>
      {isLoading && <Loader />}
      <div className='homepage-catalog'>
        <CardsLayout />
      </div>
      {!isLoading && <Pagination />}
    </div>
  );
};
