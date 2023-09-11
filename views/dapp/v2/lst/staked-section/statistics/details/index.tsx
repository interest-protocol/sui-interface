import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import { DETAILS_DATA } from './details.data';

const Details: FC = () => {
  const t = useTranslations();
  return (
    <Box
      p="l"
      flex="1"
      gap="l"
      display="flex"
      flexDirection="column"
      borderRadius="0.5rem"
      bg="surface.container"
    >
      <Typography variant="extraSmall" color="onSurface">
        {t('common.details')}
      </Typography>
      <Box key={v4()} display="flex" columnGap="l" alignItems="center">
        <Box
          display="flex"
          width="2.5rem"
          height="2.5rem"
          borderRadius="m"
          aspectRatio="1/1"
          alignItems="center"
          justifyContent="center"
          bg="surface.containerHigh"
          color="primary"
        >
          <DETAILS_DATA.Icon
            width="100%"
            maxHeight="1.25rem"
            maxWidth="1.25rem"
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="extraSmall" opacity="0.6" color="onSurface">
            {capitalize(t(DETAILS_DATA.description as TTranslatedMessage))}
          </Typography>
          <Typography variant="large" color="onSurface">
            {DETAILS_DATA.value}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
