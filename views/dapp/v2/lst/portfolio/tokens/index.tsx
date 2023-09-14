import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import CardSection from '../../components/card-section';
import { TokensListProps } from '../portfolio.type';
import TokensTable from './table';

const Tokens: FC<TokensListProps> = ({ data }) => {
  return (
    <Box height="max-content" width="100%">
      <CardSection title="Tokens">
        <TokensTable data={data} />
      </CardSection>
    </Box>
  );
};

export default Tokens;
