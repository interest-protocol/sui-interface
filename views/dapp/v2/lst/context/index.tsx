import { Network } from '@interest-protocol/sui-amm-sdk';
import { last } from 'ramda';
import { createContext, FC, PropsWithChildren } from 'react';

import { COINS } from '@/constants';
import { useGetCoinsUSDInfo } from '@/hooks/use-get-coins-usd-info';

import { ILSTContext } from './context.types';

const lstContext = createContext({} as ILSTContext);

export const LSTProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = lstContext;

  const { data: coinData, isLoading } = useGetCoinsUSDInfo([
    COINS[Network.MAINNET].SUI.type,
  ]);

  const suiCoinInfo = coinData[COINS[Network.MAINNET].SUI.type].info;

  const data: ILSTContext = {
    suiCoinInfo: isLoading ? null : last(suiCoinInfo) ?? null,
    last30daysPrice: suiCoinInfo.map(({ price, timestamp }) => ({
      price,
      timestamp,
    })),
  };

  return <Provider value={data}>{children}</Provider>;
};

export default lstContext;
