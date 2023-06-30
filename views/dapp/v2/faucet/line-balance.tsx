import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TOKENS_SVG_MAP_V2 } from '@/constants';

import { LineBalance } from './faucet.types';

const LineBalance: FC<LineBalance> = ({ TokenSVG, amount, token, type }) => {
  const SVG = TOKENS_SVG_MAP_V2[type] ?? TOKENS_SVG_MAP_V2.default;
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="primary"
          borderRadius="4px"
          color="inverseOnSurface"
          mr="1.25rem"
          height="2.5rem"
          width="2.5rem"
        >
          <SVG
            maxHeight="100%"
            maxWidth="2.5rem"
            width="1.5rem"
            height="1.5rem"
          />
        </Box>
        <Typography variant="medium" color="onSurface">
          0.00000
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="medium" color="onSurface">
          SUI{' '}
          <Typography variant="small" as="span" color="#ACAAAF">
            (0)
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default LineBalance;
