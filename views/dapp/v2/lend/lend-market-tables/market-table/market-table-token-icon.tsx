import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TOKENS_SVG_MAP_V2 } from '@/constants';

import { MarketTableTokenIconProps } from './market-table.types';

export const MarketTableTokenIcon: FC<MarketTableTokenIconProps> = ({
  type,
}) => {
  const SVG = TOKENS_SVG_MAP_V2[type] ?? TOKENS_SVG_MAP_V2.default;

  return (
    <Box
      bg="primary"
      display="flex"
      width="2.5rem"
      height="2.5rem"
      borderRadius="4px"
      alignItems="center"
      justifyContent="center"
      color="inverseOnSurface"
    >
      <SVG maxHeight="100%" maxWidth="2.5rem" width="1.5rem" height="1.5rem" />
    </Box>
  );
};
