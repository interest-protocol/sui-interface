/* eslint-disable react/display-name */
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-tooltip/dist/react-tooltip.css';

import { Global } from '@emotion/react';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import NextProgress from 'next-progress';
import { ReactNode, StrictMode, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

import {
  LoadingPage,
  NetworkProvider,
  NextIntlProvider,
  ThemeManager,
} from '@/components';
import { LOCAL_STORAGE_VERSION } from '@/constants/local-storage';
import { GlobalStyles } from '@/design-system';
import { useLocalStorage } from '@/hooks';
import { NextPageDefaultProps } from '@/interface';

type Props = Omit<AppProps<NextPageDefaultProps>, 'pageProps'> & {
  pageProps: NextPageDefaultProps;
};

const WalletKitProvider = dynamic(
  () => import('@mysten/wallet-kit').then((mod) => mod.WalletKitProvider),
  {
    ssr: false,
    loading: LoadingPage,
  }
);

const MyApp = ({ Component, pageProps }: Props): ReactNode => {
  const [version, setVersion] = useLocalStorage('sui-interest-version', '');

  useEffect(() => {
    if (version !== LOCAL_STORAGE_VERSION) {
      window.localStorage.clear();
      setVersion(LOCAL_STORAGE_VERSION);
    }
  }, [version]);

  return (
    <>
      <Head>
        <title>Interest Protocol</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <NextProgress options={{ showSpinner: false }} />
      <NextIntlProvider
        formats={{
          dateTime: {
            short: {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            },
          },
        }}
        messages={pageProps.messages}
        now={new Date(pageProps.now)}
        timeZone="UTC"
      >
        <NetworkProvider>
          <WalletKitProvider>
            <Global styles={GlobalStyles} />
            <ThemeManager>
              <StrictMode>
                <Component {...pageProps} />
                <Tooltip id="interest-tooltip" />
                <VercelAnalytics />
              </StrictMode>
            </ThemeManager>
          </WalletKitProvider>
        </NetworkProvider>
      </NextIntlProvider>
    </>
  );
};

export default MyApp;
