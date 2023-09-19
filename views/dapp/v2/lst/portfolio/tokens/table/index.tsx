import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { useWeb3 } from '@/hooks';

import ErrorState from '../../../components/error-state';
import TokensTableBody from './tokens-table-body';
import TokensTableHead from './tokens-table-head';

const TokensTable: FC = () => {
  const { connected } = useWeb3();

  return (
    <Box
      width="100%"
      display="flex"
      borderRadius="m"
      color="onSurface"
      gridColumn="1/-1"
      flexDirection="column"
    >
      {!connected ? (
        <ErrorState
          errorMessage="No wallet has found! Please connect your wallet"
          size="large"
        />
      ) : (
        <Box>
          <TokensTableHead />
          <Box>
            <TokensTableBody />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TokensTable;
