import { FC } from 'react';

import { Box, Typography } from '@/elements';

import { TokenAmountProps } from './remove-liquidity-card.types';

const TokenAmount: FC<TokenAmountProps> = ({ Icon, symbol, amount }) => (
  <Box display="flex" alignItems="center">
    {Icon}
    <Typography variant="normal" ml="M">
      {symbol}
    </Typography>
    <Typography variant="normal">: {amount}</Typography>
  </Box>
);

export default TokenAmount;
