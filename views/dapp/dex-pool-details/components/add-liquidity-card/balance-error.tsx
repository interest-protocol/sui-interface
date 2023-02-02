import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import LiquidityFormMessage from '../liquidity-form-message';
import { BalanceErrorProps } from './add-liquidity-card.types';

const BalanceError: FC<BalanceErrorProps> = ({
  control,
  balance,
  name,
  symbol,
}) => {
  const t = useTranslations();
  const amount = useWatch({ control, name });

  return +amount > +balance ? (
    <LiquidityFormMessage
      color="error"
      message={t('dexPoolPair.error.lowBalance', { symbol })}
    />
  ) : null;
};

export default BalanceError;
