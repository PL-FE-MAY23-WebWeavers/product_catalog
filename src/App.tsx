import React from 'react';
import './App.css';
import { Outlet} from 'react-router-dom';

export const App = () => (
  <>
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
