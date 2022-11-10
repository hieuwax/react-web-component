import { Skeleton } from 'antd';
import { AssetItemWrapper } from './styled';

export default function AssetItemSkeleton() {
  return (
    <AssetItemWrapper>
      <Skeleton.Image className="image" />
      <Skeleton.Input className="item-title" active size="small" />
      <Skeleton.Input className="item-desc" active size="small" />
    </AssetItemWrapper>
  );
}
