import { FC } from 'react';

import { Typography } from '@/elements';

import { TokenAmountProps } from './remove-liquidity-card.types';

const TokenAmount: FC<TokenAmountProps> = ({ Icon, symbol, amount }) => (
  <>
    {Icon}
    <Typography variant="normal" ml="M">
      {symbol}
    </Typography>
    <Typography variant="normal">: {amount}</Typography>
  </>
);

export default TokenAmount;
