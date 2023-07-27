import {
  Box,
  Motion,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { wrapperVariants } from '@/constants';
import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import MenuItemWrapper from '../../menu-item-wrapper';
import { MenuProfileProps } from '../profile.types';
import { MenuProfileData } from './menu.data';
import UserInfo from './user-info';

const MenuProfile: FC<MenuProfileProps> = ({
  isOpen,
  avatarUrlRecord,
  suiNSRecord,
  handleOpen,
  loading,
}) => {
  const t = useTranslations();
  const { disconnect } = useWalletKit();

  const handleAction = async (action: string) => {
    action === 'switch'
      ? handleOpen()
      : action === 'disconnect' && (await disconnect());
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
      {loading ? (
        <Box width="14rem" py="l">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="4rem"
          >
            <ProgressIndicator variant="loading" />
          </Box>
        </Box>
      ) : (
        <>
          <UserInfo
            avatarUrlRecord={avatarUrlRecord}
            suiNSRecord={suiNSRecord}
          />
          {MenuProfileData.map(
            ({ name, description, Icon, hasBorder, disabled }) => (
              <Box
                key={v4()}
                borderTop={hasBorder ? '1px solid' : 'unset'}
                borderColor="outline.outlineVariant"
              >
                <MenuItemWrapper
                  onClick={() => {
                    !disabled && handleAction(name);
                  }}
                  disabled={disabled}
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
        </>
      )}
    </Motion>
  );
};

export default MenuProfile;