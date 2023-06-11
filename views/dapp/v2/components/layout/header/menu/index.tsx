import { Box } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import LangSwitch from '../../lang-switch';
import Wallet from '../../wallet';
import MenuBackButton from './menu-back-button';
import MenuButton from './menu-button';
import MenuDesktop from './menu-desktop';
import MenuMobile from './menu-mobile';

const Menu: FC = () => {
  const { query } = useRouter();
  const [isOpen, setIsOpen] = useState(Boolean(query.menu));
  const [isSettings, setIsSettings] = useState(Boolean(query.settings));

  // TODO: uncomment on Settings UI ready
  // const handleOpenSettings = () => {
  //   const url = new URL(window.location.href);
  //   url.searchParams.set('settings', 'true');
  //   window.history.pushState('', '', url.toString());
  //   setIsSettings(true);
  // };

  const handleCloseSettings = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('settings');
    window.history.pushState('', '', url.toString());
    setIsSettings(false);
  };

  const handleOpen = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('menu', 'true');
    window.history.pushState('', '', url.toString());
    setIsOpen(true);
  };

  const handleClose = () => {
    handleCloseSettings();
    const url = new URL(window.location.href);
    url.searchParams.delete('menu');
    window.history.pushState('', '', url.toString());
    setIsOpen(false);
  };

  return (
    <Box position="relative" width={['100%', '100%', '100%', 'unset']}>
      <Box
        zIndex="2"
        display="flex"
        position="relative"
        flexDirection="row-reverse"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          {!isOpen && (
            <Box
              mr="xl"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Wallet />
              <LangSwitch />
            </Box>
          )}
          <MenuButton
            isOpen={isOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </Box>
        <MenuBackButton
          handleBack={handleCloseSettings}
          showButton={isOpen && isSettings}
        />
      </Box>
      <MenuDesktop isOpen={isOpen} handleClose={handleClose} />
      <MenuMobile isOpen={isOpen} isSettings={isSettings} />
    </Box>
  );
};

export default Menu;
