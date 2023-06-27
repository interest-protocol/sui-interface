import { Box } from '@interest-protocol/ui-kit';

import { TOKENS_SVG_MAP_V2 } from '@/constants';
export const getSVG = (type: string): JSX.Element => {
  const SVG = TOKENS_SVG_MAP_V2[type] ?? TOKENS_SVG_MAP_V2.default;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="primary"
      borderRadius="4px"
      color="inverseOnSurface"
      height="2.5rem"
      width="2.5rem"
    >
      <SVG maxHeight="100%" maxWidth="2.5rem" width="1.5rem" height="1.5rem" />
    </Box>
  );
};
