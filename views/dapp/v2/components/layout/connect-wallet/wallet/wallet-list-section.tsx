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
                color="black"
              >
                {t('connectWallet.title')}
              </Typography>
              <Typography
                variant="small"
                color="black"
                mb={['2xl', '2xl', '2xl', '3.5rem']}
              >
                {t('connectWallet.subtitle')}
              </Typography>
              <Box>
                {wallets.length === 0 ? (
                  <WalletItem key={v4()} name="Sui Wallet" />
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
