import useSWR from 'swr';

import { makeSWRKey } from '@/utils';
import { getFarm } from '@/utils/farms';

import { UseGetFarmListDataArgs } from './farms.types';

export const useFarmListData = ({ farms, account }: UseGetFarmListDataArgs) => {
  const query = useSWR(
    makeSWRKey([farms, account], 'useFarmListData'),
    async () => Promise.all(farms.map((farm) => getFarm({ ...farm, account }))),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  return query;
};
