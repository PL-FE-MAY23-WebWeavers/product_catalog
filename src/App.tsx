import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Phones from './pages/Phones';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Phones />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
