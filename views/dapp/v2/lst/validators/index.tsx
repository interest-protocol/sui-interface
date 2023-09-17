import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SUISVG, UsersSVG } from '@/components/svg/v2';
import { FixedPointMath } from '@/lib';

import ErrorState from '../components/error-state';
import Overview from '../components/overview';
import { useLstData } from '../lst.hooks';
import { useGetActiveValidators } from '../lst.hooks';
import ValidatorsTableSkeleton from '../staked/staking-form/your-info/modal/validator-list/validators-table-skeleton';
import AllValidators from './all-validators';

const OverViewWrapper: FC = () => {
  const t = useTranslations();

  const {
    data: activeValidators,
    isLoading: isLoadingActiveValidators,
    error: errorActiveValidator,
  } = useGetActiveValidators();
  const { iSuiExchangeRate, isLoading, lstStorage } = useLstData();

  const OVERVIEW_DATA = [
    {
      description: 'lst.overview.totalSuiStaked',
      Icon: SUISVG,
      // Sui has 9 decimals
      value: FixedPointMath.toNumber(lstStorage.totalPrincipal),
    },
    {
      description: 'lst.exchangeRate',
      Icon: UsersSVG,
      value: iSuiExchangeRate,
    },
    {
      description: 'lst.overview.validators',
      Icon: UsersSVG,
      value: activeValidators?.length || 0,
    },
  ];
  return (
    <Overview
      title={t('lst.overview.title')}
      data={OVERVIEW_DATA}
      isLoading={isLoading || isLoadingActiveValidators}
      error={errorActiveValidator}
    />
  );
};

const Validators: FC = () => {
  const {
    data: activeValidators,
    isLoading: activeValidatorsLoading,
    error: activeValidatorsError,
  } = useGetActiveValidators();

  const t = useTranslations();

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <OverViewWrapper />
      {activeValidatorsLoading ? (
        <ValidatorsTableSkeleton />
      ) : activeValidatorsError ? (
        <ErrorState
          size="large"
          errorMessage={t('lst.validators.tableSection.error')}
        />
      ) : (
        <AllValidators activeValidators={activeValidators} />
      )}
    </Box>
  );
};

export default Validators;
