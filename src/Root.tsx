import React from 'react';
import {
  Routes,
  Route,
  HashRouter as Router,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './pages/PageNotFound';
import { Home } from './pages/Home';
import { Phones } from './pages/Phones';
import { Favourites } from './pages/Favourites';
import { Cart } from './pages/Cart/Cart';
import { Tablets } from './pages/Tablets';
import { Accessories } from './pages/Accessories';
import { ProductDetailsPage } from './pages/ProductDetailPage/ProductDetailsPage';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { ClerkProvider, SignIn } from '@clerk/clerk-react';
import { Cancelled } from './pages/Payments/Cancelled';
import { Successful } from './pages/Payments/Successful';

const ClerkProviderWithRoutes = () => {
  const navigate = useNavigate();
  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
  }

  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="phones">
            <Route index element={<Phones />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
            <Route path="*" element={<PageNotFound />} />
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
          <Route path="success">
            <Route index element={<Successful />} />
          </Route>
          <Route path="cancel">
            <Route index element={<Cancelled />} />
          </Route>
          <Route path="signin">
            <Route index element={<SignIn />} />
          </Route>
          <Route path="user-profile">
            <Route index element={<UserProfile />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ClerkProvider>
  );
};

export const Root = () => (
  <Router>
    <ClerkProviderWithRoutes />
  </Router>
);
