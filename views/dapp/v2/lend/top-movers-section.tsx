import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import Card from './card';
import { CARD_HEADERS } from './lend.data';

const TopMoversSection: FC = () => (
  <>
    <Typography variant="extraSmall" color="onSurface" my="1rem">
      Top Movers
    </Typography>
    <Box
      display={['grid', 'grid', 'grid', 'grid']}
      gridTemplateColumns={[
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
      ]}
      overflowX="auto"
      gap="0.5rem"
      mb="1rem"
      flexWrap="wrap"
    >
      {CARD_HEADERS.map((item) => (
        <Card {...item} key={v4()} />
      ))}
    </Box>
  </>
);

export default TopMoversSection;
