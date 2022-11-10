import { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { InfiniteScrollContext } from './useInfiniteScroll';

interface Props<T> {
  renderItems: (listT: T[]) => JSX.Element;
  renderLoading?: () => JSX.Element;
}

export default function InfinityScrollPagination<T>(props: Props<T>) {
  const { renderItems } = props;
  const { pagination, onChangePage } = useContext(InfiniteScrollContext);
  const { page, totalPages, rows } = pagination;

  return (
    <InfiniteScroll
      style={{ overflowX: 'hidden' }}
      dataLength={rows.length}
      next={() => onChangePage(page + 1)}
      hasMore={page < totalPages}
      loader={props.renderLoading?.() || <h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {renderItems(rows as T[])}
    </InfiniteScroll>
  );
}
