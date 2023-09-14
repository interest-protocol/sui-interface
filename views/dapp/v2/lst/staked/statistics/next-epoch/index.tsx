import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useGetCurrentEpoch } from '@/views/dapp/v2/lst/lst.hooks';

import EpochProgressBar from './epoch-progress-bar';

const NextEpoch: FC = () => {
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
      gap="s"
      flex="1"
      display="flex"
      borderRadius="0.5rem"
      flexDirection="column"
      bg="surface.container"
    >
      <Box display="flex" flexDirection="column" gap="m">
        <Typography
          opacity="0.6"
          variant="small"
          color="onSurface"
          textTransform="uppercase"
        >
          {t('lst.epoch.end')}
        </Typography>
        <EpochProgressBar duration={durationMS} endDate={endDataMS} />
      </Box>
    </Box>
  );
};

export default NextEpoch;
