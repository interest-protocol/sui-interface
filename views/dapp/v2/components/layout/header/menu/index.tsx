import { Box, Button } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { capitalize } from '@/utils';

import MenuBackButton from './menu-back-button';
import MenuButton from './menu-button';
import MenuDesktop from './menu-desktop';
import MenuMobile from './menu-mobile';

const Menu: FC = () => {
  const t = useTranslations();
  const { query } = useRouter();
  const [isOpen, setIsOpen] = useState(Boolean(query.menu));
  const [isSettings, setIsSettings] = useState(Boolean(query.settings));

  const handleOpenSettings = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('settings', 'true');
    window.history.pushState('', '', url.toString());
    setIsSettings(true);
  };

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
    <Box position="relative" width={['100%', 'unset']}>
      <Box
        zIndex="2"
        display="flex"
        position="relative"
        flexDirection="row-reverse"
        justifyContent="space-between"
      >
        <Box display="flex">
          {!isOpen && (
            <Button mr="s" variant="filled" color="textPrimary">
              {capitalize(t('common.v2.wallet.connect'))}
            </Button>
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
      <MenuMobile
        isOpen={isOpen}
        isSettings={isSettings}
        handleOpenSettings={handleOpenSettings}
      />
    </Box>
  );
};

export default Menu;
