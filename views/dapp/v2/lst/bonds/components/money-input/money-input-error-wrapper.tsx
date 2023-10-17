import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { MoneyInputErrorProps } from './money-input.types';

const MoneyInputErrorWrapper: FC<MoneyInputErrorProps> = ({
  control,
  isStake,
}) => {
  const t = useTranslations();
  const amount = useWatch({ control, name: 'amount' });

  const HAS_ERROR = isStake ? +amount > 0 && +amount < 1 : false;

  return (
    <>
      <Box
        width="100%"
        height="100%"
        left="0rem"
        position="absolute"
        borderRadius="0.25rem"
        border="1px solid"
        borderColor={HAS_ERROR ? 'error' : 'transparent'}
      />
      {HAS_ERROR && (
        <Typography
          left="0"
          top="100%"
          color="error"
          variant="small"
          position="absolute"
        >
          {t('lst.bonds.stake.form.error')}
        </Typography>
      )}
    </>
  );
};

export default MoneyInputErrorWrapper;
