import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BoxDownSVG, BoxUpSVG } from '@/svg';

import { MarketTableProps } from './market-table.types';
import MarketTableContent from './market-table-content';

const MarketTable: FC<MarketTableProps> = ({ title, isSupply }) => (
  <Box
    color="text"
    width="100%"
    borderRadius="s"
    height="fit-content"
    bg="surface.container"
  >
    <Box
      py="1.25rem"
      display="flex"
      cursor="pointer"
      color="onSurface"
      alignItems="center"
      position="relative"
      justifyContent="center"
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
        <MarketTableContent isSupply={isSupply} />
      </Motion>
    </Box>
  </Box>
);

export default MarketTable;
