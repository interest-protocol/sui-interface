import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { capitalize } from '@/utils';

import TableRow from '../table-row';

const ValidatorsTableHead: FC = () => {
  const t = useTranslations();

  return (
    <TableRow isTableHead>
      <Typography variant="small">#</Typography>
      <Typography variant="small">
        {capitalize(t('lsd.validators.tableSection.name'))}
      </Typography>
      <Typography variant="small" textAlign="right" textTransform="uppercase">
        {t('common.stake', { isLoading: 0 })}
      </Typography>
      <Typography variant="small" textAlign="right" textTransform="uppercase">
        {t('lsd.validators.tableSection.apy')}
      </Typography>
      <Typography variant="small" textAlign="right" textTransform="capitalize">
        {t('lsd.validators.tableSection.commission')}
      </Typography>
    </TableRow>
  );
};

export default ValidatorsTableHead;
