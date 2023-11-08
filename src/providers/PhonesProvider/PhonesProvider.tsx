import React, { createContext, useContext } from 'react';
import { PhonesContextType, PhonesProviderProps } from './types';
import { usePhones } from '../../hooks/usePhones';

export const PhonesContext = createContext<PhonesContextType | undefined>(
  undefined
);

export const PhonesProvider = ({ children }: PhonesProviderProps) => {
  const { ...args } = usePhones();

  return (
    <PhonesContext.Provider value={{ ...args }}>
      {children}
    </PhonesContext.Provider>
  );
};

export const usePhonesContext = () => {
  const contextValues = useContext(PhonesContext);

  if (!contextValues) {
    throw new Error('PhonesContext must be in PhonesProvider');
  }

  return contextValues;
};
