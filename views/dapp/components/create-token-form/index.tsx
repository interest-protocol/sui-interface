import { Network } from '@interest-protocol/sui-sdk';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Button, Typography } from '@/elements';
import { useNetwork } from '@/hooks';
import { InfoSVG, TimesSVG } from '@/svg';

import CreateTokenButton from './create-token-button';
import CreateTokenField from './create-token-field';
import {
  CreateTokenFormProps,
  TCreateTokenForm,
} from './create-token-form.types';
import CreateTokenSupplyField from './create-token-supply-field';

const CreateTokenForm: FC<CreateTokenFormProps> = ({ handleCloseModal }) => {
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
    <Box width={['90vw', '70vw', '50vw', '30rem']}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          px="L"
          variant="primary"
          onClick={handleCloseModal}
          nHover={{
            bg: 'accentActive',
          }}
        >
          <Box as="span" display="inline-block" width="1rem">
            <TimesSVG width="100%" maxHeight="1rem" maxWidth="1rem" />
          </Box>
        </Button>
      </Box>
      <Box bg="foreground" my="M" borderRadius="L" p="XL" color="text">
        <Typography
          mt="S"
          mb="XL"
          fontSize="L"
          variant="normal"
          textTransform="uppercase"
        >
          {t('common.createTokenModalTitle')}
        </Typography>
        <Box
          display="grid"
          gridColumnGap="1rem"
          gridTemplateColumns={['1fr', '1f', '1fr', '1fr 1fr']}
        >
          <CreateTokenField
            required
            name="name"
            register={register}
            label={t('common.createTokenModalInputName')}
          />
          <CreateTokenField
            required
            label={t('common.createTokenModalInputSymbol')}
            name="symbol"
            register={register}
          />
        </Box>
        <CreateTokenField
          label={t('common.createTokenModalInputDescription')}
          name="description"
          register={register}
        />
        {network === Network.MAINNET && (
          <CreateTokenField
            required
            name="iconUrl"
            register={register}
            label={t('common.createTokenModalInputIconUrl')}
          />
        )}
        <CreateTokenSupplyField
          register={register}
          setValue={setValue}
          label={t('common.createTokenModalInputAmount')}
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
              {t('common.createTokenModalAdvice')}
            </Typography>
          </Box>
        )}
        <CreateTokenButton
          control={control}
          handleCloseModal={handleCloseModal}
        />
      </Box>
    </Box>
  );
};

export default CreateTokenForm;
