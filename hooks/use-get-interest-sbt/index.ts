import useSWR from 'swr';

import { LST_OBJECTS } from '@/constants/lst';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { getSoulBoundData } from '@/hooks/use-get-interest-sbt/use-get-interest-sbt.utils';
import { getAllOwnedObjects, makeSWRKey } from '@/utils';

export const useGetInterestSbt = () => {
  const { provider } = useProvider();
  const { account } = useWeb3();
  const { network } = useNetwork();
  const objects = LST_OBJECTS[network];

  const { data, ...rest } = useSWR(
    makeSWRKey([account], useGetInterestSbt.name),
    async () =>
      account
        ? getAllOwnedObjects({
            provider,
            owner: account,
            filter: { Package: objects.PACKAGE_ID },
            options: { showContent: true, showType: true },
          })
        : [],
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  return {
    ...rest,
    data: getSoulBoundData(data, network),
  };
};
