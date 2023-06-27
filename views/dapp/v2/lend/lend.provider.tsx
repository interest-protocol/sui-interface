import { isEmpty } from 'ramda';
import { createContext, FC, useContext } from 'react';

import { useGetCoinsPrices, useGetDexIpxPrice, useNetwork } from '@/hooks';
import { asyncNoop, ZERO_BIG_NUMBER } from '@/utils';
import ErrorPage from '@/views/dapp/v2/error';
import { COIN_PRICE_KEYS } from '@/views/dapp/v2/lend/lend.constants';
import {
  useGetMoneyMarkets,
  useGetMoneyMarketStorage,
} from '@/views/dapp/v2/lend/lend.hooks';
import { calculateUserBalancesInUSD } from '@/views/dapp/v2/lend/lend.utils';

import { LendProviderProps, LendProviderState } from './lend.types';

const CONTEXT_DEFAULT_STATE = {
  priceMap: {},
  marketRecord: {},
  ipxPrice: 0,
  moneyMarketStorage: {
    totalAllocationPoints: ZERO_BIG_NUMBER,
    ipxPerYear: ZERO_BIG_NUMBER,
    allMarketKeys: [],
    suidInterestRatePerYear: ZERO_BIG_NUMBER,
  },
  userBalancesInUSD: {
    totalSupply: 0,
    totalCollateral: 0,
    totalLoan: 0,
    totalEarnings: 0,
    totalInterestRateOwned: 0,
    totalIPXCollateralRewards: 0,
    totalIPXLoanRewards: 0,
  },
  loading: true,
  mutate: asyncNoop,
};

export const LendProviderContext = createContext<LendProviderState>(
  CONTEXT_DEFAULT_STATE
);

export const useLendProviderValue = () => useContext(LendProviderContext);

const LendProvider: FC<LendProviderProps> = ({ children }) => {
  const { network } = useNetwork();

  const {
    data: moneyMarketStorage,
    isLoading: moneyMarketIsLoading,
    error: moneyMarketError,
  } = useGetMoneyMarketStorage();

  const {
    data: priceMap,
    error: priceError,
    isLoading: priceIsLoading,
  } = useGetCoinsPrices(COIN_PRICE_KEYS[network]);

  const {
    data: marketRecord,
    isLoading,
    mutate: mutateMarket,
    error,
  } = useGetMoneyMarkets();

  const {
    data: ipxPrice,
    isLoading: ipxPriceIsLoading,
    error: ipxPriceError,
  } = useGetDexIpxPrice(priceMap, { refreshInterval: 100000 });

  // TODO render a custom message for each error type
  if (!isLoading && error)
    return <ErrorPage message="Error getting the Markets" />;

  if (!isLoading && isEmpty(marketRecord))
    return <ErrorPage message="Error getting the Money Market" />;

  if (!priceIsLoading && isEmpty(priceError))
    return <ErrorPage message="Error getting the Coins Prices" />;

  if (!priceIsLoading && isEmpty(priceMap))
    return <ErrorPage message="Error getting the Coins Prices" />;

  if (!ipxPriceIsLoading && ipxPriceError)
    return <ErrorPage message="Error getting the IPX price" />;

  if (!moneyMarketIsLoading && moneyMarketError)
    return (
      <ErrorPage message="Error fetching the Money Market Storage Object" />
    );

  const loading =
    isLoading || priceIsLoading || ipxPriceIsLoading || moneyMarketIsLoading;

  const mutate = async () => {
    await mutateMarket();
  };

  const userBalancesInUSD = calculateUserBalancesInUSD({
    priceMap,
    marketRecord,
    ipxPrice,
    moneyMarketStorage,
  });

  return (
    <LendProviderContext.Provider
      value={{
        priceMap,
        marketRecord,
        ipxPrice,
        moneyMarketStorage,
        userBalancesInUSD,
        loading,
        mutate,
      }}
    >
      {children}
    </LendProviderContext.Provider>
  );
};

export default LendProvider;
