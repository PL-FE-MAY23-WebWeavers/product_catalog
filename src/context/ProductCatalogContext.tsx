import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { CartItem } from '../types/CartItem';
import { Phone } from '../types/Phones';

type ProductCatalogProviderProps = {
  children: ReactNode;
};

type ProductCatalogContextProps = {
  cartItems: CartItem[];
  favourites: Phone[];
  addToFavourites: (phone: Phone) => void;
  removeFromFavourites: (phone: Phone) => void;
  isFavourite: boolean;
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
  const [isFavourite, setIsFavourite] = useState(false);
  const [favourites, setFavourites] = useState<Phone[]>(() => {
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      return JSON.parse(savedFavourites);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (phone: Phone) => {
    setIsFavourite(true);
    setFavourites((prevFavourites) => {
      if (!prevFavourites.some((item) => item.id === phone.id)) {
        return [...prevFavourites, phone];
      }
      return prevFavourites;
    });
  };

  const removeFromFavourites = (phone: Phone) => {
    setIsFavourite(false);
    setFavourites((prevFavourites) =>
      prevFavourites.filter((item) => item.id !== phone.id)
    );
  };

  return (
    <ProductCatalogContext.Provider
      value={{
        cartItems,
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite,
      }}
    >
      {children}
    </ProductCatalogContext.Provider>
  );
}
