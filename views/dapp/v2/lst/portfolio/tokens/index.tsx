import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import CardSection from '../../components/card-section';
import TokensTable from './table';

const Tokens: FC = () => (
  <Box height="max-content" width={['100%', '100%', '100%', '50%']}>
    <CardSection title="Tokens">
      <TokensTable />
    </CardSection>
  </Box>
);

export default Tokens;
