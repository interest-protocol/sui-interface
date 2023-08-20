import { Box } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';

// import { v4 } from 'uuid';
// import { EARN_POOL_DATA, EARN_POSITION_DATA } from './earn.data';
import EarnContainer from './earn-card/earn-container';
// import PoolCard from './earn-card/pool-card';
// import PositionCard from './earn-card/position-card';
import EarnHeader from './earn-header';

const EarnListCard: FC = () => {
  const [isPool, setIsPool] = useState(true);

  const handleTab = () => setIsPool(not);

  return (
    <Box display="flex" variant="container">
      <EarnHeader isPool={isPool} handleTab={handleTab} />
      <EarnContainer columns={3}>
        {
          null
          // isPool
          //   ? EARN_POOL_DATA.map((earnItem) => (
          //       <PoolCard key={v4()} {...earnItem} />
          //     ))
          //   : null}
        }
        {/* : EARN_POSITION_DATA.map((earnItem) => <PositionCard key={v4()} {...earnItem} />)} */}
      </EarnContainer>
    </Box>
  );
};

export default EarnListCard;
