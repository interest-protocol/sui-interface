import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const LimitSection: FC = () => (
  <Box
    my="2.375rem"
    color="onSurface"
    display="grid"
    gridTemplateColumns="auto 1fr"
    mb={['m', 'm', 'm', '2.375rem']}
    gap="s"
  >
    <Box>
      <Typography variant="extraSmall" maxWidth="12rem" width="max-content">
        Borrow Limit
      </Typography>
    </Box>
    <Box display="grid" gridTemplateColumns="auto 3fr auto" gap="s">
      <Typography variant="extraSmall">0 %</Typography>
      <Box display="flex" alignItems="center">
        <ProgressIndicator value={75} variant="bar" />
      </Box>
      <Typography variant="extraSmall" textAlign="left">
        $ 0
      </Typography>
    </Box>
  </Box>
);

export default LimitSection;
