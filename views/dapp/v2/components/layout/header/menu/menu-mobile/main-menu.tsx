import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import NetworkSwitch from '../../../network-switch';
import { MainMenuProps } from '../menu.types';
import MenuSettingsList from '../settings/menu-settings/settings-list';
import MobileMenuList from './menu-list';

const MainMenu: FC<MainMenuProps> = ({ openLanguageMenu }) => (
  <Box
    pt="2.875rem"
    m="0 1.25rem"
    display="flex"
    variant="container"
    justifyItems="unset"
    flexDirection="column"
    minHeight="100%"
    justifyContent="space-between"
  >
    <Box zIndex="2" gridColumn="1/-1">
      <Typography m="xl" variant="small" color="onSurfaceVariant">
        Menu
      </Typography>
      <MobileMenuList />
      <Motion
        zIndex={1}
        initial="open"
        bg="surface.container"
        textTransform="capitalize"
        animate="open"
        pt="xl"
      >
        <MenuSettingsList openLanguageMenu={openLanguageMenu} />
      </Motion>
    </Box>
    <Box
      mt="m"
      pb="l"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <NetworkSwitch />
    </Box>
  </Box>
);

export default MainMenu;
