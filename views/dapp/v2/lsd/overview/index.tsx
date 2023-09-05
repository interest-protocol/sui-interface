import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { COINS } from '@/constants';

import DetailsCard from './details-card';
import ExchangeRate from './exchange-rate';

const Overview: FC = () => {
  return (
    <Box width={['100%', '100%', '100%', '55%']}>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={['0.5rem', '0.5rem', '0.5rem', 'unset']}
        mb="m"
      >
        <ExchangeRate
          exchangeRateData={[
            [
              { coin: COINS[Network.TESTNET].SUID, amount: 1 },
              { coin: COINS[Network.TESTNET].SUI, amount: 1 },
            ],
            [
              { coin: COINS[Network.TESTNET].SUID, amount: 1 },
              { coin: COINS[Network.TESTNET].SUI, amount: 1 },
            ],
            [
              { coin: COINS[Network.TESTNET].SUID, amount: 1 },
              { coin: COINS[Network.TESTNET].SUI, amount: 1 },
            ],
          ]}
        />
        <DetailsCard validatorNumbers={90} hasRewards />
      </Box>
    </Box>
  );
};

export default Overview;
