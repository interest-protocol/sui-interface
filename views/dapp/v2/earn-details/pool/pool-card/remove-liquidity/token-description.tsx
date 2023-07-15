import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TOKENS_SVG_MAP_V2 } from '@/constants';

import { TokenDescriptionProps } from '../../../earn.types';

const TokenDescription: FC<TokenDescriptionProps> = ({ coin, amount }) => {
  const SVG = TOKENS_SVG_MAP_V2[coin.type] ?? TOKENS_SVG_MAP_V2.default;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt="1.5rem"
    >
      <Box display="flex" alignItems="center">
        <Box
          bg="white"
          color="inverseOnSurface"
          width="1.25rem"
          height="1.25rem"
          minWidth="1.25rem"
          minHeight="1.25rem"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <SVG maxHeight="1.25rem" maxWidth="1.25rem" width="0.85rem" />
        </Box>
        <Typography ml="0.5rem" variant="medium" color="white">
          {coin.symbol}
        </Typography>
      </Box>
      <Typography variant="medium" color="white">
        {amount}
      </Typography>
    </Box>
  );
};

export default TokenDescription;
