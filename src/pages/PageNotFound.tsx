import React from 'react';
import { ProductDetailsPage } from './ProductDetailPage/ProductDetailsPage';

export const PageNotFound = () => {
  return (
    <div className='grid-global'>
      <h1 className='homepage-item__h1'>Opps! We ran out of code</h1>
      <ProductDetailsPage />
    </div>
  );
};
