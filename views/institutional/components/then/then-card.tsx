import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ThenCardProps } from './then.types';

const thenCardVariants = {
  active: {
    width: '100%',
  },
  inactive: {
    width: 'fit-content',
  },
};

const ThenCard: FC<ThenCardProps> = ({ index, isSelected, setSelected }) => (
  <Motion
    cursor="pointer"
    initial="active"
    variants={thenCardVariants}
    onClick={() => setSelected(index)}
    animate={isSelected ? 'active' : 'inactive'}
  >
    <Motion>{index + 1}</Motion>
  </Motion>
);

export default ThenCard;
