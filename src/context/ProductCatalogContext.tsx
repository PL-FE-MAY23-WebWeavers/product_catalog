import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { CartItem } from '../types/CartItem';

type ProductCatalogProviderProps = {
  children: ReactNode;
}

type ProductCatalogContextProps = {
  cartItems: CartItem[];
  increaseCartQuantity: (item: CartItem) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (item: CartItem) => void;
  getItemQuantity: (id: string) => number;
}

const ProductCatalogContext = createContext({} as ProductCatalogContextProps);

export function useProductCatalog() {
  return useContext(ProductCatalogContext);
}

export function ProductCatalogProvider({ children }: ProductCatalogProviderProps) {
  // useLocalStorage can be used to store different values under different name eg.: 'shopping-cart'
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);

  const getItemQuantity = (id: string) => cartItems.find(item => item.id === id)?.quantity || 0;

  const increaseCartQuantity = (addedItem: CartItem) => {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === addedItem.id) == null) {
        return [...currItems, { ...addedItem, quantity: 1 }];
      }

      return currItems.map(item => {
        if (item.id === addedItem.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const decreaseCartQuantity = (id: string) => {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      }

      return currItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };

  const removeFromCart = (removedItem: CartItem) => {
    setCartItems(currItems => currItems.filter(item => item.id !== removedItem.id));
  };

  return (
    <ProductCatalogContext.Provider value={{
      cartItems,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      getItemQuantity,
    }} >
      { children }
    </ProductCatalogContext.Provider>
  );
}
