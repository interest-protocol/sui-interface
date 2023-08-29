import {
  Box,
  Motion,
  ProgressIndicator,
  RadioButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { formatAddress } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { UserSVG } from '@/components/svg/v2';
import { RightMenuVariants } from '@/components/web3-manager/connect-wallet/wallet/wallet-variants';
import { SEMANTIC_COLORS } from '@/constants';
import { useWeb3 } from '@/hooks';
import { capitalize } from '@/utils';

import MenuItemWrapper from '../../menu-item-wrapper';
import ChangeAccountHeader from '../menu-profile/change-account-header';
import { MenuSwitchAccountProps } from '../profile.types';
import { getName } from '../profile.utils';
import MenuSwitchAccountHeader from './header';

const MenuSwitchAccount: FC<MenuSwitchAccountProps> = ({
  loading,
  suiNSRecord,
  avatarUrlRecord,
  handleCloseProfile,
  isSwitchAccountOpen,
  handleCloseSwitchAccount,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { account } = useWeb3();
  const { accounts, selectAccount } = useWalletKit();

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
      top="0"
      right="0"
      zIndex={1}
      bg="surface"
      width="100%"
      height="100vh"
      initial="closed"
      borderRadius="m"
      overflow="visible"
      textTransform="capitalize"
      variants={RightMenuVariants}
      p={['xl', 'xl', 'xl', 'unset']}
      maxWidth={['100vw', '100vw', '100vw', '100%']}
      position={['fixed', 'fixed', 'fixed', 'absolute']}
      animate={isSwitchAccountOpen ? 'open' : 'closed'}
      pointerEvents={isSwitchAccountOpen ? 'auto' : 'none'}
    >
      <MenuSwitchAccountHeader
        size={accounts.length}
        handleCloseProfile={handleCloseProfile}
        handleCloseSwitchAccount={handleCloseSwitchAccount}
      />
      <ChangeAccountHeader
        loading={loading}
        suiNSRecord={suiNSRecord}
        avatarUrlRecord={avatarUrlRecord}
      />
      <Typography variant="small" color="outline" p="l" mt="4xl">
        {capitalize(
          t('common.v2.wallet.account', { count: accounts.length > 1 ? 0 : 1 })
        )}
      </Typography>
      {accounts.map((walletAccount, index) => (
        <MenuItemWrapper
          key={walletAccount.address}
          disabled={walletAccount.address === account}
          onClick={() => {
            if (!(walletAccount.address === account)) {
              selectAccount(walletAccount);
              handleCloseSwitchAccount();
            }
          }}
        >
          <Box display="flex" alignItems="center" gap="s" width="100%">
            <Box
              display="flex"
              width="1.5rem"
              height="1.5rem"
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
            <Box marginLeft="auto">
              {walletAccount.address === account ? (
                <RadioButton
                  name={walletAccount.address}
                  checked={!!walletAccount.address}
                />
              ) : (
                <RadioButton name={walletAccount.address} checked={false} />
              )}
            </Box>
          </Box>
        </MenuItemWrapper>
      ))}
    </Motion>
  );
};

export default MenuSwitchAccount;
