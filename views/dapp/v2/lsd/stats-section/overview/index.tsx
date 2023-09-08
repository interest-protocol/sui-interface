import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import FirstOverviewRow from './first-row';
import SecondOverviewRow from './second-row';

const Overview: FC = () => {
  return (
    <Box
      p="l"
      rowGap="l"
      display="flex"
      flexDirection="column"
      borderRadius="0.5rem"
      bg="surface.container"
    >
      <Box gridColumn="1/-1" width="100%">
        <Typography variant="extraSmall" color="onSurface">
          Overview
        </Typography>
      </Box>
      <Box
        gap="l"
        display="flex"
        flexDirection={['row', 'row', 'column', 'column']}
        justifyContent={['space-between', 'space-between', 'unset', 'unset']}
      >
        <Box
          gap="l"
          display="flex"
          flexDirection={['column', 'column', 'row', 'row']}
          alignItems={['unset', 'unset', 'center', 'center']}
          justifyContent={['space-between', 'space-between', 'unset', 'unset']}
        >
          <FirstOverviewRow />
        </Box>
        <Box
          gap="l"
          display="flex"
          flexDirection={['column', 'column', 'row', 'row']}
          alignItems={['unset', 'unset', 'center', 'center']}
        >
          <SecondOverviewRow />
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
