import { Network } from '@interest-protocol/sui-sdk';
import { ReactNode } from 'react';

export interface NetworkProviderProps {
  children: ReactNode;
}

export interface NetworkProviderState {
  network: Network;
  setNetwork: (x: Network) => void;
}
