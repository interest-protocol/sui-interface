import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CardLendProps } from '../lend.types';
import CardTop from './top';

const NormalCard: FC<CardLendProps> = ({
  icon,
  description,
  isTrendUp,
  trendAmount,
  symbol,
  amount,
}) => {
  return (
    <>
      <CardTop
        icon={icon}
        description={description}
        isTrendUp={isTrendUp}
        trendAmount={trendAmount}
      />
      <Box>
        <Typography
          variant="title6"
          fontWeight="400"
          color="onSurface"
          fontSize={['0.95rem', '0.95rem', '0.95rem', '1.375rem']}
        >
          {symbol == '%' ? `${amount} ${symbol}` : `${symbol} ${amount}`}
        </Typography>
      </Box>
    </>
  );
};

export default NormalCard;
