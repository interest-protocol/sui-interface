import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { InfoLightSVG } from '@/svg';

const RewardDistributionAdvice: FC = () => {
  const t = useTranslations();

  return (
    <Box p="l" mt="2xl" borderRadius="m" gridColumn="1/-1" background="#E9D5FF">
      <Box display="flex" gap="1rem" alignItems="center" color="#6B21A8">
        <InfoLightSVG width="1.5rem" maxHeight="1.5rem" maxWidth="1.5rem" />
        <Typography variant="small" width="100%" textAlign="left">
          {t('liquidity.rewardDistribution.advice')}
        </Typography>
      </Box>
    </Box>
  );
};

export default RewardDistributionAdvice;
