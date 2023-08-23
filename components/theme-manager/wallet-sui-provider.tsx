import { WalletAdapter } from '@mysten/wallet-adapter-base';
import { WalletStandardAdapterProvider } from '@mysten/wallet-adapter-wallet-standard';
import { WalletKitProvider } from '@mysten/wallet-kit';
import { NightlyConnectSuiAdapter } from '@nightlylabs/wallet-selector-sui';
import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';

import LoadingPage from '../loading-page';

const WalletSuiProvider: FC<PropsWithChildren> = ({ children }) => (
  <WalletKitProvider
    adapters={[
      new WalletStandardAdapterProvider(),
      NightlyConnectSuiAdapter.buildLazy(
        {
          appMetadata: {
            name: 'NCTestSui',
            description: 'Nightly Connect Test',
            icon: 'https://docs.nightly.app/img/logo.png',
            additionalInfo: 'Courtesy of Nightly Connect team',
          },
        },
        true
      ) as unknown as WalletAdapter,
    ]}
  >
    {children}
  </WalletKitProvider>
);

export default dynamic(() => Promise.resolve(WalletSuiProvider), {
  ssr: false,
  loading: LoadingPage,
});
