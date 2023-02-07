import { FC } from 'react';

import { TOKENS_SVG_MAP } from '@/constants';
import Box from '@/elements/box';
import { SwapArrowSVG } from '@/svg';

import { SwapPathProps } from './swap.types';

const SwapPath: FC<SwapPathProps> = ({ markets }) => {
  const TokenInIcon =
    TOKENS_SVG_MAP[markets[0].tokenInType] ?? TOKENS_SVG_MAP.default;

  const NextTokenIcon =
    TOKENS_SVG_MAP[markets[0].tokenOutType] ?? TOKENS_SVG_MAP.default;

  const BaseTokenIcon =
    TOKENS_SVG_MAP[markets[0].baseTokens[0]] ?? TOKENS_SVG_MAP.default;

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <TokenInIcon
        width="100%"
        height="100%"
        maxWidth="2rem"
        maxHeight="2rem"
      />
      <SwapArrowSVG width="100%" maxWidth="5rem" maxHeight="0.75rem" />
      {markets[0].baseTokens[0] && (
        <>
          <BaseTokenIcon
            width="100%"
            height="100%"
            maxWidth="2rem"
            maxHeight="2rem"
          />
          <SwapArrowSVG width="100%" maxWidth="5rem" maxHeight="0.75rem" />
        </>
      )}
      <NextTokenIcon
        width="100%"
        height="100%"
        maxWidth="2rem"
        maxHeight="2rem"
      />
    </Box>
  );
};

export default SwapPath;
