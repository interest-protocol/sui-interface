import { Box, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import Wallet from '../../wallet';
import MenuBackButton from './menu-back-button';
import MenuButton from './menu-button';
import MenuMobile from './menu-mobile';

const Menu: FC = () => {
  const t = useTranslations();
  const { query } = useRouter();
  const [isOpen, setIsOpen] = useState(Boolean(query.menu));
  const [isLanguage, setIsLanguage] = useState(Boolean(query.language));

  const handleCloseLanguage = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('language');
    window.history.pushState('', '', url.toString());
    setIsLanguage(false);
  };

  const openLanguageMenu = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('language', 'true');
    window.history.pushState('', '', url.toString());
    setIsLanguage(true);
  };

  const handleOpen = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('menu', 'true');
    window.history.pushState('', '', url.toString());
    setIsOpen(true);
  };

  const handleClose = () => {
    handleCloseLanguage();
    const url = new URL(window.location.href);
    url.searchParams.delete('menu');
    window.history.pushState('', '', url.toString());
    setIsOpen(false);
  };

  return (
    <Box position="relative" width="100%">
      <Box
        zIndex="2"
        ml="-2.5rem"
        display="flex"
        alignItems="center"
        position="relative"
        flexDirection="row-reverse"
        justifyContent="space-between"
        bg={isOpen ? 'transparent' : 'unset'}
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
            </Box>
          )}
          <MenuButton
            isOpen={isOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </Box>
        <Typography
          variant="small"
          textTransform="capitalize"
          textAlign="center"
          color="onSurface"
          display={isLanguage ? 'block' : 'none'}
        >
          {t('common.v2.menu.selectLanguage')}
        </Typography>
        <MenuBackButton
          handleBack={handleCloseLanguage}
          showButton={isOpen && isLanguage}
        />
      </Box>
      <MenuMobile
        isOpen={isOpen}
        isLanguage={isLanguage}
        openLanguageMenu={openLanguageMenu}
      />
    </Box>
  );
};

export default Menu;
