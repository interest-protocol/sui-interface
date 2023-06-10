import useSWR from 'swr';

import { getDexMarket } from '@/api/markets';
import { useNetwork } from '@/hooks';
import { makeSWRKey } from '@/utils';

export const useGetDexMarkets = () => {
  const { network } = useNetwork();

  return useSWR(
    makeSWRKey([network], getDexMarket.name),
    async () => getDexMarket(network),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );
};
