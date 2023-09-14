import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SUISVG } from '@/components/svg/v2';
import { CipherSVG, PercentageSVG } from '@/svg';

import { StatsProps } from './stats.type';
import StatsDerivatedWrapper from './stats-derivated-wrapper';
import StatsWrapper from './stats-wrapper';

const Stats: FC<StatsProps> = ({
  apy,
  totalStaked,
  totalRewards,
  derivatedSui,
}) => {
  const t = useTranslations();

  return (
    <Box bg="surface.container" p="l" borderRadius="0.5rem">
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color="onSurface"
        mb="l"
        textTransform="capitalize"
      >
        {t('lst.stats')}
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        gap="0.5rem"
      >
        <StatsWrapper
          description={t('lst.totalStaked')}
          value={`${totalStaked} SUI`}
          isCoin
        >
          <SUISVG
            maxHeight="2.5rem"
            maxWidth="2.5rem"
            width="100%"
            height="100%"
          />
        </StatsWrapper>
        <StatsWrapper description="APY" value={`${apy}%`}>
          <PercentageSVG
            width="100%"
            height="100%"
            maxWidth="1.25rem"
            maxHeight="1.25rem"
          />
        </StatsWrapper>
        <StatsWrapper
          value={`${totalRewards}%`}
          description={t('lst.totalReward')}
        >
          <CipherSVG
            maxHeight="2rem"
            maxWidth="2rem"
            width="100%"
            height="100%"
          />
        </StatsWrapper>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mt="l"
        flexWrap="wrap"
        gap="0.5rem"
      >
        {derivatedSui.map(({ name, value }) => (
          <StatsDerivatedWrapper name={name} value={value} key={v4()} />
        ))}
      </Box>
    </Box>
  );
};
export default Stats;
