import { Network } from '@/constants';
import { devNetProvider, testNetProvider } from '@/utils/provider';

import { useNetwork } from '../use-network';

const devNetProviders = {
  provider: devNetProvider,
};

const testNetProviders = {
  provider: testNetProvider,
};

export const useProvider = () => {
  const { network } = useNetwork();

  return network === Network.DEVNET ? devNetProviders : testNetProviders;
};
