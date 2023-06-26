import { getReturnValuesFromInspectResults } from '@interest-protocol/sui-amm-sdk';
import { BCS, getSuiMoveConfig } from '@mysten/bcs';
import {
  SUI_CLOCK_OBJECT_ID,
  SUI_TYPE_ARG,
  TransactionBlock,
} from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { propOr } from 'ramda';
import useSWR, { SWRConfiguration } from 'swr';

import { COIN_DECIMALS, MILLISECONDS_PER_YEAR } from '@/constants';
import { MONEY_MARKET_OBJECTS } from '@/constants/money-market.constants';
import { useGetObject, useNetwork, useProvider } from '@/hooks';
import { AddressZero } from '@/lib';
import { makeSWRKey } from '@/utils';

import { MONEY_MARKET_KEYS } from './lend.constants';
import { MoneyMarket } from './lend.types';
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
});

const RETURN_TYPE = 'vector<Market>';

export const useGetMoneyMarkets = (
  account?: string | null,
  config: SWRConfiguration = {}
) => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  const objects = MONEY_MARKET_OBJECTS[network];

  const marketsKeys = MONEY_MARKET_KEYS[network];

  const { data, ...otherProps } = useSWR(
    makeSWRKey(
      [account || AddressZero, network, marketsKeys],
      'useGetMoneyMarkets'
    ),
    async () => {
      const txb = new TransactionBlock();

      txb.moveCall({
        target: `${objects.DASHBOARD_PACKAGE_ID}::dashboard::get_markets`,
        arguments: [
          txb.object(objects.MONEY_MARKET_STORAGE),
          txb.object(objects.INTEREST_RATE_STORAGE),
          txb.object(SUI_CLOCK_OBJECT_ID),
          txb.pure(account || AddressZero),
        ],
      });

      const result = await provider.devInspectTransactionBlock({
        transactionBlock: txb,
        sender: account || AddressZero,
      });

      const values = getReturnValuesFromInspectResults(result);

      if (!values || !values.length) return {};

      const rawData = values.map((x) =>
        bcs.de(RETURN_TYPE, Uint8Array.from(x[0]))
      );

      return marketsKeys.reduce((acc, rawKey, currentIndex) => {
        const key = rawKey.replace(
          /\b0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI\b/g,
          SUI_TYPE_ARG
        );

        const data = rawData[currentIndex];

        const accruedTimestamp = BigNumber(
          propOr(0, 'accrued_timestamp', data)
        );

        const timeElapsed = new Date().getTime() - accruedTimestamp.toNumber();
        const supplyRatePerMS = BigNumber(propOr(0, 'supply_rate', data));
        const borrowRatePerMS = BigNumber(propOr(0, 'borrow_rate', data));
        return {
          ...acc,
          [key]: {
            supplyRatePerYear: BigNumber(
              propOr(0, 'supply_rate', data)
            ).multipliedBy(MILLISECONDS_PER_YEAR),
            borrowRatePerYear: BigNumber(
              propOr(0, 'borrow_rate', data)
            ).multipliedBy(MILLISECONDS_PER_YEAR),
            cash: BigNumber(propOr(0, 'cash', data)),
            collateralEnabled: propOr(
              false,
              'collateral_enabled',
              data
            ) as boolean,
            allocationPoints: BigNumber(propOr(0, 'allocation_points', data)),
            userPrincipal: BigNumber(propOr(0, 'user_principal', data)),
            userShares: BigNumber(propOr(0, 'user_shares', data)),
            userLoanPendingRewards: BigNumber(
              propOr(0, 'user_loan_pending_rewards', data)
            ),
            userCollateralPendingRewards: BigNumber(
              propOr(0, 'user_collateral_pending_rewards', data)
            ),
            totalCollateralElastic: BigNumber(
              propOr(0, 'total_collateral_elastic', data)
            ).plus(supplyRatePerMS.multipliedBy(timeElapsed)),
            totalCollateralBase: BigNumber(
              propOr(0, 'total_collateral_base', data)
            ),
            totalLoanElastic: BigNumber(
              propOr(0, 'total_loan_elastic', data)
            ).plus(borrowRatePerMS.multipliedBy(timeElapsed)),
            totalLoanBase: BigNumber(propOr(0, 'total_loan_base', data)),
            borrowCap: BigNumber(propOr(0, 'borrow_cap', data)),
            collateralCap: BigNumber(propOr(0, 'collateral_cap', data)),
            LTV: BigNumber(propOr(0, 'ltv', data)),
            accruedTimestamp,
            decimals: COIN_DECIMALS[network][key],
          },
        };
      }, {} as Record<string, MoneyMarket>);
    },
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
  const { network } = useNetwork();

  const objects = MONEY_MARKET_OBJECTS[network];

  const { data, ...otherProps } = useGetObject(objects.MONEY_MARKET_STORAGE, {
    refreshInterval: 100000,
  });

  return {
    ...otherProps,
    data: parseMoneyMarketStorage(data),
  };
};
