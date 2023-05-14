import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { ThenCardData } from './then.data';
import ThenCard from './then-card';

const ThenCards: FC = () => {
  const t = useTranslations();
  const [selected, setSelected] = useState(0);

  return (
    <Box
      gridColumn="1/-1"
      display="flex"
      flexDirection={['column', 'column', 'column', 'row']}
      mt="4xl"
      pt="4xl"
    >
      {ThenCardData.map((description, index) => (
        <ThenCard
          key={v4()}
          index={index}
          setSelected={setSelected}
          isSelected={index === selected}
          description={t(description as any)}
        />
      ))}
    </Box>
  );
};

export default ThenCards;
