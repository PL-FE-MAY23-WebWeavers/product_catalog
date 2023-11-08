export interface CategoryOption {
  readonly value: string;
  readonly label: string;
}

export const categoryOptions: readonly CategoryOption[] = [
  { value: 'category', label: 'Category' },
  { value: 'name', label: 'Name' },
  { value: 'price', label: 'Price' },
  { value: 'screen', label: 'Screen' },
  { value: 'capacity', label: 'Capacity' },
  { value: 'color', label: 'Color' },
  { value: 'RAM', label: 'RAM' },
  { value: 'newest', label: 'Newest' },
];

export interface perPageOption {
  readonly value: string;
  readonly label: string;
}
export const perPage: readonly perPageOption[] = [
  { value: '4', label: '4' },
  { value: '8', label: '8' },
  { value: '16', label: '16' },
  { value: '32', label: '32' },
];
