import {
  Box,
  Button,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { formatAddress } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { toast } from 'react-hot-toast';
import { useLocalStorage } from 'usehooks-ts';

import { CheckmarkSVG, CopySVG, UserSVG } from '@/components/svg/v2';
import { SEMANTIC_COLORS, wrapperVariants } from '@/constants';
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
  const { dark } = useTheme() as Theme;
  const { account } = useWeb3();
  const { accounts, selectAccount } = useWalletKit();

  const copyToClipboard = (address: string) => {
    window.navigator.clipboard.writeText(address || '');
    toast(capitalize(t('common.v2.wallet.copy')));
  };

  const [randomColor] = useLocalStorage<
    ReadonlyArray<{ dark: string; light: string }>
  >(
    'sui-interest-account-colors',
    SEMANTIC_COLORS.sort(() => Math.random() - 0.5)
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
      width="14.5rem"
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
          disabled={walletAccount.address === account}
          onClick={() => {
            if (!(walletAccount.address === account)) {
              selectAccount(walletAccount);
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
              bg={
                dark
                  ? randomColor[index % randomColor.length].dark
                  : randomColor[index % randomColor.length].light
              }
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
