import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import ValidatorSearch from './validator-search';
import ValidatorsTable from './validators-table';

const AllValidators: FC = () => (
  <Box bg="surface.container" p="l" borderRadius="0.5rem">
    <ValidatorSearch />
    <ValidatorsTable />
  </Box>
);

export default AllValidators;
