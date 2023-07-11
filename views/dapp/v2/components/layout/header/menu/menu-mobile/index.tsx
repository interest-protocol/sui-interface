import {
  Box,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC } from 'react';

import { AppTheme } from '@/interface';

import { MenuMobileProps } from '../menu.types';
import MainMenu from './main-menu';
import SettingsMenu from './menu-mobile-settings';

const MenuMobile: FC<MenuMobileProps> = ({ isOpen, isSettings }) => {
  const t = useTranslations();
  const { dark, setDark } = useTheme() as AppTheme<Theme>;
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
      bg="surface.container"
      display={['block', 'block', 'block', 'none']}
    >
      <Box pt="s" gap="m" ml="4xl" display="flex">
        <Typography variant="medium" color="onSurface">
          {t('common.v2.menu.light')}
        </Typography>
        <SwitchButton
          name="theme"
          size="medium"
          defaultValue={dark}
          onChange={() => setDark(not)}
        />
        <Typography variant="medium" color="onSurface">
          {t('common.v2.menu.dark')}
        </Typography>
      </Box>
      {isSettings ? <SettingsMenu /> : <MainMenu />}
    </Box>
  );
};

export default MenuMobile;
