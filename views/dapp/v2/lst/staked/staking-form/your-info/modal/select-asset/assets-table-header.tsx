import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import TableRow from '@/views/dapp/v2/lst/components/table-row';

const AssetsTableHeader: FC = () => {
  const t = useTranslations();
  return (
    <Box p="m" key={v4()} minWidth={['55em', '55em', '55em', 'unset']}>
      <TableRow numCols={6}>
        <Typography variant="extraSmall" color="onSurface">
          #
        </Typography>
        <Typography variant="extraSmall" color="onSurface">
          {t('lst.assetsTable.name')}
        </Typography>
        <Typography variant="extraSmall" color="onSurface">
          {t('lst.assetsTable.maturity')}
        </Typography>
        <Typography variant="extraSmall" color="onSurface">
          {t('lst.assetsTable.dayLeft')}
        </Typography>
        <Typography variant="extraSmall" color="onSurface">
          {t('lst.assetsTable.balance')}
        </Typography>
        <Typography variant="extraSmall" color="onSurface" textAlign="right">
          {t('lst.assetsTable.state')}
        </Typography>
      </TableRow>
    </Box>
  );
};

export default AssetsTableHeader;
