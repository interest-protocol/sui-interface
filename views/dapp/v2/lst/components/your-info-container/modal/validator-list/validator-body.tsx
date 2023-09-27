import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ValidatorListBodyProps } from '../../your-info.types';
import ValidatorsTableData from './validators-table-data';
import ValidatorsTableHead from './validators-table-head';

const ValidatorListBody: FC<ValidatorListBodyProps> = ({
  control,
  validators,
  handleSelected,
  currentValidatorAddress,
}) => {
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
          handleSelected={handleSelected}
          currentValidatorAddress={currentValidatorAddress}
        />
      </Box>
    </Box>
  );
};

export default ValidatorListBody;
