import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { capitalize } from '@/utils';
import TableRow from '@/views/dapp/v2/lst/components/table-row';

const ValidatorsTableHead: FC = () => {
  const t = useTranslations();

  return (
    <Box minWidth={['55em', '55em', '55em', 'unset']}>
      <TableRow numCols={5} isTableHead>
        <Typography variant="small">#</Typography>
        <Typography variant="small">
          {capitalize(t('lst.validators.tableSection.name'))}
        </Typography>
        <Typography variant="small" textAlign="right" textTransform="uppercase">
          {t('common.stake', { isLoading: 0 })}
        </Typography>
        <Typography variant="small" textAlign="right" textTransform="uppercase">
          {t('lst.validators.tableSection.apy')}
        </Typography>
        <Typography variant="small" textAlign="right" textTransform="uppercase">
          {t('lst.modal.validator.select')}
        </Typography>
      </TableRow>
    </Box>
  );
};

export default ValidatorsTableHead;
