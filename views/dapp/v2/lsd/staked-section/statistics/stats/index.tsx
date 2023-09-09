import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { CipherSVG, PercentageSVG, SuiSVG } from '@/svg';

import { StatsProps } from './stats.type';
import StatsDerivatedWrapper from './stats-derivated-wrapper';
import StatsWrapper from './stats-wrapper';

const Stats: FC<StatsProps> = ({
  apy,
  totalStaked,
  totalRewards,
  derivatedSui,
}) => (
  <Box bg="surface.container" p="l" borderRadius="0.5rem">
    <Typography
      variant="extraSmall"
      fontSize="0.688rem"
      color="onSurface"
      mb="l"
      textTransform="capitalize"
    >
      Stats
    </Typography>
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      gap="0.5rem"
    >
      <StatsWrapper description="TOTAL SUI STAKED" value={totalStaked} isCoin>
        <SuiSVG
          filled
          maxHeight="1.5rem"
          maxWidth="1.5rem"
          width="100%"
          height="100%"
        />
      </StatsWrapper>
      <StatsWrapper description="APY" value={apy}>
        <PercentageSVG
          maxHeight="1.25rem"
          maxWidth="1.25rem"
          width="100%"
          height="100%"
        />
      </StatsWrapper>
      <StatsWrapper description="TOTAL REWARDS" value={totalRewards}>
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

export default Stats;
