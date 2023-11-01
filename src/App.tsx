import React from 'react';
import { Outlet} from 'react-router-dom';
import './styles/main.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const App = () => (
  <>
    <Header />
    <div className="section">
      <div className="container">
        <Outlet />
        <Footer />
      </div>
    </div>
  </>
);
