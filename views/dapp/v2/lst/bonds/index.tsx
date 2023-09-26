import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BondsProps } from './bonds.type';
import BondsCard from './bonds-card';
import BondsClaimRewards from './claim-rewards';

const Bonds: FC<BondsProps> = ({ form, type }) => (
  <Box variant="container" display="flex" flexDirection="column">
    {type == 'rewards' ? (
      <BondsClaimRewards form={form} />
    ) : (
      <Box
        gap="l"
        display={['flex', 'flex', 'flex', 'grid']}
        flexDirection="column"
        gridTemplateColumns="1fr 1fr 1fr"
      >
        <BondsCard type="stake" />
        <BondsCard type="unstake" />
        <BondsCard type="rewards" />
      </Box>
    )}
  </Box>
);

export default Bonds;
