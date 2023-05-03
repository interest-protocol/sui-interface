import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DotsSVG, SuiSVG } from '@/svg';
import { capitalize } from '@/utils';

import Navbar from '../../navbar';
import NavItemText from '../../navbar/nav-item-text';
import { MenuMobileProps } from '../menu.types';
import SettingsMenu from './menu-mobile-settings';

const MainMenu: FC<Pick<MenuMobileProps, 'handleOpenSettings'>> = ({
  handleOpenSettings,
}) => (
  <Box variant="container" justifyItems="unset">
    <Box pt="4xl" mt="4xl" zIndex="2" gridColumn="1/-1">
      <Box mb="2xl">
        <Box display="flex" alignItems="center">
          <Box
            bg="#99BBFF"
            display="flex"
            color="#0055FF"
            width="3.625rem"
            borderRadius="m"
            height="3.625rem"
            alignItems="center"
            justifyContent="center"
          >
            A
          </Box>
          <Typography variant="medium" ml="l" color="textSoft">
            0x85...9be9
          </Typography>
        </Box>
        <Box
          p="xl"
          mt="s"
          display="flex"
          borderRadius="m"
          surface="surface2"
          alignItems="center"
        >
          <Box height="1.5rem" color="text">
            <SuiSVG filled height="100%" maxWidth="1.5rem" maxHeight="1.5rem" />
          </Box>
          <Box ml="4xl">
            <Typography variant="extraSmall" color="textSoft">
              Wallet
            </Typography>
            <Typography variant="title4" color="text">
              0.0123
            </Typography>
          </Box>
        </Box>
        <Box display="flex" gap="s" mt="s">
          <Button variant="outline" width="100%" justifyContent="center">
            Switch Wallet
          </Button>
          <Button variant="filled" width="100%" justifyContent="center">
            Disconnect
          </Button>
        </Box>
      </Box>
      <Box m="m" pt="xl">
        <Navbar isMobile />
        <Box display="block" onClick={handleOpenSettings}>
          <Box display="flex" alignItems="center" color="textSoft">
            <Box height="1rem">
              <DotsSVG maxWidth="1rem" maxHeight="1rem" height="100%" />
            </Box>
            <NavItemText>{capitalize('settings')}</NavItemText>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

const MenuMobile: FC<MenuMobileProps> = ({
  isOpen,
  isSettings,
  handleOpenSettings,
}) => {
  if (!isOpen) return null;

  return (
    <Box
      top="0"
      pt="4xl"
      left="0"
      zIndex="1"
      width="100vw"
      height="100vh"
      position="fixed"
      surface="surface1"
      display={['block', 'none']}
    >
      {isSettings ? (
        <SettingsMenu />
      ) : (
        <MainMenu handleOpenSettings={handleOpenSettings} />
      )}
    </Box>
  );
};

export default MenuMobile;
