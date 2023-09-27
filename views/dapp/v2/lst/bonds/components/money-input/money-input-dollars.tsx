import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { MoneyInputProps } from './money-input.types';

const MoneyInputDollars: FC<Pick<MoneyInputProps, 'control'>> = ({
  control,
}) => {
  const amount = useWatch({ control, name: 'amountUSD' });

  return <Box as="span">{amount}</Box>;
};

export default MoneyInputDollars;
