import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import TableRow from '@/views/dapp/v2/lst/components/table-row';

import { MaturityBodyProps } from '../modal.types';
import MaturityModalBodyRow from './maturity-body-row';

const MATURITY_MOCK = [
  {
    date: '10/05/2024',
    daysLeft: '100',
    id: 1,
  },
  {
    date: '13/06/2024',
    daysLeft: '100',
    id: 2,
  },
  {
    date: '31/07/2024',
    daysLeft: '100',
    id: 3,
  },
  {
    date: '18/01/2024',
    daysLeft: '100',
    id: 4,
  },
  {
    date: '22/02/2024',
    daysLeft: '100',
    id: 5,
  },
  {
    date: '21/02/2024',
    daysLeft: '100',
    id: 6,
  },
  {
    date: '02/02/2024',
    daysLeft: '100',
    id: 7,
  },
  {
    date: '12/02/2024',
    daysLeft: '100',
    id: 8,
  },
];

const MaturityModalBody: FC<MaturityBodyProps> = ({
  handleSelectMaturity,
  currentMaturity,
}) => {
  const t = useTranslations();
  return (
    <Box px="m" width="100%" maxHeight="50vh" overflowX="auto" overflowY="auto">
      <TableRow numCols={3} isTableHead isEquidistant>
        <Box />
        <Typography variant="small">
          {t('lst.maturitySelector.date')}
        </Typography>
        <Typography variant="small" textAlign="right" pr="m">
          {t('lst.maturitySelector.daysLeft')}
        </Typography>
        <Box />
      </TableRow>
      {MATURITY_MOCK.map((maturity) => (
        <MaturityModalBodyRow
          key={v4()}
          handleSelectMaturity={handleSelectMaturity}
          currentMaturity={currentMaturity}
          maturityInfo={maturity}
        />
      ))}
    </Box>
  );
};

export default MaturityModalBody;
