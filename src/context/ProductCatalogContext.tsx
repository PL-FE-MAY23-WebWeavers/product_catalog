import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { CartItem } from '../types/CartItem';

type ProductCatalogProviderProps = {
  children: ReactNode;
};

type ProductCatalogContextProps = {
  cartItems: CartItem[];
};

const ProductCatalogContext = createContext({} as ProductCatalogContextProps);

export function useProductCatalog() {
  return useContext(ProductCatalogContext);
}

export function ProductCatalogProvider({
  children,
}: ProductCatalogProviderProps) {
  // [cartItems, setCartItems] will be used in the future
  // useLocalStorage can be used to store different values under different name eg.: 'shopping-cart'
  const [cartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);

  return (
    <ProductCatalogContext.Provider
      value={{
        cartItems,
      }}
    >
      {children}
    </ProductCatalogContext.Provider>
  );
}
