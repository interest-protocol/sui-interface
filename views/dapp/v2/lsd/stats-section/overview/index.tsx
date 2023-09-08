import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SEMANTIC_COLORS } from '@/constants/semantic-colors';

import { OVERVIEW_DATA } from './overview.data';

const Overview: FC = () => {
  const { dark } = useTheme() as Theme;
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
        display="flex"
        alignItems={['unset', 'unset', 'center', 'center']}
        gap="l"
        flexDirection={['column', 'column', 'row', 'row']}
      >
        {OVERVIEW_DATA.map((item, index) => (
          <Box
            key={v4()}
            flex="1"
            display="flex"
            columnGap="l"
            alignItems="center"
          >
            <Box
              display="flex"
              width="2.5rem"
              height="2.5rem"
              borderRadius="m"
              aspectRatio="1/1"
              alignItems="center"
              justifyContent="center"
              bg={
                index === 0
                  ? dark
                    ? SEMANTIC_COLORS[3].dark
                    : SEMANTIC_COLORS[3].light
                  : 'surface.containerHigh'
              }
              color={index === 0 ? (dark ? 'white' : 'black') : 'primary'}
            >
              <item.Icon width="100%" maxHeight="1.25rem" maxWidth="1.25rem" />
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
                {item.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Overview;
