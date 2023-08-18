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

import { IWalletItem, WalletListSectionProps } from '../connect-wallet.types';
import { DEFAULT_WALLETS, WALLET_NAME_MAP } from './wallet.data';
import WalletItem from './wallet-item';

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
const WalletListSection: FC<WalletListSectionProps> = ({
  setOpenWallet,
  openWalletModal,
}) => {
  const t = useTranslations();
  const { wallets } = useWalletKit();

  const mixedWallets: Array<IWalletItem> = (wallets ?? [])
    .reduce(
      (acc, { icon, name }) => [
        {
          icon,
          name,
          displayName: icon ? WALLET_NAME_MAP[icon] ?? name : name,
        },
        ...acc.filter((item) => item.icon !== icon),
      ],
      DEFAULT_WALLETS
    )
    .sort(({ installLink }) => (installLink ? 1 : -1));

  return (
    <Box
      color="text"
      height="100vh"
      overflowY="auto"
      maxHeight="100vh"
      borderTopRightRadius={[0, 0, 0, 32]}
      background={lightTheme.colors.surface}
      borderBottomRightRadius={[0, 0, 0, 32]}
      width={['100%', '100%', '100%', '50%']}
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
              mx="auto"
              width="100%"
              px={['unset', 'unset', 'unset', '15%']}
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
                {t('common.v2.connectWallet.title')}
              </Typography>
              <Typography
                variant="small"
                color="black"
                mb={['2xl', '2xl', '2xl', '3.5rem']}
              >
                {t('common.v2.connectWallet.subtitle')}
              </Typography>
              <Box>
                {mixedWallets.map(
                  ({ icon, name, displayName, installLink }) => (
                    <WalletItem
                      key={v4()}
                      icon={icon}
                      name={name}
                      displayName={displayName}
                      installLink={installLink}
                      openWalletModal={openWalletModal}
                    />
                  )
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
          {t.rich('common.v2.connectWallet.footer', {
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
