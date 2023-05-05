import { Box } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import ThenCard from './then-card';

const ThenCards: FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Box gridColumn="1/-1" display="flex" mt="4xl" pt="4xl">
      {Array.from({ length: 4 }).map((_, index) => (
        <ThenCard
          key={v4()}
          index={index}
          setSelected={setSelected}
          isSelected={index === selected}
        />
      ))}
    </Box>
  );
};

export default ThenCards;
