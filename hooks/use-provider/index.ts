import { Network } from '@interest-protocol/sui-amm-sdk';

import {
  devNetProvider,
  mainNetProvider,
  suiNSDevNetProvider,
  suiNSMainNetProvider,
  suiNSTestNetProvider,
  testNetProvider,
} from '@/utils/provider';

import { useNetwork } from '../use-network';

const devNetProviderMap = {
  provider: devNetProvider,
  suiNSProvider: suiNSDevNetProvider,
};

const testNetProviderMap = {
  provider: testNetProvider,
  suiNSProvider: suiNSTestNetProvider,
};

const mainNetProviderMap = {
  provider: mainNetProvider,
  suiNSProvider: suiNSMainNetProvider,
};

const PROVIDER_MAP = {
  [Network.DEVNET]: devNetProviderMap,
  [Network.TESTNET]: testNetProviderMap,
  [Network.MAINNET]: mainNetProviderMap,
};

export const useProvider = () => {
  const { network } = useNetwork();

  return PROVIDER_MAP[network];
};
