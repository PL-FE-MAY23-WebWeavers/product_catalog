import { useEffect, useState } from 'react';
import { client } from '../services/fetchClient';
import { Phone } from '../types/Phones';

export const useDiscountProducts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [discountProducts, setDiscountProducts] = useState<Phone[]>([]);

  useEffect(() => {
    client.get('/products/discount')
      .then((response) => {
        setDiscountProducts([...response as Phone[]]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { discountProducts, isLoading };
};
