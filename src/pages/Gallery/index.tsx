import { Col, Row } from "antd";
import AssetItem from "../../components/AssetItem";
import AssetItemSkeleton from "../../components/AssetItem/AssetItemSkeleton";
import InfinityScrollPagination from "../../components/InfinityScrollPagination";
import {
  UseInfiniteScroll,
  InfiniteScrollContext,
} from "../../components/InfinityScrollPagination/useInfiniteScroll";
import { assetService } from "../../services";
import { Filter } from "../../types/Filter";
import { PfpAsset } from "../../types/PfpAsset";
import { GalleryWrapper } from "./styled";
import WrapperItems from "./WrapperItems";

export default function GalleryPage() {
  const useInfiniteScroll = UseInfiniteScroll<PfpAsset, Filter>({
    listService: assetService,
    filters: assetService.getFilters(),
    pagination: {
      page: 1,
      pageSize: 24,
      rows: [],
      totalItems: 0,
      totalPages: 0,
    },
  });

  console.log("gallery page");

  return (
    <GalleryWrapper>
      <Col xs={24}>
        <Row style={{ padding: 32 }}>
          <Col md={24} lg={22}>
            <InfiniteScrollContext.Provider value={useInfiniteScroll as any}>
              <InfinityScrollPagination<PfpAsset>
                renderLoading={() => {
                  const skeletonAssets = Array.from(new Array(24));
                  return (
                    <WrapperItems
                      assets={skeletonAssets}
                      renderItem={AssetItemSkeleton}
                    />
                  );
                }}
                renderItems={(assets) => (
                  <WrapperItems assets={assets} renderItem={AssetItem} />
                )}
              />
            </InfiniteScrollContext.Provider>
          </Col>
        </Row>
      </Col>
    </GalleryWrapper>
  );
}
