import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../../components/title';
import RewardDistributionIllustration from './reward-distribution-illustration';

const RewardDistributionHeader: FC = () => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;

  return (
    <>
      <Title
        as="h2"
        mb={['0.5rem', '0.5rem', '0.5rem', '2xl']}
        fontWeight="400"
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
      <Box m="0 auto" width={['100%', '100%', '100%', '50%']}>
        <Box
          display="grid"
          gridColumn="1/6"
          gridTemplateAreas={["'b' 'a'", "'b' 'a'", "'b' 'a'", "'a a a a a'"]}
          gridTemplateColumns={['1fr', '1fr', '1fr', 'repeat(1, 1fr)']}
        >
          <Box gridArea="a">
            <RewardDistributionIllustration />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RewardDistributionHeader;
