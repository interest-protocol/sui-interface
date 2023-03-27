import { createContext, FC, useState } from 'react';

import { Network } from '@/constants';
import { useLocalStorage } from '@/hooks';
import { noop } from '@/utils';

import { SuiProviderProps, SuiProviderState } from './sui-provider.types';

const CONTEXT_DEFAULT_STATE = {
  setNetwork: noop,
  network: Network.DEVNET,
};

export const SuiProviderContext = createContext<SuiProviderState>(
  CONTEXT_DEFAULT_STATE
);

const SuiProvider: FC<SuiProviderProps> = ({ children }) => {
  const [localNetwork, setLocalNetwork] = useLocalStorage(
    'sui-interest-network',
    Network.DEVNET
  );
  const [network, setNetwork] = useState<Network>(
    localNetwork || Network.DEVNET
  );

  const handleSetNetwork = (x: Network) => {
    setLocalNetwork(x);
    setNetwork(x);
  };
  return (
    <SuiProviderContext.Provider
      value={{ network, setNetwork: handleSetNetwork }}
    >
      {children}
    </SuiProviderContext.Provider>
  );
};

export default SuiProvider;
