import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { useLocale } from '@/hooks';

import LanguageMenuItem from '../language-menu-item';
import MenuItem from '../menu-item';
import MenuItemWrapper from '../menu-item-wrapper';

const LanguageMenu: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const { locales, changeLocale } = useLocale();

  return (
    <>
      <MenuItemWrapper
        onClick={() => setOpen(not)}
        surface={isOpen ? 'surface2' : undefined}
      >
        <MenuItem name="languages" isActive={isOpen} />
      </MenuItemWrapper>
      <Box surface={isOpen ? 'surface2' : undefined}>
        {isOpen &&
          locales.map((locale) => (
            <MenuItemWrapper key={v4()} onClick={() => changeLocale(locale)}>
              <LanguageMenuItem name={locale} />
            </MenuItemWrapper>
          ))}
      </Box>
    </>
  );
};

const SettingsMenu: FC = () => (
  <Box variant="container" color="text" pt="4xl" justifyItems="unset">
    <Box gridColumn="1/-1" mt="2xl">
      <Typography variant="displaySmall">Settings</Typography>
      <Motion animate="open" mt="4xl" py="4xl">
        <MenuItemWrapper>
          <MenuItem name="darkMode" />
        </MenuItemWrapper>
        <LanguageMenu />
      </Motion>
    </Box>
  </Box>
);

export default SettingsMenu;
