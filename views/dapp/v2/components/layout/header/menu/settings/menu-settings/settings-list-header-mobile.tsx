import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { capitalize } from '@/utils';

const MenuSettingsListHeaderMobile: FC = () => {
  const t = useTranslations();

  return (
    <Box p="xl" mt="2xs" display="flex" justifyContent="space-between">
      <Typography variant="small" color="onSurface">
        {capitalize(t('common.v2.menu.settings'))}
      </Typography>
    </Box>
  );
};

export default MenuSettingsListHeaderMobile;
