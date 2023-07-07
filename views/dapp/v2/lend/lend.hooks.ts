import { BCS, getSuiMoveConfig } from '@mysten/bcs';
import useSWR, { SWRConfiguration } from 'swr';

import { useGetObject, useMoneyMarketSdk, useNetwork, useWeb3 } from '@/hooks';
import { AddressZero } from '@/lib';
import { makeSWRKey } from '@/utils';

import { parseMoneyMarketStorage } from './lend.utils';

const bcs = new BCS(getSuiMoveConfig());

bcs.registerStructType('Market', {
  borrow_rate: BCS.U64,
  supply_rate: BCS.U64,
  cash: BCS.U64,
  collateral_enabled: BCS.BOOL,
  allocation_points: BCS.U256,
  user_principal: BCS.U64,
  user_shares: BCS.U64,
  user_loan_pending_rewards: BCS.U256,
  user_collateral_pending_rewards: BCS.U256,
  total_collateral_elastic: BCS.U64,
  total_collateral_base: BCS.U64,
  total_loan_elastic: BCS.U64,
  total_loan_base: BCS.U64,
  borrow_cap: BCS.U64,
  collateral_cap: BCS.U64,
  ltv: BCS.U256,
  accrued_timestamp: BCS.U64,
  can_be_collateral: BCS.BOOL,
});

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
