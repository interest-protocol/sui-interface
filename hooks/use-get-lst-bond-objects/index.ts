import { isEmpty } from 'ramda';
import useSWR from 'swr';

import { LST_OBJECTS } from '@/constants/lst';
import { useNetwork } from '@/hooks/use-network';
import { useProvider } from '@/hooks/use-provider';
import { useWeb3 } from '@/hooks/use-web3';
import { getAllOwnedObjects } from '@/utils';
import { makeSWRKey } from '@/utils';

import { parseObjects } from './use-get-lst-bonds-objects.utils';

export const useGetLstBondObjects = () => {
  const { provider } = useProvider();
  const { account } = useWeb3();
  const { network } = useNetwork();
  const objects = LST_OBJECTS[network];

  const { data, ...rest } = useSWR(
    makeSWRKey([account], useGetLstBondObjects.name),
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

  const bondsMap = parseObjects(data, network);

  return {
    ...rest,
    bondsMap,
    epochs: isEmpty(bondsMap) ? [] : Object.keys(bondsMap),
  };
};
