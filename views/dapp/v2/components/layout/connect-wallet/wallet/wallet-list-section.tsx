import {
  Box,
  darkTheme,
  lightTheme,
  Motion,
  Typography,
} from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC, ReactNode } from 'react';
import { v4 } from 'uuid';

import { TimesSVG } from '@/components/svg/v2';

import { WalletListSectionProps } from '../connect-wallet.types';
import WalletItem from './wallet-item';

const SUI_IMAGE =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjcyIiByeD0iMTYiIGZpbGw9IiM2RkJDRjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC40MjEzIDUyLjc4MzhDMjMuNjQ5NiA1OC4zNzYgMjkuNDMyMSA2MS43MTQyIDM1Ljg4ODggNjEuNzE0MkM0Mi4zNDU1IDYxLjcxNDIgNDguMTI3IDU4LjM3NiA1MS4zNTY0IDUyLjc4MzhDNTQuNTg0OCA0Ny4xOTI2IDU0LjU4NDggNDAuNTE2MyA1MS4zNTY0IDM0LjkyNEwzNy43NTI0IDExLjM2MTVDMzYuOTI0MSA5LjkyNzAxIDM0Ljg1MzUgOS45MjcwMSAzNC4wMjUzIDExLjM2MTVMMjAuNDIxMyAzNC45MjRDMTcuMTkyOSA0MC41MTUyIDE3LjE5MjkgNDcuMTkxNSAyMC40MjEzIDUyLjc4MzhaTTMyLjA1NjYgMjIuNTcxM0wzNC45NTcxIDE3LjU0NzRDMzUuMzcxMiAxNi44MzAxIDM2LjQwNjUgMTYuODMwMSAzNi44MjA2IDE3LjU0NzRMNDcuOTc5MSAzNi44NzQ4QzUwLjAyOTEgNDAuNDI1NCA1MC40MTM5IDQ0LjUzNSA0OS4xMzM1IDQ4LjI5NTRDNDkuMDAwMiA0Ny42ODE5IDQ4LjgxMzggNDcuMDU0MiA0OC41NjI2IDQ2LjQyMDFDNDcuMDIxMyA0Mi41MzA0IDQzLjUzNjMgMzkuNTI4OSAzOC4yMDIzIDM3LjQ5ODJDMzQuNTM1MSAzNi4xMDcxIDMyLjE5NDMgMzQuMDYxMyAzMS4yNDMxIDMxLjQxNzFDMzAuMDE4IDI4LjAwODkgMzEuMjk3NiAyNC4yOTI0IDMyLjA1NjYgMjIuNTcxM1pNMjcuMTEwNyAzMS4xMzc5TDIzLjc5ODYgMzYuODc0OEMyMS4yNzQ4IDQxLjI0NTkgMjEuMjc0OCA0Ni40NjQxIDIzLjc5ODYgNTAuODM1M0MyNi4zMjIzIDU1LjIwNjQgMzAuODQxMyA1Ny44MTUgMzUuODg4OCA1Ny44MTVDMzkuMjQxMyA1Ny44MTUgNDIuMzYxNSA1Ni42NjMzIDQ0LjgxODQgNTQuNjA4OEM0NS4xMzg4IDUzLjgwMjEgNDYuMTMxIDUwLjg0OTIgNDQuOTA1MiA0Ny44MDU4QzQzLjc3MyA0NC45OTU0IDQxLjA0ODIgNDIuNzUxOSAzNi44MDYxIDQxLjEzNkMzMi4wMTEgMzkuMzE3MSAyOC44OTU4IDM2LjQ3NzQgMjcuNTQ4NiAzMi42OTg0QzI3LjM2MzEgMzIuMTc4MSAyNy4yMTg5IDMxLjY1NjggMjcuMTEwNyAzMS4xMzc5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+';

const WalletListSection: FC<WalletListSectionProps> = ({
  setOpenWallet,
  openWalletModal,
}) => {
  const t = useTranslations();
  const { wallets } = useWalletKit();
  const menuVariants = {
    open: {
      rotate: '0deg',
      scaleY: 1,
    },
    closed: {
      rotate: '180deg',
      scaleY: 0,
    },
  };

  return (
    <Box
      background={[lightTheme.colors.surface]}
      color="text"
      overflowY="auto"
      maxHeight="100vh"
      height="100vh"
      width={['100%', '100%', '100%', '50%']}
      borderBottomRightRadius={[0, 0, 0, 32]}
      borderTopRightRadius={[0, 0, 0, 32]}
    >
      <Box
        display="flex"
        variant="container"
        flexDirection="column"
        minHeight="calc(98.9vh - 8.5rem)"
      >
        <Box display="grid" gridColumn="1/-1" height="100%" margin={0}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box
              px={['unset', 'unset', 'unset', '15%']}
              width="100%"
              mx="auto"
              pt={['0rem', '0rem', '0rem', '8.125rem']}
            >
              <Motion
                p=".8rem"
                as="span"
                border="1px solid"
                borderRadius="50%"
                width="fit-content"
                alignItems="center"
                margin="1.5rem 0 1.5rem auto"
                justifyContent="center"
                animate={menuVariants.open}
                initial={menuVariants.closed}
                color={['black', 'black', 'black', 'white']}
                display={['flex', 'flex', 'flex', 'none']}
                borderColor={darkTheme.colors['outline.outlineVariant']}
                cursor="pointer"
                onClick={() => setOpenWallet(false)}
              >
                <TimesSVG
                  width="100%"
                  height="100%"
                  maxWidth=".9rem"
                  maxHeight=".9rem"
                />
              </Motion>
              <Typography
                variant="displaySmall"
                fontSize={['5xl', '5xl', '5xl', '7xl']}
                color="#000"
              >
                {t('connectWallet.title')}
              </Typography>
              <Typography
                variant="small"
                color="#000"
                mb={['2xl', '2xl', '2xl', '3.5rem']}
              >
                {t('connectWallet.subtitle')}
              </Typography>
              <Box>
                {wallets.length === 0 ? (
                  <WalletItem key={v4()} icon={SUI_IMAGE} name="Sui Wallet" />
                ) : (
                  wallets.map((wallet) => (
                    <WalletItem
                      key={v4()}
                      icon={wallet.icon}
                      name={wallet.name}
                      openWalletModal={openWalletModal}
                      hasInstalled
                    />
                  ))
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        mt="xl"
        p="3xl"
        bg={lightTheme.colors['surface.container']}
        borderBottomRightRadius={[0, 0, 0, 32]}
      >
        <Typography variant="extraSmall" textAlign="center">
          {t.rich('connectWallet.footer', {
            termsAndService: (chunks: ReactNode) => (
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Typography
                  variant="extraSmall"
                  as="span"
                  color={lightTheme.colors.primary}
                >
                  {chunks}
                </Typography>
              </a>
            ),
            privacyPolicy: (chunks: ReactNode) => (
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Typography
                  variant="extraSmall"
                  as="span"
                  color={lightTheme.colors.primary}
                >
                  {chunks}
                </Typography>
              </a>
            ),
          })}
        </Typography>
      </Box>
    </Box>
  );
};

export default WalletListSection;
