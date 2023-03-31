import { ReactNode } from 'react';

import { Network } from '@/constants';

export interface NetworkProviderProps {
  children: ReactNode;
}

export interface NetworkProviderState {
  network: Network;
  setNetwork: (x: Network) => void;
}
