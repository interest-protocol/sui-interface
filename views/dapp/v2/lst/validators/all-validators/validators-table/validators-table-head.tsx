import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { capitalize } from '@/utils';

import TableRow from '../../../components/table-row';

const ValidatorsTableHead: FC = () => {
  const t = useTranslations();

  return (
    <TableRow numCols={6} isTableHead>
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
        {t('lst.validators.tableSection.votingPower')}
      </Typography>
      <Typography variant="small" textAlign="right" textTransform="capitalize">
        {t('lst.validators.tableSection.commission')}
      </Typography>
    </TableRow>
  );
};

export default ValidatorsTableHead;
