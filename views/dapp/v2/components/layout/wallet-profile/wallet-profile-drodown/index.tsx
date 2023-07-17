import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import {
  ActivitySVG,
  AssetsSVG,
  CopySVG,
  LinkSVG,
  LogoutSVG,
  SwitchSVG,
  UserSVG,
} from '@/components/svg/v2';
import { wrapperVariants } from '@/constants';
import RefBox from '@/elements/ref-box';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';
import { AppTheme } from '@/interface';
import { capitalize } from '@/utils';

import MenuItemWrapper from '../../header/menu/menu-item-wrapper';
import SwitchAccountDropdown from '../../switch-account-drodown';
import { WalletProfileDropdownProps } from '../wallet-profile.types';

const BOX_ID_PREVIOUS = 'switch-account-box-id-123';
const BOX_ID = 'lang-switch-box-id-1234';

const WalletProfileDropdown: FC<WalletProfileDropdownProps> = ({ isOpen }) => {
  const t = useTranslations();
  const { colors } = useTheme() as AppTheme<Theme>;
  const [isOpened, setIsOpen] = useState(false);

  const closeDropdown = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == BOX_ID) ||
      event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
    )
      return;

    setIsOpen(false);
  };

  const closePreviousDropdown = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == BOX_ID_PREVIOUS) ||
      event?.composedPath()?.some((node: any) => node?.id == BOX_ID_PREVIOUS)
    )
      return;

    setIsOpen(false);
  };

  const openNextDropdown = () => {
    closePreviousDropdown;
    setIsOpen(true);
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

  const connectedPreviousBoxRef = useClickOutsideListenerRef<HTMLDivElement>(
    closePreviousDropdown
  );

  return (
    <>
      <RefBox id={BOX_ID_PREVIOUS} ref={connectedPreviousBoxRef}>
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
        >
          <Box p="xl">
            <Typography
              variant="large"
              color="onSurface"
              textTransform="capitalize"
            >
              {t('common.v2.wallet.name')}
            </Typography>
          </Box>
          <Box borderBottom="1px solid" borderColor="outline.outlineVariant">
            <MenuItemWrapper>
              <Box display="flex" alignItems="center" gap="l">
                <Box
                  bg="primary"
                  color={colors['primary.onPrimary']}
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
                  0x025f6e...
                </Typography>
              </Box>
              <CopySVG maxHeight="1rem" maxWidth="1rem" width="100%" />
            </MenuItemWrapper>
          </Box>
          <MenuItemWrapper>
            <Box display="flex" alignItems="center" gap="l">
              <ActivitySVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />

              <Typography variant="small" color="onSurface">
                {t('common.v2.wallet.activity')}
              </Typography>
            </Box>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Box display="flex" alignItems="center" gap="l">
              <AssetsSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />

              <Typography variant="small" color="onSurface">
                {t('common.v2.wallet.assets')}
              </Typography>
            </Box>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Box display="flex" alignItems="center" gap="l">
              <LinkSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
              <Typography variant="small" color="onSurface">
                {capitalize(t('common.v2.wallet.viewInExplorer'))}
              </Typography>
            </Box>
          </MenuItemWrapper>
          <RefBox id={BOX_ID} ref={connectedBoxRef}>
            <MenuItemWrapper onClick={openNextDropdown}>
              <Box display="flex" alignItems="center" gap="l">
                <SwitchSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
                <Typography variant="small" color="onSurface">
                  {t('common.v2.wallet.switch')}
                </Typography>
              </Box>
            </MenuItemWrapper>
          </RefBox>
          <Box borderTop="1px solid" borderColor="outline.outlineVariant">
            <MenuItemWrapper>
              <Box display="flex" alignItems="center" gap="l">
                <LogoutSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
                <Typography variant="small" color="onSurface">
                  {t('common.v2.wallet.disconnect')}
                </Typography>
              </Box>
            </MenuItemWrapper>
          </Box>
        </Motion>
      </RefBox>
      {isOpened && (
        <RefBox id={BOX_ID} ref={connectedBoxRef} zIndex={2}>
          <SwitchAccountDropdown isOpen={isOpen} />
        </RefBox>
      )}
    </>
  );
};

export default WalletProfileDropdown;
