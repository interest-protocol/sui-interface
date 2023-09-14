import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { AmountFieldDollarsProps } from '../../your-info.types';

const AmountFieldInputDollars: FC<AmountFieldDollarsProps> = ({ control }) => {
  const amount = useWatch({ control, name: 'amountUSD' });

  return <Box as="span">{amount}</Box>;
};

export default AmountFieldInputDollars;
