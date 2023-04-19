import { Network } from '@/constants';
import {
  devNetProvider,
  suiNSDevNetProvider,
  suiNSTestNetProvider,
  testNetProvider,
} from '@/utils/provider';

import { useNetwork } from '../use-network';

const devNetProviders = {
  provider: devNetProvider,
  suiNSProvider: suiNSDevNetProvider,
};

const testNetProviders = {
  provider: testNetProvider,
  suiNSProvider: suiNSTestNetProvider,
};

export const useProvider = () => {
  const { network } = useNetwork();

  return network === Network.DEVNET ? devNetProviders : testNetProviders;
};
