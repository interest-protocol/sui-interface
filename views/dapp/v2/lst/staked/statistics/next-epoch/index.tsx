import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { UsersSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

import EpochProgressBar from './epoch-progress-bar';

const NextEpoch: FC = () => {
  const t = useTranslations();
  const value = 96;

  return (
    <Box
      p="l"
      gap="l"
      flex="1"
      display="flex"
      flexDirection="column"
      borderRadius="0.5rem"
      bg="surface.container"
    >
      <Typography
        color="onSurface"
        variant="extraSmall"
        textTransform="capitalize"
      >
        {t('lst.epoch.title')}
      </Typography>
      <Box display="flex" columnGap="l" alignItems="center">
        <Box
          display="flex"
          width="2.5rem"
          height="2.5rem"
          color="primary"
          borderRadius="m"
          aspectRatio="1/1"
          alignItems="center"
          justifyContent="center"
          bg="surface.containerHigh"
        >
          <UsersSVG width="100%" maxHeight="1.25rem" maxWidth="1.25rem" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="extraSmall" opacity="0.6" color="onSurface">
            {capitalize(t('lst.overview.validators'))}
          </Typography>
          <Typography variant="large" color="onSurface">
            {value}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap="m">
        <Typography
          opacity="0.6"
          variant="small"
          color="onSurface"
          textTransform="uppercase"
        >
          {t('lst.epoch.end')}
        </Typography>
        <EpochProgressBar percentage={60} />
      </Box>
    </Box>
  );
};

export default NextEpoch;
