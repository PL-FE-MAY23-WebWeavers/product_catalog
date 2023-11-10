import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './styles/main.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProductCatalogProvider } from './context/ProductCatalogContext';
import { PhonesProvider } from './providers/PhonesProvider/PhonesProvider';
import cn from 'classnames';

export const App = () => {
  const location = useLocation();
  const isCartPage = location.pathname.endsWith('/cart');

  return (
    <ProductCatalogProvider>
      <PhonesProvider>
        <Header />
        <main
          className={cn('main', {
            'main--cart': isCartPage,
          })}
        >
          <Outlet />
        </main>
        <Footer />
      </PhonesProvider>
    </ProductCatalogProvider>
  );
};
