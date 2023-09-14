import { Box } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { pathOr } from 'ramda';
import { FC } from 'react';

import { FixedPointMath } from '@/lib';
import { formatMoney } from '@/utils';
import { useGetValidatorsApy } from '@/views/dapp/v2/lst/lst.hooks';

import { useGetValidatorsStakePosition, useLstData } from '../../../lst.hooks';
import { AllValidatorsProps } from '../all-validators.types';
import ValidatorsTableData from './validators-table-data';
import ValidatorsTableHead from './validators-table-head';

const ValidatorsTable: FC<AllValidatorsProps> = ({
  control,
  activeValidators,
}) => {
  const { lstStorage } = useLstData();
  const {
    data: validatorStakeDistribution,
    isLoading: isValidatorTableLoading,
    error: isValidatorTableError,
  } = useGetValidatorsStakePosition(
    lstStorage.validatorTable.head,
    lstStorage.validatorTable.tail
  );

  console.log('DIS', validatorStakeDistribution);

  const {
    data: validatorsApy,
    isLoading: validatorsApyLoading,
    error: validatorsApyError,
  } = useGetValidatorsApy();

  if (isValidatorTableError || validatorsApyError) return <>error!</>; // TODO: handle this error

  if (validatorsApyLoading || isValidatorTableLoading) return <>loading</>; // TODO: Loading APY

  const apyMap = (validatorsApy?.apys?.reduce(
    (acc, { address, apy }) => ({ ...acc, [address]: apy }),
    {}
  ) ?? {}) as Record<string, number>;

  const validators = activeValidators.map(
    ({
      name,
      imageUrl,
      projectUrl,
      suiAddress,
      description,
      commissionRate,
      stakingPoolSuiBalance,
    }) => ({
      name,
      imageUrl,
      projectUrl,
      description,
      commissionRate: +commissionRate / 1000,
      apy: Number((apyMap[suiAddress] ?? 0).toFixed(3)).toPrecision(),
      stakingPoolSuiBalance: formatMoney(
        FixedPointMath.toNumber(BigNumber(stakingPoolSuiBalance))
      ),
      lstStaked: Number(
        FixedPointMath.toNumber(
          BigNumber(
            pathOr('0', [suiAddress, 'principal'], validatorStakeDistribution)
          )
        ).toFixed(4)
      ).toPrecision(),
    })
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
