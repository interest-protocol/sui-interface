import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import TableRow from '../../../components/table-row';

const NFTTableHead: FC = () => {
  const t = useTranslations();

  return (
    <TableRow numCols={3} isTableHead>
      <Typography variant="small">#</Typography>
      <Typography variant="small">ID</Typography>
      <Typography variant="small" textAlign="right">
        {t('lst.portfolio.value')}
      </Typography>
    </TableRow>
  );
};

export default NFTTableHead;
