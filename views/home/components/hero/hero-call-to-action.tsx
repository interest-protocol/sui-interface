import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const HeroCallToAction: FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems={['center', 'center', 'flex-start']}
  >
    <Typography
      py="l"
      color="outline"
      variant="medium"
      textAlign={['center', 'center', 'left']}
    >
      The next generation DeFi protocol
    </Typography>
    <Button my="4xl" variant="filled">
      Trade now in SUI
    </Button>
  </Box>
);

export default HeroCallToAction;
