import { useWalletKit } from '@mysten/wallet-kit';
import { createContext, FC, useMemo } from 'react';
import useSWR from 'swr';
import { useReadLocalStorage } from 'usehooks-ts';

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
  const { isError, currentAccount, isConnected } = useWalletKit();
  const { provider } = useProvider();
  const { network } = useNetwork();

  const { data, error, mutate, isLoading } = useSWR(
    makeSWRKey([currentAccount, network], provider.getAllCoins.name),
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
    'sui-interest-tokens-metadata'
  );

  const [coins, coinsMap] = useMemo(
    () =>
      parseCoins({ data, localTokens: tokensMetadataRecord ?? {}, network }),
    [data, tokensMetadataRecord, network]
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
