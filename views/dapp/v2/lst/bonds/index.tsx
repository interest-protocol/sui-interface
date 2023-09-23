import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ArrowLeft } from '@/svg';

import BondsCard from './bonds-card';
import MaturityCard from './components/maturity-card';

const Bonds: FC = () => (
  <Box variant="container" display="flex" flexDirection="column">
    <Box gap="l" display="none" gridTemplateColumns="1fr 1fr 1fr">
      <BondsCard type="stake" />
      <BondsCard type="unstake" />
      <BondsCard type="rewards" />
    </Box>
    <Box
      gap="l"
      display={['flex', 'flex', 'flex', 'grid']}
      flexDirection="column"
      gridTemplateColumns="3fr 2fr"
    >
      <Box bg="surface.container" p="l" borderRadius="0.5rem">
        <Box mb="3rem">
          <Button
            variant="text"
            p="0 !important"
            color="onSurface"
            mb="1.313rem"
            nHover={{
              backgroundColor: 'unset',
            }}
            PrefixIcon={
              <ArrowLeft
                maxHeight="1.125rem"
                maxWidth="1.125rem"
                width="100%"
              />
            }
          >
            <Typography variant="small" font="0.875rem">
              Back
            </Typography>
          </Button>
          <Box color="white">
            <Typography
              variant="title1"
              fontFamily="'Share Tech Mono', monospace"
            >
              Claim Rewards
            </Typography>
            <Typography variant="medium" opacity="0.6">
              Enter your information to complete your transaction.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="medium" color="onSurface" mb="l">
            Select what iSUIY to redeem
          </Typography>
          <Box
            gap="m"
            display={['flex', 'flex', 'flex', 'grid']}
            flexDirection="column"
            gridTemplateColumns="1fr 1fr"
          >
            <MaturityCard />
            <MaturityCard />
          </Box>
        </Box>
      </Box>
      <Box
        bg="surface.container"
        p="l"
        borderRadius="0.5rem"
        height="max-content"
      ></Box>
    </Box>
  </Box>
);

export default Bonds;
