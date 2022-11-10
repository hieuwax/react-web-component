import { Asset } from '../../types/Asset';
import { AssetItemWrapper } from './styled';

export default function AssetItem({ desc, image, name }: Asset) {
  return (
    <AssetItemWrapper>
      <img src={image} alt={name} />
      <p className="item-title">{name}</p>
      <p className="item-desc">{desc}</p>
    </AssetItemWrapper>
  );
}
