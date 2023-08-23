import { WalletAdapter } from '@mysten/wallet-adapter-base';
import { WalletStandardAdapterProvider } from '@mysten/wallet-adapter-wallet-standard';
import { NightlyConnectSuiAdapter } from '@nightlylabs/wallet-selector-sui';
import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';

import LoadingPage from '../loading-page';

const WalletKitProvider = dynamic(
  () => import('@mysten/wallet-kit').then((mod) => mod.WalletKitProvider),
  {
    ssr: false,
    loading: LoadingPage,
  }
);

const WalletSuiProvider: FC<PropsWithChildren> = ({ children }) => (
  <WalletKitProvider
    adapters={[
      new WalletStandardAdapterProvider(),
      new NightlyConnectSuiAdapter({
        appMetadata: {
          name: 'Interest Protocol',
          description: 'AMM DEX on Sui. Swap your tokens!',
          icon: '/android-chrome-256x256.png',
          url: 'https://interestprotocol.com/',
        },
      }) as unknown as WalletAdapter,
    ]}
  >
    {children}
  </WalletKitProvider>
);

export default dynamic(() => Promise.resolve(WalletSuiProvider), {
  ssr: false,
});
