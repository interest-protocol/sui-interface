import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DoubleCoinSVG, GeometricFigureSVG, LendSectionSVG } from '@/svg';

export const EarnIllustration: FC = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight="100%"
  >
    <DoubleCoinSVG maxWidth="196px" maxHeight="137px" />
  </Box>
);
export const TradeIllustration: FC = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight="100%"
  >
    <GeometricFigureSVG maxWidth="198px" maxHeight="204px" />
  </Box>
);
export const LendIllustration: FC = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight="100%"
  >
    <LendSectionSVG maxWidth="165px" maxHeight="207px" />
  </Box>
);
