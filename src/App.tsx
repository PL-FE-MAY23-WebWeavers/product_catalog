import React from 'react';
import { Outlet} from 'react-router-dom';
import './styles/main.scss';

export const App = () => (
  <>
    <div className="section">
      <div className="container">
        <p>hello</p>
        <Outlet />
      </div>
    </div>
  </>
);
