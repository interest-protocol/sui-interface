import { Network } from '@interest-protocol/sui-amm-sdk';
import { useRouter } from 'next/router';
import { createContext, FC, useState } from 'react';

import { useLocalStorage } from '@/hooks';
import { noop } from '@/utils';

import {
  NetworkProviderProps,
  NetworkProviderState,
} from './network-provider.types';

const CONTEXT_DEFAULT_STATE = {
  setNetwork: noop,
  network: Network.TESTNET,
};

export const NetworkProviderContext = createContext<NetworkProviderState>(
  CONTEXT_DEFAULT_STATE
);

const NetworkProvider: FC<NetworkProviderProps> = ({ children }) => {
  const { asPath } = useRouter();
  const [localNetwork, setLocalNetwork] = useLocalStorage(
    'sui-interest-network',
    Network.MAINNET
  );

  const [network, setNetwork] = useState<Network>(
    process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
      ? localNetwork || Network.MAINNET
      : asPath.includes('/dapp/alpha')
      ? Network.TESTNET
      : Network.MAINNET
  );

  const handleSetNetwork = (x: Network) => {
    setLocalNetwork(x);
    setNetwork(x);
  };

  return (
    <NetworkProviderContext.Provider
      value={{ network, setNetwork: handleSetNetwork }}
    >
      {children}
    </NetworkProviderContext.Provider>
  );
};

export default NetworkProvider;
