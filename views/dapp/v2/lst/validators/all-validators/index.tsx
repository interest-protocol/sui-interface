import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { AllValidatorsProps } from './all-validators.types';
import ValidatorSearch from './validator-search';
import ValidatorsTable from './validators-table';

const AllValidators: FC<AllValidatorsProps> = ({ activeValidators }) => {
  console.log({ activeValidators });

  return (
    <Box bg="surface.container" p="l" borderRadius="0.5rem">
      <ValidatorSearch />
      <ValidatorsTable activeValidators={activeValidators} />
    </Box>
  );
};

export default AllValidators;
