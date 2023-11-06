import React from 'react';
import { BreadCrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import { ButtonBack } from '../components/utils/ButtonBack/ButtonBack';

export const Phones = () => {
  return (
    <>
      <BreadCrumbs />
      <ButtonBack />
      <div className='grid-global'>
        <h1 className='homepage-item__h1'>Phones</h1>

      </div>
    </>
  );
};
