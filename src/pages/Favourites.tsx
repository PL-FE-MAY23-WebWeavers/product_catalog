import React from 'react';
import { Pagination } from '../components/Pagination/Pagination';
import { usePhonesContext } from '../providers/PhonesProvider/PhonesProvider';
import { Loader } from '../components/Loader/Loader';
import './phones.scss';
import { BreadCrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import { ButtonBack } from '../components/utils/ButtonBack/ButtonBack';

export const Favourites = () => {
  const { isLoading } = usePhonesContext();
  return (
    <>
      <BreadCrumbs />
      <ButtonBack />
      <div className='grid-global'>
        <h1 className='homepage-item__h1'>Favourites</h1>
        {isLoading && <Loader />}
        <div className='homepage-catalog'>
        </div>
        {!isLoading && <Pagination />}
      </div>
    </>
  );
};
