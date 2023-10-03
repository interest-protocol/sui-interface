import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useWeb3 } from '@/hooks';

import ErrorState from '../../../components/error-state';
import TokensTableBody from './tokens-table-body';
import TokensTableHead from './tokens-table-head';

const TokensTable: FC = () => {
  const { connected } = useWeb3();
  const t = useTranslations();
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
          errorMessage={t('common.v2.connectWallet.noWalletFound')}
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
