import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import TableRow from '../table-row';
import { ASSETS_DATA } from './assets-table.data';
import { AssetsTableProps } from './assets-table.types';
import AssetsTableSkeleton from './skeleton';

const AssetsTable: FC<AssetsTableProps> = ({ dataLimit }) => {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  return (
    <>
      <Box padding="l" bg="surface.container" borderRadius="0.5rem">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb="l"
        >
          <Typography variant="extraSmall" color="onSurface">
            {t('lst.assetsTable.title')}
          </Typography>
          <Typography variant="extraSmall" color="primary" cursor="pointer">
            {t('lst.assetsTable.seeAll')}
          </Typography>
        </Box>
        <TableRow numCols={5} isEquidistant isTableHead>
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
                          width="100%"
                          maxHeight="1.25rem"
                          maxWidth="1.25rem"
                        />
                      </Box>
                    </Box>
                  ))}
                </TableRow>
              )
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default AssetsTable;
