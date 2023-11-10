import { Phones } from '../types/Phones';
import { client } from '../services/fetchClient';
import { PhoneDetails, Recommended } from '../types/PhoneDetails';

export const getProducts = (
  page: number,
  perPage: number,
  orderBy: string,
  order: string,
  search: string
) => {
  let orderByString = '';
  let orderString = '';
  let searchString = '';
  if (orderBy) {
    orderByString = `&orderBy=${orderBy}`;
  }

  if (order) {
    orderString = `&order=${order}`;
  }

  if (search) {
    searchString = `&searchText=${search}`;
  }
  return client.get<Phones>(
    `/products?page=${page}&perPage=${perPage}${orderByString}${orderString}${searchString}`
  );
};

export const getProductDetails = (id: string) => {
  return client.get<PhoneDetails>(`/products:${id}`);
};

export const getRecommended = (id: string) => {
  return client.get<Recommended>(`/products/${id}/recommended`);
};
