import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { MarketTable } from '..';

const LendTables: FC = () => {
  const { dark } = useTheme() as Theme;
  const surface1 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.04), rgba(182, 196, 255, 0.04)), #1B1B1F;'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.04), rgba(0, 85, 255, 0.04)), #F2F0F4;';
  return (
    <Box variant="container">
      <Box
        width="calc(100% + .625rem)"
        color="text"
        borderRadius=".25rem"
        gridColumn={['1 / -1', '1 / -1', '1 / -1', '1 / 7']}
        bg={surface1}
        height="fit-content"
      >
        <MarketTable title="Supply Market" />
      </Box>
      <Box
        width="calc(100% + .625rem)"
        color="text"
        borderRadius=".25rem"
        gridColumn={['1 / -1', '1 / -1', '1 / -1', '7 / -1']}
        bg={surface1}
        height="fit-content"
      >
        <MarketTable title="Borrow Market" />
      </Box>
    </Box>
  );
};

export default LendTables;
