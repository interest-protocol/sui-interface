import { FC } from 'react';

import { TOKENS_SVG_MAP } from '@/constants';
import { Box, Typography } from '@/elements';

import { LiquidityDetailsCardLineProps } from '../../dex-pool-details.types';

const LiquidityDetailsCardLine: FC<LiquidityDetailsCardLineProps> = ({
  type,
  value,
  symbol,
}) => {
  const TokenSVG = TOKENS_SVG_MAP[type];

  return (
    <Box display="flex" justifyContent="space-between" my="M">
      <Box display="flex" alignItems="center">
        <TokenSVG width="1.2rem" maxHeight="1.2rem" maxWidth="1.2rem" />
        <Typography
          mx="M"
          as="span"
          color="outline"
          variant="normal"
          fontWeight="500"
        >
          {symbol}
        </Typography>{' '}
      </Box>
      <Box display="flex" alignItems="center">
        <Typography
          mr="M"
          color="outline"
          variant="normal"
          fontSize="0.8rem"
          fontWeight="bold"
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default LiquidityDetailsCardLine;
