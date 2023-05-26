import {
  Box,
  Motion,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslations } from 'use-intl';

import { AppTheme } from '@/interface';
import { CaretRightSVG } from '@/svg';
import { capitalize } from '@/utils';

import { MenuItemProps } from './menu.types';

const MenuItem: FC<MenuItemProps> = ({ name, isActive }) => {
  const t = useTranslations();
  const { setDark, dark } = useTheme() as AppTheme<Theme>;

  return (
    <>
      <Typography
        variant="medium"
        whiteSpace="nowrap"
        letterSpacing="0.031rem"
        fontFamily="'Roboto', sans-serif"
      >
        {capitalize(t(`common.v2.menu.${name}`))}
      </Typography>
      <Box display="flex" justifyContent="flex-end" width="max-content">
        {name === 'languages' ? (
          <Motion
            alignItems="center"
            display="inline-flex"
            justifyContent="center"
            rotate={['90deg', '90deg', '0deg']}
            animate={{ rotate: isActive ? '180deg' : '0deg' }}
          >
            <CaretRightSVG maxWidth="0.5rem" maxHeight="0.5rem" width="100%" />
          </Motion>
        ) : (
          <SwitchButton
            name={name}
            defaultValue={dark}
            onChange={() => setDark(!dark)}
            labels={[t('common.v2.off'), t('common.v2.on')]}
          />
        )}
      </Box>
    </>
  );
};

export default MenuItem;
