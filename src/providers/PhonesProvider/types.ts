import { usePhones } from '../../hooks/usePhones';

export type PhonesContextType = ReturnType<typeof usePhones>;

export type PhonesProviderProps = {
  children: React.ReactNode;
};
