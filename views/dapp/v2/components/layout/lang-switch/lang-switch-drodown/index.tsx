import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { wrapperVariants } from '@/constants';
import { useLocale } from '@/hooks';
import { ArrowLeft } from '@/svg';

import LanguageMenuItem from '../../header/menu/language-menu-item';
import MenuItemWrapper from '../../header/menu/menu-item-wrapper';
import { LangSwitchDropdownProps } from '../lang-switch.types';

const LangSwitchDropdown: FC<LangSwitchDropdownProps> = ({ isOpen }) => {
  const t = useTranslations();
  const { locales, changeLocale } = useLocale();

  return (
    <Motion
      right="0"
      top="0rem"
      zIndex={1}
      initial="closed"
      borderRadius="m"
      position="absolute"
      bg="surface.container"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      <Box p="xl" display="flex" gap="l" color="onSurface" alignItems="center">
        <ArrowLeft maxHeight="1rem" maxWidth="1rem" width="100%" />
        <Typography variant="small" textTransform="capitalize">
          {t('common.v2.menu.selectLanguage')}
        </Typography>
      </Box>
      {locales.map((locale) => (
        <MenuItemWrapper key={v4()} onClick={() => changeLocale(locale)}>
          <LanguageMenuItem name={locale} />
        </MenuItemWrapper>
      ))}
    </Motion>
  );
};

export default LangSwitchDropdown;
