import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TOKENS_SVG_MAP_V2 } from '@/constants';

import { EarnCardTokenIconProps } from '../earn.types';

export const EarnCardTokenIcon: FC<EarnCardTokenIconProps> = ({
  types,
  isSingleCoin,
}) => {
  const Icon1 = TOKENS_SVG_MAP_V2[types[0]] ?? TOKENS_SVG_MAP_V2.default;
  const Icon2 = TOKENS_SVG_MAP_V2[types[1]] ?? TOKENS_SVG_MAP_V2.default;

  if (isSingleCoin)
    return (
      <Box
        display="flex"
        width="2.5rem"
        height="2.5rem"
        borderRadius="m"
        alignItems="center"
        justifyContent="center"
        color="inverseOnSurface"
      >
        <Icon2
          filled
          width="100%"
          height="100%"
          maxWidth="2.5rem"
          maxHeight="2.5rem"
        />
      </Box>
    );

  return (
    <>
      <Box
        display="flex"
        width="2.5rem"
        height="2.5rem"
        borderRadius="m"
        alignItems="center"
        justifyContent="center"
        color="inverseOnSurface"
      >
        <Icon1
          filled
          width="100%"
          height="100%"
          maxWidth="2.5rem"
          maxHeight="2.5rem"
        />
      </Box>
      <Box
        display="flex"
        width="2.5rem"
        height="2.5rem"
        borderRadius="m"
        alignItems="center"
        justifyContent="center"
        color="inverseOnSurface"
      >
        <Icon2
          filled
          width="100%"
          height="100%"
          maxWidth="2.5rem"
          maxHeight="2.5rem"
        />
      </Box>
    </>
  );
};
