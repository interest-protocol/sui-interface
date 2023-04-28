import {
  Box,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslations } from 'use-intl';

import { AppTheme } from '@/interface';
import { capitalize } from '@/utils';

import { MenuItemProps } from './menu.types';

const MenuItem: FC<MenuItemProps> = ({ name }) => {
  const t = useTranslations();
  const { setDark, dark } = useTheme() as AppTheme<Theme>;

  return (
    <>
      <Typography variant="medium" whiteSpace="nowrap">
        {capitalize(t(`common.v2.menu.${name}`))}
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        {name === 'languages' ? null : (
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
