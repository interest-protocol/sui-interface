import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TOKENS_SVG_MAP_V2 } from '@/constants';

const TokenIcon: FC<{ type: string }> = ({ type }) => {
  const SVG = TOKENS_SVG_MAP_V2[type] ?? TOKENS_SVG_MAP_V2.default;

  return (
    <Box
      bg="primary"
      color="inverseOnSurface"
      width="2.5rem"
      height="2.5rem"
      minWidth="2.5rem"
      minHeight="2.5rem"
      borderRadius=".25rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <SVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
    </Box>
  );
};

export default TokenIcon;
