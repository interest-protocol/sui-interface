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

const ThemeSwitch: FC = () => {
  const t = useTranslations();
  const { dark, setDark } = useTheme() as AppTheme<Theme>;

  return (
    <Box display="flex" justifyContent="center" gap="l" alignItems="center">
      <Typography variant="small" color="onSurface">
        {t('common.v2.menu.light')}
      </Typography>
      <SwitchButton
        name="theme"
        size="medium"
        defaultValue={dark}
        onChange={() => setDark(not)}
      />
      <Typography variant="small" color="onSurface">
        {t('common.v2.menu.dark')}
      </Typography>
    </Box>
  );
};

export default ThemeSwitch;
