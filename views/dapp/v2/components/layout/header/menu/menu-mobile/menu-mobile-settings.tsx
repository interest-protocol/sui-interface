import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { useLocale } from '@/hooks';
import { capitalize } from '@/utils';

import LanguageMenuItem from '../language-menu-item';
import MenuItem from '../menu-item';
import MenuItemWrapper from '../menu-item-wrapper';

const LanguageMenu: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const { locales, changeLocale } = useLocale();

  return (
    <>
      <MenuItemWrapper onClick={() => setOpen(not)}>
        <MenuItem name="languages" isActive={isOpen} />
      </MenuItemWrapper>
      <Box>
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

const SettingsMenu: FC = () => {
  const t = useTranslations();

  return (
    <Box variant="container" color="text" pt="4xl" justifyItems="unset">
      <Box gridColumn="1/-1" mt="2xl">
        <Typography variant="displaySmall">
          {capitalize(t('common.v2.menu.settings'))}
        </Typography>
        <Motion animate="open" mt="4xl" py="4xl">
          <MenuItemWrapper>
            <MenuItem name="darkMode" />
          </MenuItemWrapper>
          <LanguageMenu />
        </Motion>
      </Box>
    </Box>
  );
};

export default SettingsMenu;
