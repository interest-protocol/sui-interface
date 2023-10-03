import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { ValidatorListTableDataProps } from '../../your-info.types';
import ValidatorsTableDataItem from './validators-table-data-item';

const ValidatorsTableData: FC<Omit<ValidatorListTableDataProps, 'isStake'>> = ({
  control,
  validators,
  handleSelected,
  currentValidatorAddress,
}) => {
  const search = useWatch({ control, name: 'search' });

  return (
    <Box>
      {validators
        .filter(
          ({ name, description }) =>
            !search ||
            name.toLowerCase().includes(search.toLocaleLowerCase()) ||
            description.toLowerCase().includes(search.toLowerCase())
        )
        .map((validator, index) => (
          <ValidatorsTableDataItem
            key={v4()}
            index={index}
            validator={validator}
            handleSelected={handleSelected}
            currentValidatorAddress={currentValidatorAddress}
          />
        ))}
    </Box>
  );
};

export default ValidatorsTableData;
