import { useWalletKit } from '@mysten/wallet-kit';
import { createContext, FC, useMemo } from 'react';
import useSWR from 'swr';
import { useReadLocalStorage } from 'usehooks-ts';

import { LocalTokenMetadataRecord } from '@/interface';
import { makeSWRKey, noop, provider } from '@/utils';

import { Web3ManagerProps, Web3ManagerState } from './web3-manager.types';
import { parseCoins } from './web3-manager.utils';

const CONTEXT_DE_DEFAULT_STATE = {
  account: null,
  coins: [],
  coinsMap: {},
  connected: false,
  error: false,
  mutate: noop,
  isFetchingCoinBalances: false,
};

export const Web3ManagerContext = createContext<Web3ManagerState>(
  CONTEXT_DE_DEFAULT_STATE
);

const Web3Manager: FC<Web3ManagerProps> = ({ children }) => {
  const { isError, currentAccount, isConnected } = useWalletKit();

  const { data, error, mutate, isLoading } = useSWR(
    makeSWRKey([currentAccount], provider.getAllCoins.name),
    async () => {
      if (!currentAccount) return;
      return await provider.getAllCoins(currentAccount!);
    },
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
      refreshInterval: 10000,
    }
  );

  const tokensMetadataRecord = useReadLocalStorage<LocalTokenMetadataRecord>(
    'sui-interest-tokens-metadata'
  );

  const [coins, coinsMap] = useMemo(
    () => parseCoins(data, tokensMetadataRecord ?? {}),
    [data, tokensMetadataRecord]
  );

  return (
    <Web3ManagerContext.Provider
      value={{
        account: currentAccount,
        error: isError || !!error,
        connected: isConnected,
        coins,
        coinsMap,
        mutate,
        isFetchingCoinBalances: isLoading,
      }}
    >
      {children}
    </Web3ManagerContext.Provider>
  );
};

export default Web3Manager;
