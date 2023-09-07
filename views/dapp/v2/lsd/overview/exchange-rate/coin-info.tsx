import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import SuiDerivatedSVG from '../../components/sui-derivated-svg';
import { CoinInfoProps } from './exchange-rate.type';

const CoinInfo: FC<CoinInfoProps> = ({ coin, amount }) => {
  return (
    <Box display="flex" gap="0.5rem">
      <Box
        width="3rem"
        height="3rem"
        borderRadius="0.34rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        bg="#6FBCF0"
      >
        <SuiDerivatedSVG size={coin == 'Sui' ? '2rem' : '3rem'} symbol={coin} />
      </Box>
      <Box>
        <Typography
          variant="extraSmall"
          fontSize="0.688rem"
          color="onSurface"
          opacity={0.6}
        >
          {coin}
        </Typography>
        <Typography
          variant="extraSmall"
          fontSize="1.375rem"
          color="onSurface"
          lineHeight="1.75rem"
        >
          {amount}
        </Typography>
      </Box>
    </Box>
  );
};

export default CoinInfo;
