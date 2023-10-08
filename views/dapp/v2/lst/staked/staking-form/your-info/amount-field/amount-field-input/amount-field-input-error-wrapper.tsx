import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { AmountFieldInputErrorProps } from '../../your-info.types';

const AmountFieldInputErrorWrapper: FC<
  Omit<AmountFieldInputErrorProps, 'setHasError'>
> = ({ control }) => {
  const t = useTranslations();
  const amount = useWatch({ control, name: 'amount' });

  const HAS_ERROR = +amount == 0 || +amount >= 1;

  return (
    <>
      <Box
        width="100%"
        height="100%"
        left="0rem"
        position="absolute"
        borderRadius="0.25rem"
        border="1px solid"
        borderColor={HAS_ERROR ? 'transparent' : 'error'}
      />
      {!HAS_ERROR && (
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

export default AmountFieldInputErrorWrapper;
