import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useGetCurrentEpoch } from '@/views/dapp/v2/lst/lst.hooks';

import EpochProgressBar from './epoch-progress-bar';

const NextEpoch: FC = () => {
  const t = useTranslations();
  const { data, isLoading, error } = useGetCurrentEpoch();

  if (!data || isLoading || error) return null;

  const startDateMS = Number(data?.epochStartTimestampMs);
  const durationMS = Number(data?.epochDurationMs);
  const endDataMS = startDateMS + durationMS;

  return (
    <Box
      p="l"
      gap="s"
      flex="1"
      display="flex"
      flexDirection="column"
      borderRadius="0.5rem"
      bg="surface.container"
    >
      <Typography
        mb="l"
        color="onSurface"
        fontSize="0.688rem"
        variant="extraSmall"
        textTransform="capitalize"
      >
        {t('lst.epoch.title')}
      </Typography>
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
