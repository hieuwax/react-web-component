import { AssetService } from './pfp-service/assetService';
import { pfpAssets } from './pfp-service/pfpAssets';

export const assetService = new AssetService(pfpAssets.slice(0, 666));
