import React from 'react';
import { useProductCatalog } from '../../context/ProductCatalogContext';

export const Successful = () => {
  const { emptyCart } = useProductCatalog();
  emptyCart();
  return <div>Payment done!</div>;
};
