import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TableHeadProps } from '../table.types';
import TableRow from '../table-row';

const TopCoinsTableHead: FC<TableHeadProps> = ({ title }) => {
  const t = useTranslations();
  return (
    <>
      <TableRow numCols={5} title={title} isTableHead>
        <Typography variant="small" textAlign="center">
          #
        </Typography>
        <Typography variant="small">
          {t('metrics.tables.tokenPairs')}
        </Typography>
        <Typography variant="small" textAlign="center">
          {t('metrics.tables.tvl')}
        </Typography>
        <Typography variant="small" textAlign="center">
          {t('metrics.tables.oneDayVolume')}
        </Typography>
        <Typography variant="small" textAlign="center">
          {t('metrics.tables.monthVolume')}
        </Typography>
      </TableRow>
    </>
  );
};

export default TopCoinsTableHead;
