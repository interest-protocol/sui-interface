import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TOKENS_SVG_MAP_V2 } from '@/constants';

import { CoinInfoProps, GetSVGProps } from './exchange-rate.type';

const TokenIcon: FC<GetSVGProps> = ({ type }) => {
  const SVG = TOKENS_SVG_MAP_V2[type] || TOKENS_SVG_MAP_V2.default;
  return (
    <SVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" height="100%" />
  );
};

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
        bg="primary"
      >
        <TokenIcon type={coin.type} />
      </Box>
      <Box>
        <Typography
          variant="extraSmall"
          fontSize="0.688rem"
          color="onSurface"
          opacity={0.6}
        >
          {coin.symbol}
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
