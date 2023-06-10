import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TOKENS_SVG_MAP_V2 } from '@/constants';
import { SwapArrowSVG } from '@/svg';

import { SwapPathProps } from '../swap.types';

const SwapPath: FC<SwapPathProps> = ({ swapPath }) => {
  const TokenInIcon =
    TOKENS_SVG_MAP_V2[swapPath.coinInType] ?? TOKENS_SVG_MAP_V2.default;

  const NextTokenIcon =
    TOKENS_SVG_MAP_V2[swapPath.coinOutType] ?? TOKENS_SVG_MAP_V2.default;

  const BaseTokenIcon =
    TOKENS_SVG_MAP_V2[swapPath.baseTokens[0]] ?? TOKENS_SVG_MAP_V2.default;

  return (
    <Box
      p="l"
      gap="xl"
      borderRadius="m"
      color="onSurface"
      alignItems="center"
      display="inline-flex"
      bg="surface.container"
      justifyContent="center"
    >
      <TokenInIcon
        filled
        width="100%"
        height="100%"
        maxWidth="2.5rem"
        maxHeight="2.5rem"
      />
      <SwapArrowSVG width="100%" maxWidth="5rem" maxHeight="0.75rem" />
      {swapPath.baseTokens[0] && (
        <>
          <BaseTokenIcon
            filled
            width="100%"
            height="100%"
            maxWidth="2.5rem"
            maxHeight="2.5rem"
          />
          <SwapArrowSVG width="100%" maxWidth="5rem" maxHeight="0.75rem" />
        </>
      )}
      <NextTokenIcon
        filled
        width="100%"
        height="100%"
        maxWidth="2rem"
        maxHeight="2rem"
      />
    </Box>
  );
};

export default SwapPath;
