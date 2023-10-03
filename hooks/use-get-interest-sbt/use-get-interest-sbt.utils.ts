import { Network } from '@interest-protocol/sui-amm-sdk';
import { PaginatedObjectsResponse } from '@mysten/sui.js/src/types/objects';

import { getSoulBoundType } from '@/constants/lst';

export const getSoulBoundData = (
  x: PaginatedObjectsResponse['data'] | undefined,
  network: Network
) => {
  if (!x || !x.length) return [];
  const sbtType = getSoulBoundType(network);
  return x.reduce((acc, obj) => {
    const isSoulBoundType = sbtType === obj.data?.type;

    if (isSoulBoundType && obj.data?.objectId)
      return acc.concat({ id: obj.data?.objectId });

    return acc;
  }, [] as ReadonlyArray<{ id: string }>);
};
