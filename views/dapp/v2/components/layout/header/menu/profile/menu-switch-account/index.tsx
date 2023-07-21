import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { formatAddress } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';
import { toast } from 'react-hot-toast';

import { CopySVG, UserSVG } from '@/components/svg/v2';
import { wrapperVariants } from '@/constants';
import { useWeb3 } from '@/hooks';
import { ArrowLeft } from '@/svg';
import { capitalize } from '@/utils';

import MenuItemWrapper from '../../menu-item-wrapper';
import { MenuSwitchAccountProps } from '../profile.types';

const MenuSwitchAccount: FC<MenuSwitchAccountProps> = ({
  isOpen,
  loading,
  suiNSRecord,
  onBack,
}) => {
  const t = useTranslations();
  const { account } = useWeb3();
  const { accounts, selectAccount } = useWalletKit();

  const copyToClipboard = (address: string) => {
    window.navigator.clipboard.writeText(address || '');
    toast(capitalize(t('common.v2.wallet.copy')));
  };
  const colorsArray = useMemo(
    () =>
      ['#fde68a', '#fed7aa', '#d9f99d', '#a5f3fc', '#e9d5ff', '#fecaca'].sort(
        () => Math.random() - 0.5
      ),
    []
  );

  return (
    <Motion
      right="0"
      top="3rem"
      zIndex={1}
      initial="closed"
      borderRadius="m"
      position="absolute"
      bg="surface.container"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      <Box p="xl" display="flex" gap="xs" color="onSurface" alignItems="center">
        <Button
          variant="icon"
          p="0 !important"
          nHover={{
            color: 'primary',
            bg: 'transparent',
          }}
          onClick={onBack}
        >
          <ArrowLeft maxHeight="1rem" maxWidth="1rem" width="100%" />
        </Button>
        <Typography variant="small" textTransform="capitalize">
          {t('common.v2.wallet.switch')}
        </Typography>
      </Box>
      {accounts.map((walletAccount, index) => (
        <MenuItemWrapper
          key={walletAccount.address}
          onClick={() => {
            if (!(walletAccount.address === account)) {
              selectAccount(walletAccount);
            }
          }}
        >
          <Box display="flex" alignItems="center" gap="l">
            <Box
              bg={colorsArray[index]}
              color="rgba(0,0,0,0.4)"
              width="1.5rem"
              height="1.5rem"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <UserSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
            </Box>
            <Typography variant="small" color="onSurface">
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
