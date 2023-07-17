import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { EarnHeaderOptionProps } from '../earn.types';

const HeaderItems: FC<EarnHeaderOptionProps> = (headerItems) => {
  const t = useTranslations();
  return (
    <Box display="flex" gap="m">
      {headerItems.isVolatile && (
        <Button variant="filled" size="small" bg="#FED7AA">
          <Typography
            variant="small"
            margin="0 auto"
            color="#92400E"
            textTransform="capitalize"
          >
            {t('common.volatile', { count: 1 })}
          </Typography>
        </Button>
      )}
      {headerItems.isStable && (
        <Button variant="filled" size="small" bg="#A5F3FC">
          <Typography
            variant="small"
            margin="0 auto"
            color="#155E75"
            textTransform="capitalize"
          >
            {t('common.stable', { count: 1 })}
          </Typography>
        </Button>
      )}
      {headerItems.isFarm && (
        <Button variant="filled" size="small" bg="#D9F99D">
          <Typography
            variant="small"
            margin="0 auto"
            color="#3F6212"
            textTransform="capitalize"
          >
            {t('common.farm')}
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default HeaderItems;
