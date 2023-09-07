import { Box, Typography } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import Settings from '@/views/dapp/v2/components/layout/header/menu/settings';

import { IWalletItem, WalletListSectionProps } from '../connect-wallet.types';
import { DEFAULT_WALLETS, WALLET_NAME_MAP } from './wallet.data';
import WalletItem from './wallet-item';

const WalletListSection: FC<WalletListSectionProps> = ({ openWalletModal }) => {
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
      px="l"
      width="100%"
      height="100%"
      overflowY="auto"
      color="onSurface"
      background="surface"
      borderLeft="1px solid"
      borderLeftColor="outline.outlineVariant"
    >
      <Box display="flex" variant="container" flexDirection="column">
        <Box display="grid" gridColumn="1/-1" height="100%" margin={0}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box width="100%">
              <Box
                mb="4xl"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="medium"
                  color="onSurface"
                  textTransform="uppercase"
                >
                  {t('common.v2.connectWallet.title')}
                </Typography>
                <Settings />
              </Box>
              <Box display="flex" gap="xs" flexDirection="column">
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
    </Box>
  );
};

export default WalletListSection;
