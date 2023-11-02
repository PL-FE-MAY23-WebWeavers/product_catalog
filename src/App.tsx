import React from 'react';
import { Outlet} from 'react-router-dom';
import './styles/main.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProductCatalogProvider } from './context/ProductCatalogContext';

export const App = () => (
  <ProductCatalogProvider>
    <Header />
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
    <Footer />
  </ProductCatalogProvider>
);
