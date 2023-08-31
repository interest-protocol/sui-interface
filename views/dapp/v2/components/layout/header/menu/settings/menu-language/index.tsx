import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useLocale } from '@/hooks';

import LanguageMenuItem from '../../language-menu-item';
import MenuItemWrapper from '../../menu-item-wrapper';
import { MenuLanguageProps } from '../menu.types';

const MenuLanguage: FC<MenuLanguageProps> = () => {
  const { locales, changeLocale } = useLocale();

  return (
    <Box>
      {locales.map((locale) => (
        <MenuItemWrapper key={v4()} onClick={() => changeLocale(locale)}>
          <LanguageMenuItem name={locale} />
        </MenuItemWrapper>
      ))}
    </Box>
  );
};

export default MenuLanguage;
