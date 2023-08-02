import useSWR, { SWRConfiguration } from 'swr';

import { useGetObject, useMoneyMarketSdk, useNetwork, useWeb3 } from '@/hooks';
import { AddressZero } from '@/lib';
import { makeSWRKey } from '@/utils';

import { parseMoneyMarketStorage } from './lend.utils';

export const useGetMoneyMarkets = (config: SWRConfiguration = {}) => {
  const { network } = useNetwork();
  const { account } = useWeb3();

  const moneyMarketSdk = useMoneyMarketSdk();

  const { data, ...otherProps } = useSWR(
    makeSWRKey(
      [account || AddressZero, network],
      moneyMarketSdk.getMarkets.name
    ),
    async () => moneyMarketSdk.getMarkets({ sender: account }),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 150000,
      ...config,
    }
  );

  return {
    ...otherProps,
    data: data ? data : {},
  };
};

export const useGetMoneyMarketStorage = () => {
  const moneyMarketSdk = useMoneyMarketSdk();

  const objects = moneyMarketSdk.getMoneyMarketConstants();

  const { data, ...otherProps } = useGetObject(objects.MONEY_MARKET_STORAGE, {
    refreshInterval: 100000,
  });

  return {
    ...otherProps,
    data: parseMoneyMarketStorage(data),
  };
};
