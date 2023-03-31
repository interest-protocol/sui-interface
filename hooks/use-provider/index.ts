import { Network } from '@/constants';
import {
  devNetProvider,
  devNetWSProvider,
  testNetProvider,
  testNetWSProvider,
} from '@/utils/provider';

import { useNetwork } from '../use-network';

const devNetProviders = {
  provider: devNetProvider,
  wsProvider: devNetWSProvider,
};

const testNetProviders = {
  provider: testNetProvider,
  wsProvider: testNetWSProvider,
};

export const useProvider = () => {
  const { network } = useNetwork();

  return network === Network.DEVNET ? devNetProviders : testNetProviders;
};
