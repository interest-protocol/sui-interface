import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { MenuMobileProps } from '../menu.types';
import MainMenu from './main-menu';
import SettingsMenu from './menu-mobile-settings';

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
      display={['block', 'none']}
      bg="surface.container"
    >
      {isSettings ? <SettingsMenu /> : <MainMenu />}
    </Box>
  );
};

export default MenuMobile;
