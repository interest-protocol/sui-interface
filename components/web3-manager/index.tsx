import { useWalletKit } from '@mysten/wallet-kit';
import { createContext, FC, useMemo } from 'react';
import useSWR from 'swr';
import { useReadLocalStorage } from 'usehooks-ts';

import { LOCAL_STORAGE_VERSION } from '@/constants/local-storage';
import { useNetwork, useProvider } from '@/hooks';
import { LocalTokenMetadataRecord } from '@/interface';
import { makeSWRKey, noop } from '@/utils';

import { Web3ManagerProps, Web3ManagerState } from './web3-manager.types';
import { getAllCoins, parseCoins } from './web3-manager.utils';

const CONTEXT_DEFAULT_STATE = {
  account: null,
  walletAccount: null,
  coins: [],
  coinsMap: {},
  connected: false,
  error: false,
  mutate: noop,
  isFetchingCoinBalances: false,
};

export const Web3ManagerContext = createContext<Web3ManagerState>(
  CONTEXT_DEFAULT_STATE
);

const Web3Manager: FC<Web3ManagerProps> = ({ children }) => {
  const { network } = useNetwork();
  const { provider } = useProvider();
  const { isError, currentAccount, isConnected } = useWalletKit();

  const { data, error, mutate, isLoading } = useSWR(
    makeSWRKey(
      [currentAccount, network, currentAccount?.address],
      provider.getAllCoins.name
    ),
    async () => {
      if (!currentAccount?.address) return;
      return getAllCoins({ provider, account: currentAccount.address });
    },
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
      refreshInterval: 10000,
    }
  );

  const tokensMetadataRecord = useReadLocalStorage<LocalTokenMetadataRecord>(
    `${LOCAL_STORAGE_VERSION}-sui-interest-tokens-metadata`
  );

  const [coins, coinsMap] = useMemo(
    () =>
      parseCoins({ data, localTokens: tokensMetadataRecord ?? {}, network }),
    [data, tokensMetadataRecord, network, currentAccount?.address]
  );

  return (
    <Web3ManagerContext.Provider
      value={{
        account: currentAccount?.address || null,
        walletAccount: currentAccount || null,
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
