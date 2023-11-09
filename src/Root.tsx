import React from 'react';
import {
  Routes,
  Route,
  HashRouter as Router,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
// import { PageNotFound } from './pages/PageNotFound';
import { Home } from './pages/Home';
import { Phones } from './pages/Phones';
import { Favourites } from './pages/Favourites';
import { Cart } from './pages/Cart/Cart';
import { Tablets } from './pages/Tablets';
import { Accessories } from './pages/Accessories';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="phones">
          <Route index element={<Phones />} />
        </Route>
        <Route path="tablets">
          <Route index element={<Tablets />} />
        </Route>
        <Route path="accessories">
          <Route index element={<Accessories />} />
        </Route>
        <Route path="favourites">
          <Route index element={<Favourites />} />
        </Route>
        <Route path="cart">
          <Route index element={<Cart />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </Router>
);
