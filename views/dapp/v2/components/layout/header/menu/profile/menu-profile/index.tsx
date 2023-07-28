import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SUI_VISION_EXPLORER_URL, wrapperVariants } from '@/constants';
import { useWeb3 } from '@/hooks';
import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import MenuItemWrapper from '../../menu-item-wrapper';
import { MenuProfileProps } from '../profile.types';
import { MENU_PROFILE_DATA } from './menu.data';
import UserInfo from './user-info';

const MenuProfile: FC<MenuProfileProps> = ({
  isOpen,
  loading,
  handleOpen,
  suiNSRecord,
  avatarUrlRecord,
}) => {
  const t = useTranslations();
  const { account } = useWeb3();
  const { disconnect } = useWalletKit();

  const handleAction: Record<string, () => void | Promise<void>> = {
    disconnect,
    switch: handleOpen,
    viewInExplorer: () => {
      window.open(`${SUI_VISION_EXPLORER_URL}/account/${account}`, '_blank');
    },
  };

  return (
    <Motion
      right="0"
      top="3rem"
      overflow="visible"
      zIndex={1}
      initial="closed"
      borderRadius="m"
      position="absolute"
      bg="surface.container"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
      textTransform="capitalize"
      width="14.5rem"
    >
      <UserInfo
        loading={loading}
        suiNSRecord={suiNSRecord}
        avatarUrlRecord={avatarUrlRecord}
      />
      {MENU_PROFILE_DATA.map(
        ({ name, description, Icon, hasBorder, disabled }) => (
          <Box
            key={v4()}
            borderTop={hasBorder ? '1px solid' : 'unset'}
            borderColor="outline.outlineVariant"
          >
            <MenuItemWrapper
              disabled={disabled}
              onClick={() => {
                if (!disabled) handleAction[name]?.();
              }}
            >
              <Box display="flex" alignItems="center" gap="l">
                <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
                <Typography
                  variant="small"
                  color="onSurface"
                  opacity={disabled ? 0.7 : 1}
                >
                  {capitalize(t(description as TTranslatedMessage))}
                </Typography>
              </Box>
            </MenuItemWrapper>
          </Box>
        )
      )}
    </Motion>
  );
};

export default MenuProfile;
