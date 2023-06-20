import { Network } from '@interest-protocol/sui-sdk';
import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useNetwork } from '@/hooks';
import { WarningCircle } from '@/svg';
import { capitalize } from '@/utils';

import { Layout } from '../components';
import CreateTokenButton from './create-token-button';
import CreateTokenField from './create-token-field';
import { TCreateTokenForm } from './create-token-form.types';
import CreateTokenAmountField from './create-token-supply-field';

const CreateToken: FC = () => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { dark } = useTheme() as Theme;
  const { setValue, register, control } = useForm<TCreateTokenForm>({
    defaultValues: {
      name: '',
      symbol: '',
      amount: '',
      iconUrl: '',
    },
  });

  return (
    <Layout dashboard>
      <Box variant="container">
        <Box
          p="0 1.5rem"
          width="100%"
          color="onSurface"
          gridColumn={['1/-1', '1/-1', '1/-1', '3/11']}
        >
          <Typography
            mb="4xl"
            pb="4xl"
            textAlign="center"
            variant="displayLarge"
            color={dark ? 'white' : 'black'}
          >
            {capitalize(t('createToken.pageTitle'))}
          </Typography>
          <Box
            mb="4xl"
            rowGap="4xl"
            display="flex"
            columnGap="2xl"
            flexDirection={['column', 'column', 'column', 'row']}
          >
            <Box flex="1">
              <CreateTokenField
                required
                name="name"
                register={register}
                placeholder={t('createToken.inputName')}
              />
            </Box>
            <Box flex="1">
              <CreateTokenField
                required
                name="symbol"
                register={register}
                placeholder={t('createToken.inputSymbol')}
              />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap="3xl" mb="3xl">
            <CreateTokenField
              name="description"
              register={register}
              placeholder={t('createToken.inputDescription')}
            />
            <CreateTokenField
              required
              name="iconUrl"
              register={register}
              placeholder={t('createToken.inputIconUrl')}
            />
            <Box>
              <Typography variant="medium" mb="xs" textAlign="right">
                {t('createToken.balance')}: ∞
              </Typography>
              <CreateTokenAmountField
                required
                setValue={setValue}
                register={register}
                placeholder={t('createToken.inputAmount')}
              />
            </Box>
            {network === Network.MAINNET && (
              <Box
                p="m"
                gap="s"
                display="flex"
                color="primary"
                borderRadius="m"
                alignItems="center"
                bg="secondary.secondaryContainer"
              >
                <WarningCircle
                  width="1.5rem"
                  height="1.5rem"
                  maxWidth="100%"
                  maxHeight="100%"
                />
                <Typography variant="small">
                  {t('createToken.advice')}
                </Typography>
              </Box>
            )}
          </Box>
          <CreateTokenButton control={control} />
        </Box>
      </Box>
    </Layout>
  );
};

export default CreateToken;
