import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BoxDownSVG, BoxUpSVG } from '@/svg';

import BorrowMarketTable from '../borrow-market-table';
import SupplyMarketTable from '../supply-market-table';
import {
  GroupBorrowRow,
  GroupSupplyRow,
  MarketTableProps,
} from './market-table.types';

const MarketTable: FC<MarketTableProps> = ({
  title,
  isSupply,
  data,
  isLoading,
}) => {
  return (
    <Box width="100%">
      <Box
        cursor="pointer"
        display="flex"
        alignItems="center"
        position="relative"
        justifyContent="center"
        color="onSurface"
        py="1.25rem"
      >
        <Box
          width="1.25rem"
          minWidth="1.25rem"
          height="1.25rem"
          minHeight="1.25rem"
          bg="onSurface"
          color="inverseOnSurface"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="999px"
          mr="0.5rem"
        >
          {isSupply ? (
            <BoxDownSVG
              maxHeight="0.703rem"
              maxWidth="0.703rem"
              width="100%"
              height="100%"
            />
          ) : (
            <BoxUpSVG
              maxHeight="0.703rem"
              maxWidth="0.703rem"
              width="100%"
              height="100%"
            />
          )}
        </Box>
        <Typography variant="large">{title}</Typography>
      </Box>
      <Box color="onSurface">
        <Motion
          initial={{ height: '0' }}
          animate={{ height: 'auto' }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          overflow="hidden"
        >
          {isSupply ? (
            <SupplyMarketTable
              SupplyMarketTableData={data as ReadonlyArray<GroupSupplyRow>}
              isLoading={isLoading}
            />
          ) : (
            <BorrowMarketTable
              BorrowMarketTableData={data as ReadonlyArray<GroupBorrowRow>}
              isLoading={isLoading}
            />
          )}
        </Motion>
      </Box>
    </Box>
  );
};

export default MarketTable;
