import useSWR, { SWRResponse } from 'swr';

import { makeSWRKey } from '@/utils';
import { getFarm } from '@/utils/farms';

import { UseGetFarmListDataArgs } from './farms.types';

export const useFarmListData = ({
  data,
  farms,
  account,
  setData,
}: UseGetFarmListDataArgs): SWRResponse<void> => {
  const noMoreData = data.length == farms.length;
  const validIndex = noMoreData ? data.length - 1 : data.length;

  return useSWR(
    makeSWRKey([farms, account, validIndex], 'useFarmListData'),
    async () => {
      if (noMoreData) return;

      const farmData = await getFarm({
        ...farms[validIndex],
        account,
      });
      setData([...data, farmData]);
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );
};
