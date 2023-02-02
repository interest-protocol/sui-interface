import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Button } from '@/elements';
import { capitalize } from '@/utils';

import { AddLiquidityCardButtonProps } from './add-liquidity-card.types';

const AddLiquidityButton: FC<AddLiquidityCardButtonProps> = ({ loading }) => {
  const t = useTranslations();

  return (
    <Button width="100%" variant="primary" disabled={loading}>
      {capitalize(t('common.add', { isLoading: Number(loading) }))}
    </Button>
  );
};

export default AddLiquidityButton;
