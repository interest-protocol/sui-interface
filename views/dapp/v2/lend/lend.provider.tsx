import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useGetCoinsPrices, useGetDexIpxPrice, useNetwork } from '@/hooks';
import { IEmptyObj } from '@/interface';
import { asyncNoop, ZERO_BIG_NUMBER } from '@/utils';
import ErrorPage from '@/views/dapp/v2/error';
import { COIN_PRICE_KEYS } from '@/views/dapp/v2/lend/lend.data';
import {
  useGetMoneyMarkets,
  useGetMoneyMarketStorage,
} from '@/views/dapp/v2/lend/lend.hooks';
import { calculateUserBalancesInUSD } from '@/views/dapp/v2/lend/lend.utils';

import { LendProviderState } from './lend.types';

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

const LendProvider: FC<PropsWithChildren<IEmptyObj>> = ({ children }) => {
  const t = useTranslations();
  const { network } = useNetwork();
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const loadingState =
      isLoading || priceIsLoading || ipxPriceIsLoading || moneyMarketIsLoading;

    if (loadingState !== loading) setLoading(loadingState);
  }, [isLoading, priceIsLoading, ipxPriceIsLoading, moneyMarketIsLoading]);

  if (!loading && error) return <ErrorPage message={t('lend.error.markets')} />;

  if (!loading && (isEmpty(marketRecord) || moneyMarketError))
    return <ErrorPage message={t('lend.error.moneyMarket')} />;

  if (!loading && (priceError || isEmpty(priceMap)))
    return <ErrorPage message={t('lend.error.prices')} />;

  if (!loading && ipxPriceError)
    return <ErrorPage message={t('lend.error.ipxPrice')} />;

  const mutate = async () => {
    await mutateMarket();
  };

  const userBalancesInUSD = calculateUserBalancesInUSD({
    priceMap,
    marketRecord,
    ipxPrice,
    moneyMarketStorage,
    network,
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
