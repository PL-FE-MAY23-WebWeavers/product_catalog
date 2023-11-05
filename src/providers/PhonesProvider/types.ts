import { usePhones } from '../../hooks/usePhones';

export type PhonesContextType = ReturnType<typeof usePhones>;

export type PhonesProviderProps = {
  children: React.ReactNode;
  // page: number,
  // perPage: number,
  // orderBy: string,
  // sort: string
};
