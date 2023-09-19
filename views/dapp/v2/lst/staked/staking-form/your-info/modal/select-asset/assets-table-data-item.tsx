import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import Checkmark from '@/components/svg/v2/checkmark';
import TableRow from '@/views/dapp/v2/lst/components/table-row';

import { AssetsTableDataItemProps } from './select-asset.types';

const AssetsTableDataItem: FC<AssetsTableDataItemProps> = ({
  Icon,
  name,
  index,
  balance,
  daysLeft,
  maturity,
  inMaturityState,
}) => {
  const { colors, dark } = useTheme() as Theme;
  const [selected, setSelected] = useState(false);
  const t = useTranslations();
  return (
    <Box
      px="m"
      key={v4()}
      cursor={inMaturityState ? 'pointer' : 'not-allowed'}
      nHover={
        inMaturityState && {
          bg: `${colors.primary}17`,
        }
      }
      opacity={!inMaturityState ? 0.24 : 1}
      transition="all 300ms ease-in-out"
      onClick={() => setSelected(!selected)}
      minWidth={['55em', '55em', '55em', 'unset']}
    >
      <TableRow numCols={6}>
        <Typography variant="extraSmall" color="onSurface">
          {!selected ? (
            index + 1
          ) : (
            <Checkmark width="100%" maxHeight="1.5rem" maxWidth="1.5rem" />
          )}
        </Typography>
        <Box display="flex" gap="m" alignItems="center">
          <Icon width="100%" maxHeight="2rem" maxWidth="1.8rem" />
          <Typography variant="extraSmall" color="onSurface">
            {name}
          </Typography>
        </Box>
        <Typography variant="extraSmall" color="onSurface">
          {maturity}
        </Typography>
        <Typography variant="extraSmall" color="onSurface">
          {daysLeft}
        </Typography>
        <Typography variant="extraSmall" color="onSurface">
          {balance}
        </Typography>
        <Box
          borderRadius=".5rem"
          p={inMaturityState ? '.125rem' : '.125rem 0'}
          bg={inMaturityState ? (dark ? '#D9F99D' : '#3F6212') : 'onSurface'}
        >
          <Typography
            variant="extraSmall"
            textAlign="center"
            color={
              inMaturityState
                ? dark
                  ? '#3F6212'
                  : '#D9F99D'
                : 'inverseOnSurface'
            }
          >
            {inMaturityState
              ? t('lst.assetsTable.inMaturity')
              : t('lst.assetsTable.pastMaturity')}
          </Typography>
        </Box>
      </TableRow>
    </Box>
  );
};

export default AssetsTableDataItem;
