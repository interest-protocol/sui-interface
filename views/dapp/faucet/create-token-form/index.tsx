import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Button, Typography } from '@/elements';
import { TimesSVG } from '@/svg';

import CreateTokenButton from './create-token-button';
import CreateTokenField from './create-token-field';
import {
  CreateTokenFormProps,
  TCreateTokenForm,
} from './create-token-form.types';
import CreateTokenSupplyField from './create-token-supply-field';

const CreateTokenForm: FC<CreateTokenFormProps> = ({ handleCloseModal }) => {
  const t = useTranslations();
  const { setValue, register, control } = useForm<TCreateTokenForm>({
    defaultValues: {
      name: '',
      symbol: '',
      amount: '',
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
          {t('faucet.modalTitle')}
        </Typography>
        <Box
          display="grid"
          gridColumnGap="1rem"
          gridTemplateColumns={['1fr', '1f', '1fr', '1fr 1fr']}
        >
          <CreateTokenField
            label={t('faucet.modalInputName')}
            name="name"
            register={register}
          />
          <CreateTokenField
            label={t('faucet.modalInputSymbol')}
            name="symbol"
            register={register}
          />
        </Box>
        <CreateTokenSupplyField
          label={t('faucet.modalInputAmount')}
          register={register}
          setValue={setValue}
        />
        <CreateTokenButton
          control={control}
          handleCloseModal={handleCloseModal}
        />
      </Box>
    </Box>
  );
};

export default CreateTokenForm;
