import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { TOKENS_SVG_MAP } from '@/constants';
import { Box, Typography } from '@/elements';

import { LiquidityDetailsCardLineProps } from '../../dex-pool-details.types';

const LiquidityDetailsCardLine: FC<LiquidityDetailsCardLineProps> = ({
  value,
  symbol,
  isFetchingInitialData,
  address,
}) => {
  const TokenSVG = TOKENS_SVG_MAP[address];

  return (
    <Box display="flex" justifyContent="space-between" my="M">
      <Box display="flex" alignItems="center">
        {isFetchingInitialData ? (
          <>
            <Box width="1.2rem" height="1.2rem" borderRadius="2rem">
              <Skeleton height="100%" borderRadius="2rem" />
            </Box>
            <Box width="2.5rem" ml="S">
              <Skeleton />
            </Box>
          </>
        ) : (
          <>
            <TokenSVG width="1.2rem" maxHeight="1.2rem" maxWidth="1.2rem" />
            <Typography
              mx="M"
              as="span"
              variant="normal"
              fontWeight="500"
              color="textSecondary"
            >
              {symbol}
            </Typography>{' '}
          </>
        )}
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="normal" mr="M" fontSize="0.8rem">
          {isFetchingInitialData ? (
            <Box as="span" display="inline-block" width="2.5rem">
              <Skeleton />
            </Box>
          ) : (
            value
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default LiquidityDetailsCardLine;
