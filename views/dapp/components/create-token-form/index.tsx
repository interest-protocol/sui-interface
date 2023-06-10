import { Network } from '@interest-protocol/sui-sdk';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Typography } from '@/elements';
import { useNetwork } from '@/hooks';
import { InfoSVG } from '@/svg';

import CreateTokenButton from './create-token-button';
import CreateTokenField from './create-token-field';
import { TCreateTokenForm } from './create-token-form.types';
import CreateTokenSupplyField from './create-token-supply-field';

const CreateTokenForm: FC = () => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { setValue, register, control } = useForm<TCreateTokenForm>({
    defaultValues: {
      name: '',
      symbol: '',
      amount: '',
      iconUrl: '',
    },
  });

  return (
    <Box
      bg="foreground"
      my="M"
      borderRadius="L"
      p="XL"
      color="text"
      minWidth={['17rem', '40rem']}
    >
      <Box
        display="grid"
        gridColumnGap="1rem"
        gridTemplateColumns={['1fr', '1f', '1fr', '1fr 1fr']}
      >
        <CreateTokenField
          required
          name="name"
          register={register}
          label={t('createToken.inputName')}
        />
        <CreateTokenField
          required
          label={t('createToken.inputSymbol')}
          name="symbol"
          register={register}
        />
      </Box>
      <CreateTokenField
        label={t('createToken.inputDescription')}
        name="description"
        register={register}
      />
      {network === Network.MAINNET && (
        <CreateTokenField
          required
          name="iconUrl"
          register={register}
          label={t('createToken.inputIconUrl')}
        />
      )}
      <CreateTokenSupplyField
        register={register}
        setValue={setValue}
        label={t('createToken.inputAmount')}
      />
      {network === Network.MAINNET && (
        <Box
          p="L"
          my="M"
          color="text"
          display="flex"
          bg="background"
          borderRadius="M"
          alignItems="center"
        >
          <InfoSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          <Typography variant="small" ml="L">
            {t('createToken.advice')}
          </Typography>
        </Box>
      )}
      <CreateTokenButton control={control} />
    </Box>
  );
};

export default CreateTokenForm;
