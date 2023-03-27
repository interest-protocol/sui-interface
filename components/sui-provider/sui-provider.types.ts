import { ReactNode } from 'react';

import { Network } from '@/constants';

export interface SuiProviderProps {
  children: ReactNode;
}

export interface SuiProviderState {
  network: Network;
  setNetwork: (x: Network) => void;
}
