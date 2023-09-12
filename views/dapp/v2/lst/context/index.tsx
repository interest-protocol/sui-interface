import { Network } from '@interest-protocol/sui-amm-sdk';
import { last } from 'ramda';
import { createContext, FC, PropsWithChildren } from 'react';

import { COINS } from '@/constants';
import { useGetCoinsUSDInfo } from '@/hooks/use-get-coins-usd-info';
import { FixedPointMath, ONE_COIN } from '@/lib';
import {
  DEFAULT_LST_STORAGE,
  useGetLstStorage,
} from '@/views/dapp/v2/lst/lst.hooks';

import { ILSTContext } from './context.types';

const lstContext = createContext({
  suiCoinInfo: null,
  last30daysPrice: [],
  lstStorage: DEFAULT_LST_STORAGE,
  validatorStakeRecord: {},
  isLoading: true,
  iSuiExchangeRate: 1,
  totalISuiMinted: 0,
} as ILSTContext);

export const LSTProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = lstContext;
  const { data: lstStorage, isLoading: storageIsLoading } = useGetLstStorage();
  const { data: coinData, isLoading } = useGetCoinsUSDInfo([
    COINS[Network.MAINNET].SUI.type,
  ]);

  const suiCoinInfo = coinData[COINS[Network.MAINNET].SUI.type].info;

  const totalStakedSui = FixedPointMath.toNumber(lstStorage.pool.elastic);
  const iSuiExchangeRate =
    totalStakedSui === 0
      ? 1
      : FixedPointMath.toNumber(lstStorage.pool.toElastic(ONE_COIN));
  const totalISuiMinted = FixedPointMath.toNumber(lstStorage.pool.base);

  const data: ILSTContext = {
    suiCoinInfo: isLoading ? null : last(suiCoinInfo) ?? null,
    last30daysPrice: suiCoinInfo.map(({ price, timestamp }) => ({
      price,
      timestamp,
    })),
    isLoading: storageIsLoading,
    lstStorage,
    validatorStakeRecord: {},
    iSuiExchangeRate,
    totalISuiMinted,
  };

  return <Provider value={data}>{children}</Provider>;
};

export default lstContext;
