import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TransactionDeadlineProps } from './settings-modal.types';

const TransactionDeadline: FC<TransactionDeadlineProps> = ({ register }) => {
  const t = useTranslations();

  return (
    <Box mt="2xl" width="100%">
      <Typography variant="extraSmall" alignSelf="start" mb="s">
        {t('swap.modal.settings.field.deadline')}
      </Typography>
      <TextField
        min="2"
        type="number"
        placeholder="10"
        textAlign="right"
        {...register('deadline')}
        SuffixIcon={
          <Typography
            px="s"
            width="rem"
            color="#C7C6CA"
            variant="medium"
            textAlign="right"
          >
            min
          </Typography>
        }
      />
    </Box>
  );
};

export default TransactionDeadline;
