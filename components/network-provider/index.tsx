import { Network } from '@interest-protocol/sui-amm-sdk';
import { useRouter } from 'next/router';
import { createContext, FC, useEffect, useState } from 'react';

import { NETWORK_RESTRICTION } from '@/constants';
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

  // Alpha folder is only available on Sui Testnet
  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' &&
      !asPath.includes('/dapp/alpha') &&
      network !== Network.MAINNET
    )
      setNetwork(Network.MAINNET);

    if (asPath.includes('/dapp/alpha') && network !== Network.TESTNET)
      setNetwork(Network.TESTNET);

    if (
      NETWORK_RESTRICTION[Network.MAINNET].includes(asPath) &&
      network !== Network.MAINNET
    )
      setNetwork(Network.MAINNET);

    if (
      NETWORK_RESTRICTION[Network.TESTNET].includes(asPath) &&
      network !== Network.TESTNET
    )
      setNetwork(Network.TESTNET);
  }, [network, asPath]);

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
