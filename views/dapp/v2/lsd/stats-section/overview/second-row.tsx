import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { OVERVIEW_DATA } from './overview.data';

const SecondOverviewRow: FC = () => {
  return (
    <>
      {OVERVIEW_DATA.slice(3, 6).map((item) => (
        <Box
          key={v4()}
          display="flex"
          rowGap=".625rem"
          alignItems="flex-start"
          flexDirection="column"
          flex={['unset', 'unset', '1 1 200px', '1 1 200px']}
        >
          <Box>
            <Typography variant="extraSmall" opacity="0.6" color="onSurface">
              {item.description}
            </Typography>
          </Box>
          <Box display="flex" columnGap="s" alignItems="center">
            <item.Icon width="100%" maxHeight="1.25rem" maxWidth="1.25rem" />
            <Typography variant="large" m="0" color="onSurface">
              {item.value}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default SecondOverviewRow;
