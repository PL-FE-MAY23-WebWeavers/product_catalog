import { Phones } from '../types/Phones';
import { client } from '../services/fetchClient';
import { PhoneDetails } from '../types/PhoneDetails';

export const getProducts = (page: number, perPage: number, orderBy: string, order: string) => {
  let orderByString = '';
  let orderString = '';
  if (orderBy) {
    orderByString = `&orderBy=${orderBy}`;
  }

  if (order) {
    orderString = `&order=${order}`;
  }
  return client.get<Phones>(`?page=${page}&perPage=${perPage}${orderByString}${orderString}`);
};


export const getProductDetails = (id: string) => {
  return client.get<PhoneDetails>(`:${id}`);
};
