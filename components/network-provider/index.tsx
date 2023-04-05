import { createContext, FC, useState } from 'react';

import { Network } from '@/constants';
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
  const [localNetwork, setLocalNetwork] = useLocalStorage(
    'sui-interest-network',
    Network.TESTNET
  );
  const [network, setNetwork] = useState<Network>(
    localNetwork || Network.TESTNET
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
