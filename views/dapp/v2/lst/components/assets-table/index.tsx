import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import CardSection from '../card-section';
import TableRow from '../table-row';
import { ASSETS_DATA } from './assets-table.data';
import { AssetsTableProps } from './assets-table.types';
import AssetsTableHead from './assets-table-head';
import AssetsTableSkeleton from './skeleton';

const AssetsTable: FC<AssetsTableProps> = ({ dataLimit }) => {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  return (
    <>
      <CardSection
        title={t('lst.assetsTable.title')}
        rightAction={
          <Typography variant="extraSmall" color="primary" cursor="pointer">
            {t('lst.assetsTable.seeAll')}
          </Typography>
        }
      >
        <AssetsTableHead />
        {isLoading ? (
          <AssetsTableSkeleton />
        ) : (
          <>
            {ASSETS_DATA.slice(0, dataLimit).map(
              ({ totalAssetsMinted, maturity, dayLeft }) => (
                <TableRow numCols={5} isEquidistant key={v4()}>
                  <Typography variant="small" color="onSurface">
                    1
                  </Typography>
                  <Typography variant="small" color="onSurface">
                    {maturity}
                  </Typography>
                  <Typography variant="small" color="onSurface">
                    {dayLeft}
                  </Typography>
                  {totalAssetsMinted.map((item) => (
                    <Box key={v4()} display="flex" gap="m" alignItems="center">
                      <Typography variant="small" color="onSurface">
                        {item.value}
                      </Typography>
                      <Box>
                        <item.Icon
                          filled
                          width="100%"
                          maxWidth="1.25rem"
                          maxHeight="1.25rem"
                        />
                      </Box>
                    </Box>
                  ))}
                </TableRow>
              )
            )}
          </>
        )}
      </CardSection>
    </>
  );
};

export default AssetsTable;
