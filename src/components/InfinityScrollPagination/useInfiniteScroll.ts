import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { IListService } from '../../types/controller/IListService';
import { Pagination } from '../../types/Pagination';

export interface InfiniteScrollProps<T, F = any> {
  listService: IListService<T>;
  pagination: Pagination<T>;
  filters: F[];
}

export function UseInfiniteScroll<T, F>({
  pagination,
  listService,
  filters,
}: InfiniteScrollProps<T, F>) {
  const [state, setState] = useState<State<T, F>>({ pagination, filters });
  const { page, pageSize } = state.pagination;

  useEffect(() => {
    getList();
  }, [page, pageSize, JSON.stringify(state.filters)]);

  const getList = async () => {
    const results = await listService.list({ page, pageSize, filters: state.filters });
    setState((prev) => ({
      ...prev,
      pagination: { ...results, rows: prev.pagination.rows.concat(results.rows) },
    }));
  };

  const onChangePage = (_page: number) => {
    setState((prev) => ({ ...prev, pagination: { ...prev.pagination, page: _page } }));
  };

  const onChangeFilters = (filters: F[]) => {
    setState((prev) => ({
      ...prev,
      filters: _.cloneDeep(filters),
      pagination: { ...prev.pagination, page: 1, rows: [] },
    }));
  };

  return { ...state, onChangePage, onChangeFilters, setInfiniteScrollState: setState };
}

export const InfiniteScrollContext = React.createContext<ReturnType<typeof UseInfiniteScroll>>(
  {} as any
);

interface State<T, F> {
  pagination: Pagination<T>;
  filters: F[];
}
