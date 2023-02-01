import { useWalletKit } from '@mysten/wallet-kit';
import { createContext, FC, useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

import { makeSWRKey, provider } from '@/utils';

import { Web3ManagerProps, Web3ManagerState } from './web3-manager.types';
import { parseCoins } from './web3-manager.utils';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultMutate: any = () => {};

const CONTEXT_DE_DEFAULT_STATE = {
  account: null,
  coins: [],
  coinsMap: {},
  connected: false,
  error: false,
  mutate: defaultMutate,
};

export const Web3ManagerContext = createContext<Web3ManagerState>(
  CONTEXT_DE_DEFAULT_STATE
);

const Web3Manager: FC<Web3ManagerProps> = ({ children }) => {
  const { isError, currentAccount, isConnecting, isConnected } = useWalletKit();

  const { data, error, mutate } = useSWR(
    makeSWRKey([currentAccount], 'getAllCoins'),
    async () => provider.getAllCoins(currentAccount!),
    {
      revalidateOnFocus: true,
      revalidateOnMount: true,
      refreshWhenHidden: true,
      refreshInterval: 5000,
      isPaused: () => !currentAccount,
    }
  );

  const [coins, coinsMap] = useMemo(() => parseCoins(data), [data]);

  return (
    <Web3ManagerContext.Provider
      value={{
        account: currentAccount,
        error: isError || !!error,
        connected: isConnected,
        coins,
        coinsMap,
        mutate,
      }}
    >
      {children}
    </Web3ManagerContext.Provider>
  );
};

export default Web3Manager;
