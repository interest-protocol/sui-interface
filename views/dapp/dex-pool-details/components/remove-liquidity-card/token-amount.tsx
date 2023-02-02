import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { Box, Typography } from '@/elements';

import { TokenAmountProps } from './remove-liquidity-card.types';

const TokenAmount: FC<TokenAmountProps> = ({
  Icon,
  symbol,
  amount,
  isFetchingInitialData,
}) => {
  return (
    <>
      {Icon}
      <Typography variant="normal" ml="M">
        {isFetchingInitialData ? (
          <Box width="2.5rem" as="span">
            <Skeleton />
          </Box>
        ) : (
          symbol
        )}
      </Typography>
      <Typography variant="normal">: {amount}</Typography>
    </>
  );
};

export default TokenAmount;
