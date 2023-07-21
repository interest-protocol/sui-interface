import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { wrapperVariants } from '@/constants';
import { useLocale } from '@/hooks';
import { ArrowLeft } from '@/svg';

import LanguageMenuItem from '../../language-menu-item';
import MenuItemWrapper from '../../menu-item-wrapper';
import { MenuLanguageProps } from '../menu.types';

const MenuLanguage: FC<MenuLanguageProps> = ({ isOpen, onBack }) => {
  const t = useTranslations();
  const { locales, changeLocale } = useLocale();

  return (
    <Motion
      right="0"
      top="3rem"
      zIndex={1}
      initial="closed"
      borderRadius="m"
      position="absolute"
      bg="surface.container"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      <Box p="xl" display="flex" gap="xs" color="onSurface" alignItems="center">
        <Button
          variant="icon"
          p="0 !important"
          nHover={{
            color: 'primary',
            bg: 'transparent',
          }}
          onClick={onBack}
        >
          <ArrowLeft maxHeight="1rem" maxWidth="1rem" width="100%" />
        </Button>
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

export default MenuLanguage;
