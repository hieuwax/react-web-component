import { Pagination } from "../Pagination";

export interface IListService<T> {
  list(props: ListProps<T>): Promise<Pagination<T>>;
}

export interface ListProps<T, F = any> {
  page: number;
  pageSize: number;
  filters?: F[];
  search?: {
    content: string;
    fields: keyof T[];
  };
}
