import { Box } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { FC } from 'react';

import { FixedPointMath } from '@/lib';
import { formatMoney } from '@/utils';
import {
  useGetValidatorsApy,
  useGetValidatorsStakePosition,
  useLstData,
} from '@/views/dapp/v2/lst/lst.hooks';

import { ValidatorListBodyProps } from '../../your-info.types';
import ValidatorsTableData from './validators-table-data';
import ValidatorsTableHead from './validators-table-head';

const ValidatorListBody: FC<ValidatorListBodyProps> = ({
  activeValidators,
  setNewValidator,
  control,
  newValidator,
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
    ({ name, imageUrl, suiAddress, description, stakingPoolSuiBalance }) => ({
      name,
      imageUrl,
      description,
      apy: Number((apyMap[suiAddress] ?? 0).toFixed(3)).toPrecision(),
      stakingPoolSuiBalance: formatMoney(
        FixedPointMath.toNumber(BigNumber(stakingPoolSuiBalance))
      ),
      suiAddress,
    })
  );

  return (
    <Box
      width="100%"
      overflowX="auto"
      overflowY="hidden"
      color="onSurface"
      gridColumn="1/-1"
    >
      <Box
        p="xl"
        maxHeight={['100%', '100%', '100%', '23rem']}
        overflowY="auto"
        minWidth="20rem"
      >
        <ValidatorsTableHead />
        <ValidatorsTableData
          control={control}
          validators={validators}
          newValidator={newValidator}
          setNewValidator={setNewValidator}
        />
      </Box>
    </Box>
  );
};

export default ValidatorListBody;
