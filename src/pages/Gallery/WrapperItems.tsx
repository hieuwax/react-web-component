import { PfpAsset } from "../../types/PfpAsset";

interface Props {
  assets: PfpAsset[];
  renderItem: (asset: PfpAsset) => JSX.Element;
}
export default function WrapperItems({ assets, renderItem }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        gap: "16px",
      }}
    >
      {assets.map((asset) => (
        <div>{renderItem(asset)}</div>
      ))}
    </div>
  );
}
