export interface Pagination<T> {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  rows: T[];
}
