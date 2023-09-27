import { Box } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { FixedPointMath } from '@/lib';
import { formatMoney } from '@/utils';
import { useGetValidatorsApy } from '@/views/dapp/v2/lst/lst.hooks';

import ErrorState from '../../../components/error-state';
import ValidatorsTableSkeleton from '../../../components/your-info-container/modal/validator-list/validators-table-skeleton';
import { AllValidatorsProps } from '../all-validators.types';
import ValidatorsTableData from './validators-table-data';
import ValidatorsTableHead from './validators-table-head';

const ValidatorsTable: FC<AllValidatorsProps> = ({
  control,
  activeValidators,
}) => {
  const t = useTranslations();

  const {
    data: validatorsApy,
    isLoading: validatorsApyLoading,
    error: validatorsApyError,
  } = useGetValidatorsApy();

  if (validatorsApyError)
    return (
      <ErrorState
        size="large"
        errorMessage={t('lst.validators.tableSection.error')}
      />
    );

  if (validatorsApyLoading) return <ValidatorsTableSkeleton />;

  const apyMap = (validatorsApy?.apys?.reduce(
    (acc, { address, apy }) => ({ ...acc, [address]: apy }),
    {}
  ) ?? {}) as Record<string, number>;

  const validators = activeValidators
    .map(
      ({
        name,
        imageUrl,
        projectUrl,
        suiAddress,
        description,
        votingPower,
        commissionRate,
        stakingPoolSuiBalance,
      }) => ({
        name,
        imageUrl,
        projectUrl,
        suiAddress,
        description,
        votingPower: +votingPower / 100,
        commissionRate: +commissionRate / 100,
        stakingPoolSuiBalanceString: stakingPoolSuiBalance,
        apy: Number((apyMap[suiAddress] * 100 ?? 0).toFixed(2)).toPrecision(),
        stakingPoolSuiBalance: formatMoney(
          FixedPointMath.toNumber(BigNumber(stakingPoolSuiBalance))
        ),
      })
    )
    .sort((a, b) =>
      +a.stakingPoolSuiBalanceString > +b.stakingPoolSuiBalanceString ? -1 : 0
    )
    .sort((a, b) =>
      +a.stakingPoolSuiBalance > +b.stakingPoolSuiBalance ? -1 : 0
    );

  return (
    <Box
      width="100%"
      display="flex"
      overflowX="auto"
      borderRadius="m"
      overflowY="hidden"
      color="onSurface"
      gridColumn="1/-1"
      flexDirection="column"
      px="s"
    >
      <Box minWidth="55em">
        <ValidatorsTableHead />
        <ValidatorsTableData control={control} validators={validators} />
      </Box>
    </Box>
  );
};

export default ValidatorsTable;
