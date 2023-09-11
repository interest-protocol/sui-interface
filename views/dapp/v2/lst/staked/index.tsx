import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { FixedPointMath, ONE_COIN } from '@/lib';
import {
  useGetActiveValidators,
  useGetLstStorage,
  useGetValidatorTableFields,
} from '@/views/dapp/v2/lst/lst.hooks';

import StakingForm from './staking-form';
import Statistics from './statistics';

const Staked: FC = () => {
  const t = useTranslations();
  const { data: activeValidators, isActiveValidatorsLoading } =
    useGetActiveValidators();

  const { data: validatorTable, isLoading: isValidatorTableLoading } =
    useGetValidatorTableFields();

  const { data } = useGetLstStorage();

  const totalStakedSui = FixedPointMath.toNumber(data.pool.elastic);
  const iSuiExchangeRate =
    totalStakedSui === 0
      ? 1
      : FixedPointMath.toNumber(data.pool.toElastic(ONE_COIN));
  const totalISuiMinted = FixedPointMath.toNumber(data.pool.base);

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box
        pb="1rem"
        width="100%"
        gridColumn="1/-1"
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
        gap={['l', 'l', 'l', 'xl']}
      >
        <Typography
          display={['block', 'block', 'block', 'none']}
          variant="displayLarge"
          color="onSurface"
          textTransform="capitalize"
          textAlign="center"
        >
          {t('lst.metadata.title')}
        </Typography>
        <Statistics
          totalSuiStaked={totalStakedSui.toString()}
          iSuiExchangeRate={iSuiExchangeRate.toString()}
          totalActiveValidators={activeValidators.length}
          totalISuiMinted={totalISuiMinted.toString()}
        />
        <StakingForm />
      </Box>
    </Box>
  );
};

export default Staked;
