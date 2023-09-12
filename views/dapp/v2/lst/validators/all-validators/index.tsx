import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { useGetValidatorsStakePosition, useLstData } from '../../lst.hooks';
import { AllValidatorsProps } from './all-validators.types';
import ValidatorSearch from './validator-search';
import ValidatorsTable from './validators-table';

const AllValidators: FC<AllValidatorsProps> = ({ activeValidators }) => {
  const { lstStorage } = useLstData();

  const { data: validatorTable, isLoading: isValidatorTableLoading } =
    useGetValidatorsStakePosition(
      lstStorage.validatorTable.head,
      lstStorage.validatorTable.tail
    );

  console.log({ validatorTable, isValidatorTableLoading, activeValidators });

  return (
    <Box bg="surface.container" p="l" borderRadius="0.5rem">
      <ValidatorSearch />
      <ValidatorsTable />
    </Box>
  );
};

export default AllValidators;
