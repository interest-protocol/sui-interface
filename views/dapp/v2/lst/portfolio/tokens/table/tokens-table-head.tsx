import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import TableRow from '../../../components/table-row';

const TokensTableHead: FC = () => {
  const t = useTranslations();

  return (
    <TableRow numCols={4} isTableHead>
      <Typography variant="small">#</Typography>
      <Typography variant="small">ID</Typography>
      <Typography variant="small" textAlign="right">
        {t('lst.portfolio.value')}
      </Typography>
      <Typography variant="small" textAlign="right">
        {t('lst.portfolio.more')}
      </Typography>
    </TableRow>
  );
};

export default TokensTableHead;
