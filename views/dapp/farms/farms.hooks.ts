import useSWR from 'swr';

import { makeSWRKey } from '@/utils';

import { UseGetFarmListDataArgs } from './farms.types';
import { getFarm } from './farms.utils';

export const useFarmListData = ({ farms, account }: UseGetFarmListDataArgs) =>
  useSWR(
    makeSWRKey([farms, account], 'useFarmListData'),
    async () => Promise.all(farms.map((farm) => getFarm({ ...farm, account }))),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );
