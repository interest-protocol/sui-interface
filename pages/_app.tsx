/* eslint-disable react/display-name */
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-tooltip/dist/react-tooltip.css';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextProgress from 'next-progress';
import { ReactNode, StrictMode, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

import { NextIntlProvider, ThemeManager } from '@/components';
import { LOCAL_STORAGE_VERSION } from '@/constants/local-storage';
import { useLocalStorage } from '@/hooks';
import { NextPageDefaultProps } from '@/interface';

type Props = Omit<AppProps<NextPageDefaultProps>, 'pageProps'> & {
  pageProps: NextPageDefaultProps;
};

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
        <ThemeManager>
          <StrictMode>
            <Component {...pageProps} />
            <Tooltip id="interest-tooltip" />
            <VercelAnalytics />
          </StrictMode>
        </ThemeManager>
      </NextIntlProvider>
    </>
  );
};

export default MyApp;
