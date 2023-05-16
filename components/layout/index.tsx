import { useTheme } from '@emotion/react';
import { Network } from '@interest-protocol/sui-sdk';
import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

import { TOAST_DURATION } from '@/constants';
import { Theme } from '@/design-system';
import { Box, Button } from '@/elements';
import { useModal, useNetwork, useWeb3 } from '@/hooks';
import CreateTokenForm from '@/views/dapp/components/create-token-form';
import ErrorBoundary from '@/views/dapp/components/error-boundary';

import { SEO } from '..';
import Web3Manager from '../web3-manager';
import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  pageTitle = '',
  children,
}) => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { colors, radii } = useTheme() as Theme;

  const modal = useModal();
  const { connected } = useWeb3();

  const openModal = () =>
    modal &&
    modal.setModal(
      <Web3Manager>
        <CreateTokenForm handleCloseModal={modal.handleClose} />
      </Web3Manager>
    );

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
        >
          {children}
          {network === Network.MAINNET && connected && (
            <Box
              p="L"
              bottom="0"
              width="auto"
              display="flex"
              position="sticky"
              justifyContent="end"
            >
              <Button
                variant="primary"
                bg="accentSecondary"
                nHover={{ bg: 'accentOutline' }}
                onClick={openModal}
              >
                {t('common.createTokenModalButton', { isLoading: 0 })}
              </Button>
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
