import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useLocale } from '@/hooks';

import LanguageMenuItem from '../language-menu-item';
import MenuItemWrapper from '../menu-item-wrapper';

const LanguageMenu: FC = () => {
  const { locales, changeLocale } = useLocale();

  return (
    <Motion
      zIndex={1}
      initial="open"
      textTransform="capitalize"
      animate="open"
      pt="3.875rem"
      width="100%"
    >
      <Box display="flex" flexDirection="column" variant="container">
        {locales.map((locale) => (
          <MenuItemWrapper key={v4()} onClick={() => changeLocale(locale)}>
            <LanguageMenuItem name={locale} />
          </MenuItemWrapper>
        ))}
      </Box>
    </Motion>
  );
};

export default LanguageMenu;
