import React from 'react';
import { Outlet} from 'react-router-dom';
import './styles/main.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProductCatalogProvider } from './context/ProductCatalogContext';

export const App = () => (
  <ProductCatalogProvider>
    <Header />
    <main className="main">
      <Outlet />
    </main>
    <Footer />
  </ProductCatalogProvider>
);
