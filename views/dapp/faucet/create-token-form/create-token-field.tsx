import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Box, Input, Typography } from '@/elements';
import { useLocale } from '@/hooks';

import { CreateTokenFieldProps } from './create-token-form.types';

const CreateTokenField: FC<CreateTokenFieldProps> = ({
  name,
  label,
  register,
}) => {
  const t = useTranslations();
  const { currentLocale } = useLocale();

  return (
    <Box mb="L">
      <Typography
        as="label"
        fontSize="S"
        variant="normal"
        display="inline-block"
      >
        {label}:
      </Typography>
      <Input
        placeholder={t('faucet.type', {
          currentLocale,
          label: label,
        })}
        {...register(name)}
        shieldProps={{
          p: 'S',
          my: 'M',
          height: '3rem',
          bg: 'background',
          borderRadius: '1.5rem',
          overflow: 'visible',
          border: '1px solid',
          borderColor: 'transparent',
          nHover: {
            borderColor: 'accentBackground',
          },
        }}
      />
    </Box>
  );
};

export default CreateTokenField;
