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
  // CART
  cartItems: CartItem[];
  increaseCartQuantity: (item: CartItem) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  getItemQuantity: (id: string) => number;
  // FAVS
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
  // useLocalStorage can be used to store different values under different name eg.: 'shopping-cart'
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  );
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

  const getItemQuantity = (id: string) =>
    cartItems.find((item) => item.id === id)?.quantity || 0;

  const increaseCartQuantity = (addedItem: CartItem) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === addedItem.id) == null) {
        return [...currItems, { ...addedItem, quantity: 1 }];
      }

      return currItems.map((item) => {
        if (item.id === addedItem.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const decreaseCartQuantity = (id: string) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      }

      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };

  const removeFromCart = (id: string) =>
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));

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
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        getItemQuantity,
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
