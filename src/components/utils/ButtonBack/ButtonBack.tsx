import React from 'react';
import { useNavigate } from 'react-router-dom';
import './buttonBack.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className='back-button-container'>
      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        <div className="back-button__left-icon" />
        <span className='back-button__label'>
          Back
        </span>
      </button>
    </div>
  );
};
