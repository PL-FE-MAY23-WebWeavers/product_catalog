import React from 'react';
import { useNavigate } from 'react-router-dom';
import './buttonBack.scss';

export const ButtonBack: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleGoBack} className="button-back" type="button">
      Back
    </button>
  );
};
