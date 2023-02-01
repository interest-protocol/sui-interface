import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import LiquidityFormMessage from '../liquidity-form-message';
import { ErrorLiquidityMessageProps } from './add-liquidity-card.types';

const ErrorLiquidityMessage: FC<ErrorLiquidityMessageProps> = ({ control }) => {
  const error = useWatch({ control, name: 'error' });
  return error ? <LiquidityFormMessage color="error" message={error} /> : null;
};

export default ErrorLiquidityMessage;
