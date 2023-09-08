import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { UsersSVG } from '@/components/svg/v2';

import { VALIDATORS_DATA } from './overview.data';

const Overview: FC = () => {
  return (
    <Box
      p="l"
      rowGap="l"
      variant="container"
      borderRadius="0.5rem"
      bg="surface.container"
    >
      <Box gridColumn="1/-1" width="100%">
        <Typography variant="extraSmall" color="onSurface">
          Overview
        </Typography>
      </Box>
      {VALIDATORS_DATA.map((item) => (
        <Box
          key={v4()}
          width="100%"
          display="flex"
          columnGap="l"
          gridColumn="span 3"
        >
          <Box
            display="flex"
            width="2.5rem"
            color="primary"
            height="2.5rem"
            borderRadius="m"
            aspectRatio="1/1"
            alignItems="center"
            justifyContent="center"
            bg="surface.containerHigh"
          >
            <UsersSVG width="100%" maxHeight="1.25rem" maxWidth="1.25rem" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="extraSmall" color="onSurface">
              {item.description}
            </Typography>
            <Typography variant="large" color="onSurface">
              {item.length}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Overview;
