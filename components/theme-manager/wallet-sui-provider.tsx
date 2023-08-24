import { WalletAdapter } from '@mysten/wallet-adapter-base';
import { WalletStandardAdapterProvider } from '@mysten/wallet-adapter-wallet-standard';
import { WalletKitProvider } from '@mysten/wallet-kit';
import { NightlyConnectSuiAdapter } from '@nightlylabs/wallet-selector-sui';
import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';

import LoadingPage from '../loading-page';

const NIGHTLY_DATA = {
  appMetadata: {
    name: 'Interest Protocol',
    description: 'Swap, lend and borrow on Sui Network',
    icon: 'https://www.interestprotocol.com/android-chrome-256x256.png',
    additionalInfo: 'Courtesy of the Nightly Connect team',
  },
};

const WalletSuiProvider: FC<PropsWithChildren> = ({ children }) => (
  <WalletKitProvider
    adapters={[
      new WalletStandardAdapterProvider(),
      NightlyConnectSuiAdapter.buildLazy(
        NIGHTLY_DATA,
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
