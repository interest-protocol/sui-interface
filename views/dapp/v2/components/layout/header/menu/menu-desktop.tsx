import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { MenuDesktopProps } from './menu.types';
import MenuDropdown from './menu-dropdown';

const MenuDesktop: FC<MenuDesktopProps> = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <Box display={['none', 'none', 'none', 'block']}>
      <Box
        top="0"
        left="0"
        right="0"
        bottom="0"
        position="fixed"
        onClick={handleClose}
      />
      <MenuDropdown isOpen={isOpen} />
    </Box>
  );
};

export default MenuDesktop;
