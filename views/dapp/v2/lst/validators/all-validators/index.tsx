import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  useGetActiveValidators,
  useGetValidatorTableFields,
} from '@/views/dapp/v2/lst/validators/validators.hooks';

import ValidatorSearch from './validator-search';
import ValidatorsTable from './validators-table';

const AllValidators: FC = () => {
  const { data: activeValidators, isActiveValidatorsLoading } =
    useGetActiveValidators();

  const { data: validatorTable, isLoading: isValidatorTableLoading } =
    useGetValidatorTableFields();

  console.log(activeValidators);
  console.log(validatorTable);

  return (
    <Box bg="surface.container" p="l" borderRadius="0.5rem">
      <ValidatorSearch />
      <ValidatorsTable />
    </Box>
  );
};

export default AllValidators;
