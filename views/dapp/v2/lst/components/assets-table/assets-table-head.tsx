import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import TableRow from '../table-row';

const AssetsTableHead: FC = () => {
  const t = useTranslations();

  return (
    <TableRow numCols={5} isWide isTableHead>
      <Typography variant="extraSmall" color="onSurface">
        #
      </Typography>
      <Typography variant="extraSmall" color="onSurface">
        {t('lst.assetsTable.maturity')}
      </Typography>
      <Typography variant="extraSmall" color="onSurface">
        {t('lst.assetsTable.dayLeft')}
      </Typography>
      <Typography variant="extraSmall" color="onSurface">
        {t('lst.assetsTable.totalAssetsMinted')}
      </Typography>
    </TableRow>
  );
};

export default AssetsTableHead;
