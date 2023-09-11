import { Rebase } from '@interest-protocol/sui-money-market-sdk';
import { Box } from '@interest-protocol/ui-kit';
import { useGetLstStorage } from 'hooks/use-get-lst-storage';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SUISVG, UsersSVG } from '@/components/svg/v2';
import { FixedPointMath, ONE_COIN } from '@/lib';
import { OverviewWrapperProps } from '@/views/dapp/v2/lst/validators/validators.types';

import Overview from '../components/overview';
import { useGetActiveValidators } from '../lst.hooks';
import AllValidators from './all-validators';

const OverViewWrapper: FC<OverviewWrapperProps> = ({ validatorsCount }) => {
  const t = useTranslations();

  const { data, isLoading } = useGetLstStorage();

  const poolRebase = new Rebase(data.pool.base, data.pool.elastic);
  const exchangeRate = poolRebase.toElastic(ONE_COIN);

  const OVERVIEW_DATA = [
    {
      description: 'lst.overview.totalSuiStaked',
      Icon: SUISVG,
      // Sui has 9 decimals
      value: FixedPointMath.toNumber(data.totalPrincipal),
    },
    {
      description: 'lst.exchangeRate',
      Icon: UsersSVG,
      value: exchangeRate.isZero() ? 1 : FixedPointMath.toNumber(exchangeRate),
    },
    {
      description: 'lst.overview.validators',
      Icon: UsersSVG,
      value: validatorsCount,
    },
  ];
  return <Overview title={t('lst.overview.title')} data={OVERVIEW_DATA} />;
};

const Validators: FC = () => {
  const { data: activeValidators, isLoading } = useGetActiveValidators();
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <OverViewWrapper validatorsCount={activeValidators.length} />
      <AllValidators activeValidators={activeValidators} />
    </Box>
  );
};

export default Validators;
