import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { keys } from 'ramda';
import { FC } from 'react';

import { ISuiSVG, SUISVG } from '@/components/svg/v2';
import { CipherSVG, PercentageSVG } from '@/svg';

import { useLstData } from '../../lst.hooks';
import { StatsProps } from './stats.type';
import StatsWrapper from './stats-wrapper';

const Stats: FC<StatsProps> = ({ totalStaked, totalISui }) => {
  const t = useTranslations();
  const { activeValidators, validatorStakeRecord } = useLstData();

  const validatorsStaking = keys(validatorStakeRecord).length;

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
      <Box gap="l" display="grid" gridTemplateColumns="1fr 1fr 1fr">
        <StatsWrapper value={`0.01 Sui`} description={t('lst.totalReward')}>
          <CipherSVG
            maxHeight="2rem"
            maxWidth="2rem"
            width="100%"
            height="100%"
          />
        </StatsWrapper>
        <StatsWrapper
          description={t('lst.overview.totalSuiStaked')}
          value={totalStaked.toString()}
        >
          <SUISVG
            filled
            width="100%"
            height="100%"
            maxWidth="3rem"
            maxHeight="3rem"
          />
        </StatsWrapper>
        <StatsWrapper
          description={t('lst.overview.totalISUIMinted')}
          value={totalISui}
        >
          <ISuiSVG
            filled
            width="100%"
            height="100%"
            maxWidth="3rem"
            maxHeight="3rem"
          />
        </StatsWrapper>
        <StatsWrapper description="APY" value={`3%`}>
          <PercentageSVG
            width="100%"
            height="100%"
            maxWidth="1.25rem"
            maxHeight="1.25rem"
          />
        </StatsWrapper>
        <StatsWrapper
          description={t('lst.overview.validators')}
          value={`${validatorsStaking}/${activeValidators.length}`}
        >
          <PercentageSVG
            width="100%"
            height="100%"
            maxWidth="1.25rem"
            maxHeight="1.25rem"
          />
        </StatsWrapper>
      </Box>
    </Box>
  );
};
export default Stats;
