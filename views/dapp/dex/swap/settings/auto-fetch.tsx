import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Switch } from '@/components';
import { Box, Typography } from '@/elements';

import { AutoFetchProps } from './settings.types';

const AutoFetch: FC<AutoFetchProps> = ({ setter, control }) => {
  const t = useTranslations();
  const autoFetch = useWatch({ control, name: 'autoFetch' });

  const handleAutoFetch = (value: boolean) => setter(value);

  return (
    <Box mx="M">
      <Typography variant="normal" fontSize="0.9rem" mb="M">
        {t('dexSwap.priceLabel')}
      </Typography>
      <Switch
        defaultValue={autoFetch ? 'auto' : 'manual'}
        options={[
          { value: 'manual', onSelect: () => handleAutoFetch(false) },
          { value: 'auto', onSelect: () => handleAutoFetch(true) },
        ]}
      />
    </Box>
  );
};

export default AutoFetch;
