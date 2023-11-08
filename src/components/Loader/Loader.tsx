import React from 'react';
import './loader.scss';

export const Loader = () => {
  return (
    <div className="lds">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
