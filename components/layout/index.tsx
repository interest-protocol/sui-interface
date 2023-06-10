import { useTheme } from '@emotion/react';
import { Network } from '@interest-protocol/sui-sdk';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

import { Routes, RoutesEnum, TOAST_DURATION } from '@/constants';
import { Theme } from '@/design-system';
import { Box, Button } from '@/elements';
import { useNetwork, useWeb3 } from '@/hooks';
import ErrorBoundary from '@/views/dapp/components/error-boundary';

import { SEO } from '..';
import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  pageTitle = '',
  children,
}) => {
  const { asPath } = useRouter();
  const t = useTranslations();
  const { network } = useNetwork();
  const { colors, radii } = useTheme() as Theme;

  const { connected } = useWeb3();

  return (
    <ErrorBoundary>
      <Box color="text" height="100vh" display="flex" flexDirection="column">
        <SEO pageTitle={pageTitle} />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              color: colors.text,
              borderRadius: radii.M,
              background: colors.foreground,
            },
            duration: TOAST_DURATION,
          }}
        />
        <Header />
        <Box
          flex="1"
          as="main"
          bg="textSoft"
          display="flex"
          pb={['XXXL', 'L']}
          position="relative"
          flexDirection="column"
          justifyContent="space-between"
        >
          {children}
          {network === Network.MAINNET &&
            connected &&
            asPath != Routes[RoutesEnum.CreateToken] && (
              <Box
                p="L"
                bottom="0"
                width="auto"
                display="flex"
                position="sticky"
                justifyContent="end"
              >
                <Link href={Routes[RoutesEnum.CreateToken]}>
                  <Button
                    variant="primary"
                    bg="accentSecondary"
                    nHover={{ bg: 'accentOutline' }}
                  >
                    {t('common.createTokenModalButton', { isLoading: 0 })}
                  </Button>
                </Link>
              </Box>
            )}
        </Box>
        <Footer />
        <Tooltip />
      </Box>
    </ErrorBoundary>
  );
};

export default Layout;
