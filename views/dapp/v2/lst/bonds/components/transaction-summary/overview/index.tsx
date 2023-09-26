import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { OverviewProps } from './overview.type';

const Overview: FC<OverviewProps> = ({ title, data }) => (
  <Box>
    <Typography
      variant="medium"
      fontSize={['0.588rem', '0.588rem', '0.588rem', '0.688rem']}
      color="onSurface"
      lineHeight="1rem"
      opacity={0.6}
      width="100%"
      mb="0.5rem"
      textTransform="uppercase"
    >
      {title}
    </Typography>
    <Box
      bg="surface.containerHigh"
      p="l"
      display="flex"
      flexDirection="column"
      gap="0.5rem"
      borderRadius="0.5rem"
      mb="3xl"
    >
      {data.map((item) => (
        <Box key={v4()} display="flex" justifyContent="space-between">
          <Typography variant="small" fontSize="0.75rem" color="onSurface">
            {item.label}
          </Typography>
          <Typography
            variant="small"
            fontSize="0.75rem"
            color="onSurface"
            fontWeight="700"
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export default Overview;
