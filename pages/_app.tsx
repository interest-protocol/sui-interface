/* eslint-disable react/display-name */
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-tooltip/dist/react-tooltip.css';

import { Global } from '@emotion/react';
import { WalletKitProvider } from '@mysten/wallet-kit';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextProgress from 'next-progress';
import { ReactNode, StrictMode } from 'react';
import { TooltipProvider } from 'react-tooltip';

import { NextIntlProvider, ThemeManager } from '@/components';
import { GlobalStyles } from '@/design-system';
import { TTranslatedMessage } from '@/interface';

interface PageProps {
  now: number;
  pageTitle: string;
  messages: TTranslatedMessage;
}

type Props = Omit<AppProps<PageProps>, 'pageProps'> & {
  pageProps: PageProps;
};

const PREFERRED_WALLETS = ['Ethos Wallet', 'Sui Wallet'];

const MyApp = ({ Component, pageProps }: Props): ReactNode => {
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
        <WalletKitProvider preferredWallets={PREFERRED_WALLETS}>
          <Global styles={GlobalStyles} />
          <ThemeManager>
            <StrictMode>
              <TooltipProvider>
                <Component {...pageProps} />
                <VercelAnalytics />
              </TooltipProvider>
            </StrictMode>
          </ThemeManager>
        </WalletKitProvider>
      </NextIntlProvider>
    </>
  );
};

export default MyApp;
