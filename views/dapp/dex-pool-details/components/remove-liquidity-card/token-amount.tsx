import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';

import { Box, Typography } from '@/elements';

import { TokenAmountProps } from './remove-liquidity-card.types';

const TokenAmount: FC<TokenAmountProps> = ({
  Icon,
  symbol,
  control,
  name,
  isFetchingInitialData,
}) => {
  const amount = useWatch({ control, name });
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
