import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { MenuMobileProps } from '../menu.types';
import MainMenu from './main-menu';
import LanguageMenu from './menu-mobile-language';

const MenuMobile: FC<MenuMobileProps> = ({
  isOpen,
  isLanguage,
  openLanguageMenu,
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
      overflowY="auto"
      position="fixed"
      bg="surface.container"
      display={['block', 'block', 'block', 'none']}
    >
      {isLanguage ? (
        <LanguageMenu />
      ) : (
        <MainMenu openLanguageMenu={openLanguageMenu} />
      )}
    </Box>
  );
};

export default MenuMobile;
