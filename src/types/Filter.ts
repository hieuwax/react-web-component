export interface Filter {
  title: string;
  key: string;
  items: FilterItem[];
}

export interface FilterItem {
  id: string;
  label: string;
  amount: number;
  checked: boolean;
}
