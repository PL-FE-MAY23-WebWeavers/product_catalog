import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import { Phones } from '../types/Phones';

export const usePhones = () => {
  const [phones, setPhones] = useState<Phones>({ count: 0, rows: [] });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(16);
  const [orderBy, setOrderBy] = useState<string>('id');
  const [sort, setSort] = useState<string>('ASC');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    getProducts(page, perPage, orderBy, sort, search)
      .then(setPhones)
      .finally(() => setIsLoading(false));
  }, [page, perPage, orderBy, sort]);

  return {
    phones,
    page,
    setPage,
    perPage,
    setPerPage,
    setOrderBy,
    orderBy,
    setSort,
    isLoading,
    search,
    setSearch,
  };
};
