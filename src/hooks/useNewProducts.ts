import { useEffect, useState } from 'react';
import { client } from '../services/fetchClient';
import { Phone } from '../types/Phones';

export const useNewProducts = () => {
  const [isLoadingN, setIsLoadingN] = useState<boolean>(true);
  const [newProducts, setNewProducts] = useState<Phone[]>([]);

  useEffect(() => {
    client.get('/products/new')
      .then((response) => {
        setNewProducts([...response as Phone[]]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoadingN(false);
      });
  }, []);

  return { newProducts, isLoadingN };
};
