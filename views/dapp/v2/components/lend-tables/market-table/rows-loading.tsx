import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const MarketTableRowLoading: FC = () => {
  return (
    <Motion
      width="100%"
      display="grid"
      cursor="pointer"
      gridTemplateColumns="1fr"
      pl="0.75rem"
      pr="0.5rem"
      my="1rem"
    >
      <Skeleton height="2rem" />
    </Motion>
  );
};

export default MarketTableRowLoading;
