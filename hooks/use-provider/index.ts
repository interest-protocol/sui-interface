import { Network } from '@/constants';
import { useSuiNetwork } from '@/hooks';
import {
  devNetMystenLabsProvider,
  devNetProvider,
  devNetWSProvider,
  testNetMystenLabsProvider,
  testNetProvider,
  testNetWSProvider,
} from '@/utils/provider';

export const useProvider = () => {
  const { network } = useSuiNetwork();

  return network === Network.DEVNET
    ? {
        provider: devNetProvider,
        wsProvider: devNetWSProvider,
        mystenLabsProvider: devNetMystenLabsProvider,
      }
    : {
        provider: testNetProvider,
        wsProvider: testNetWSProvider,
        mystenLabsProvider: testNetMystenLabsProvider,
      };
};
