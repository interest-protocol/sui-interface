import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { COINS } from '@/constants';

import FarmCard from './farm-card';
import EarnFarmOverview from './overview';

const EarnFarmSection: FC = () => {
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <EarnFarmOverview />
      <Box
        display="grid"
        gridTemplateColumns={[
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, minmax(17rem, 1fr))',
        ]}
        gap={['0.5rem', '0.5rem', '0.5rem', '1.5rem']}
      >
        <FarmCard
          type="staked"
          coin={COINS[Network.TESTNET].BNB}
          amount="0.256"
          balance="0.534"
        />
        <FarmCard
          type="unstaked"
          coin={COINS[Network.TESTNET].BNB}
          amount="0.256"
          balance="0.534"
        />
        <FarmCard
          type="rewards"
          coin={COINS[Network.TESTNET].IPX}
          amount="0.256"
          balance="0.534"
        />
      </Box>
    </Box>
  );
};

export default EarnFarmSection;
