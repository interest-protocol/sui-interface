import { FC } from 'react';

import RowTokenField from './row-token-field';
import LiquidityCardWrapper from './wrapper';

const LiquidityCardRemove: FC = () => {
  return (
    <LiquidityCardWrapper type="remove" disabled>
      <RowTokenField />
      <RowTokenField />
    </LiquidityCardWrapper>
  );
};

export default LiquidityCardRemove;
