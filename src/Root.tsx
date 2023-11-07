import React from 'react';
import { Routes, Route, HashRouter as Router, Navigate } from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './pages/PageNotFound';
import { Home } from './pages/Home';
import { Phones } from './pages/Phones';
import { Cart } from './pages/Cart/Cart';
import { ProductDetailsPage } from './pages/ProductDetailPage/ProductDetailsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path=":productId" element={<ProductDetailsPage />} />
        <Route path="phones">
          <Route index element={<Phones />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="tablets">
          <Route index element={<PageNotFound />} />
        </Route>
        <Route path="accessories">
          <Route index element={<PageNotFound />} />
        </Route>
        <Route path="cart">
          <Route index element={<Cart />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </Router>
);
