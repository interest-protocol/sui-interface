import { Network } from '@/constants';
import {
  devNetProvider,
  suiNSDevProvider,
  testNetProvider,
} from '@/utils/provider';

import { useNetwork } from '../use-network';

const devNetProviders = {
  provider: devNetProvider,
  suiNSProvider: suiNSDevProvider,
};

const testNetProviders = {
  provider: testNetProvider,
  suiNSProvider: null,
};

export const useProvider = () => {
  const { network } = useNetwork();

  return network === Network.DEVNET ? devNetProviders : testNetProviders;
};
