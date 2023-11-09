import { useEffect, useState } from 'react';
import { client } from '../services/fetchClient';
import { Phone } from '../types/Phones';

export const useDiscountProducts = () => {
  const [isLoadingD, setIsLoadingD] = useState<boolean>(true);
  const [discountProducts, setDiscountProducts] = useState<Phone[]>([]);

  useEffect(() => {
    client
      .get('/products/discount')
      .then((response) => {
        setDiscountProducts([...(response as Phone[])]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoadingD(false);
      });
  }, []);

  return { discountProducts, isLoadingD };
};
