import { Box, Button, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { PercentageSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

import { SlippageToleranceProps } from './settings-modal.types';

const SlippageTolerance: FC<SlippageToleranceProps> = ({
  register,
  setValue,
}) => {
  const t = useTranslations();

  return (
    <Box width="100%">
      <Typography variant="extraSmall" alignSelf="start" mb="s">
        {capitalize(t('swap.modal.settings.field.slippage'))}
      </Typography>
      <TextField
        max="10"
        min="0.1"
        step="0.1"
        type="number"
        textAlign="right"
        placeholder="0.10"
        {...register('slippage')}
        Suffix={
          <Box px="s" width="3rem" textAlign="right">
            <PercentageSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Box>
        }
        Prefix={
          <Button
            p="0"
            size="small"
            width="2.5rem"
            height="2.5rem"
            variant="filled"
            fontWeight="700"
            fontSize="0.6rem"
            justifyContent="center"
            textTransform="uppercase"
            onClick={() => setValue('slippage', '0.1')}
          >
            Auto
          </Button>
        }
      />
    </Box>
  );
};

export default SlippageTolerance;
