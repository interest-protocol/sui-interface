import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const MarketTableRowLoading: FC = () => (
  <Motion
    my="1rem"
    pr="0.5rem"
    pl="0.75rem"
    width="100%"
    display="grid"
    cursor="pointer"
    gridTemplateColumns="1fr"
  >
    <Skeleton height="2rem" />
  </Motion>
);

export default MarketTableRowLoading;
