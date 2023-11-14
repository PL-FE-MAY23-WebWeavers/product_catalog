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
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from '@clerk/clerk-react';
import { UserPage } from './components/UserPage/UserPage';

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
          <Route path="signin">
            <Route index element={<SignIn />} />
          </Route>
          <Route
            path="useraccount"
            element={
              <SignedIn>
                <UserPage />
              </SignedIn>
            }
          />
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
