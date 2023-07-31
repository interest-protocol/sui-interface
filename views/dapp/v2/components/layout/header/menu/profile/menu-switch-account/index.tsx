import {
  Box,
  Button,
  Motion,
  ProgressIndicator,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { formatAddress } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { toast } from 'react-hot-toast';

import { CheckmarkSVG, CopySVG, UserSVG } from '@/components/svg/v2';
import { SEMANTIC_COLORS, wrapperVariants } from '@/constants';
import { useWeb3 } from '@/hooks';
import { capitalize } from '@/utils';

import MenuItemWrapper from '../../menu-item-wrapper';
import { MenuSwitchAccountProps } from '../profile.types';
import { getName } from '../profile.utils';
import MenuSwitchAccountHeader from './header';

const MenuSwitchAccount: FC<MenuSwitchAccountProps> = ({
  isOpen,
  onBack,
  loading,
  suiNSRecord,
  avatarUrlRecord,
  handleCloseProfile,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { account } = useWeb3();
  const { accounts, selectAccount } = useWalletKit();

  const copyToClipboard = (address: string) => {
    window.navigator.clipboard.writeText(address || '');
    toast(capitalize(t('common.v2.wallet.copy')));
  };

  const getIconBg = (index: number, address: string) =>
    loading
      ? 'transparent'
      : address === account
      ? 'primary'
      : SEMANTIC_COLORS[index % SEMANTIC_COLORS.length][
          dark ? 'dark' : 'light'
        ];

  return (
    <Motion
      right="0"
      top={['0', '0', '0', '3rem']}
      overflow="visible"
      zIndex={1}
      initial="closed"
      borderRadius="m"
      position={['fixed', 'fixed', 'fixed', 'absolute']}
      bg="surface.container"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
      textTransform="capitalize"
      width={['100vw', '100vw', '100vw', '14.5rem']}
      height={['100vh', '100vh', '100vh', 'unset']}
      p={['xl', 'xl', 'xl', 'unset']}
    >
      <MenuSwitchAccountHeader
        handleCloseProfile={handleCloseProfile}
        onBack={onBack}
        size={accounts.length}
      />
      {accounts.map((walletAccount, index) => (
        <MenuItemWrapper
          key={walletAccount.address}
          disabled={walletAccount.address === account}
          onClick={() => {
            if (!(walletAccount.address === account)) {
              selectAccount(walletAccount);
              onBack();
            }
          }}
        >
          <Box display="flex" alignItems="center" gap="s">
            {walletAccount.address === account && (
              <Box
                width="1rem"
                height="1rem"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px solid"
                borderColor="success"
                color="success"
              >
                <CheckmarkSVG
                  maxHeight="0.438rem"
                  maxWidth="0.438rem"
                  width="100%"
                />
              </Box>
            )}
            <Box
              width="1.5rem"
              height="1.5rem"
              display="flex"
              overflow="hidden"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
              color="primary.onPrimary"
              bg={getIconBg(index, walletAccount.address)}
            >
              {loading ? (
                <ProgressIndicator variant="loading" size={24} />
              ) : account && avatarUrlRecord[walletAccount.address] ? (
                <img
                  width="100%"
                  height="100%"
                  src={avatarUrlRecord[walletAccount.address]}
                  alt={`${getName(walletAccount.address, suiNSRecord)} NFT`}
                />
              ) : (
                <UserSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
              )}
            </Box>
            <Typography
              variant="small"
              color="onSurface"
              opacity={walletAccount.address === account ? 0.7 : 1}
            >
              {loading || suiNSRecord[walletAccount.address]
                ? suiNSRecord[walletAccount.address]
                : formatAddress(walletAccount.address)}
            </Typography>
          </Box>
          <Button
            size="small"
            variant="icon"
            p="0 !important"
            nHover={{
              color: 'primary',
              bg: 'transparent',
            }}
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(walletAccount.address);
            }}
          >
            <CopySVG maxHeight="1rem" maxWidth="1rem" width="100%" />
          </Button>
        </MenuItemWrapper>
      ))}
    </Motion>
  );
};

export default MenuSwitchAccount;
