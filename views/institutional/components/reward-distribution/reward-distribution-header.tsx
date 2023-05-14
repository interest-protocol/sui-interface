import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';
import RewardDistributionIllustration from './reward-distribution-illustration';

const RewardDistributionHeader: FC = () => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;

  return (
    <>
      <Title
        as="h2"
        fontWeight="400"
        mb={['0.5rem', '0.5rem', '0.5rem', '2xl']}
      >
        <Typography
          as="span"
          display="block"
          variant="displayLarge"
          letterSpacing="-0.15rem"
          background={`linear-gradient(90deg, ${colors.primary} 27.62%, ${colors.primary}33 82.41%)`}
          WebkitBackgroundClip="text"
          WebkitTextFillColor="transparent"
          backgroundClip="text"
          textAlign="center"
        >
          {t('liquidity.rewardDistribution.title')}
        </Typography>
      </Title>
      <Box width={['100%', '100%', '100%', '60%']} mx="auto">
        <RewardDistributionIllustration />
      </Box>
    </>
  );
};

export default RewardDistributionHeader;
