import useSWR from 'swr';

import { makeSWRKey } from '@/utils';
import { getFarm } from '@/utils/farms';

import { UseGetFarmDataArgs } from '../farms/farms.types';

export const useFarmData = ({
  objectId,
  poolObjectId,
  isSingleCoin,
  account,
  lpCoin,
}: UseGetFarmDataArgs) => {
  const query = useSWR(
    makeSWRKey(
      [objectId, poolObjectId, isSingleCoin, account, lpCoin?.type],
      'useFarmData'
    ),
    async () =>
      await getFarm({
        objectId,
        poolObjectId,
        isSingleCoin,
        account,
        lpCoin,
      }),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  return query;
};
