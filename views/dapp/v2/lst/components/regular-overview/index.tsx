import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import { useGetCurrentEpoch } from '../../lst.hooks';
import EpochProgressBar from '../next-epoch/epoch-progress-bar';
import { REGULAR_OVERVIEW_DATA } from './regular-overview.data';

const RegularOverview: FC = () => {
  const t = useTranslations();
  const { data, isLoading, error } = useGetCurrentEpoch();

  // TODO: handle the loading error case
  if (isLoading) return null;

  // TODO: handle the case error case
  if (!data || error) return null;

  const startDateMS = Number(data?.epochStartTimestampMs);
  const durationMS = Number(data?.epochDurationMs);
  const endDataMS = startDateMS + durationMS;
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
        {t('lst.overview.title')}
      </Typography>
      <Box display="flex" gap="3.75rem">
        <Box display="flex" columnGap="l" alignItems="center">
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
            <REGULAR_OVERVIEW_DATA.Icon
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
              {capitalize(
                t(REGULAR_OVERVIEW_DATA.description as TTranslatedMessage)
              )}
            </Typography>
            <Typography variant="large" color="onSurface">
              {REGULAR_OVERVIEW_DATA.value}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" flex="1" gap="s">
          <Typography opacity="0.6" variant="extraSmall" color="onSurface">
            {capitalize(t('lst.epoch.end'))}
          </Typography>
          <EpochProgressBar
            size="small"
            endDate={endDataMS}
            duration={durationMS}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RegularOverview;
