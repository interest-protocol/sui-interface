import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Switch } from '@/components';
import { Box, Typography } from '@/elements';

import { AutoFetchProps } from './settings.types';

const AutoFetch: FC<AutoFetchProps> = ({ disabled, setter, control }) => {
  const t = useTranslations();
  const autoFetch = useWatch({ control, name: 'autoFetch' });

  const handleAutoFetch = (value: boolean) => setter(value);

  return (
    <Box mx="M" cursor="not-allowed" opacity="0.7">
      <Typography variant="normal" fontSize="0.9rem" mb="M">
        {t('dexSwap.priceLabel')}
      </Typography>
      <Switch
        defaultValue={disabled ? 'auto' : autoFetch ? 'auto' : 'manual'}
        options={[
          {
            value: 'manual',
            onSelect: () => !disabled && handleAutoFetch(false),
          },
          { value: 'auto', onSelect: () => !disabled && handleAutoFetch(true) },
        ]}
      />
    </Box>
  );
};

export default AutoFetch;
