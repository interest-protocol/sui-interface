import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TOP_INFO_CARDS_DATA } from '../metrics.data';
import TopInfoCards from '.';

const TopInfoCardsList: FC = () => {
  return (
    <Box gridColumn="1/-1" width="100%" display="flex" gap="s">
      {TOP_INFO_CARDS_DATA.map((card) => (
        <TopInfoCards
          key={v4()}
          Icon={card.Icon}
          description={card.description}
          amount={card.amount}
        />
      ))}
    </Box>
  );
};

export default TopInfoCardsList;
