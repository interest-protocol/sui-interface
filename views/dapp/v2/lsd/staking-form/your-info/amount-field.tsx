import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SUISVG } from '@/components/svg/v2';

import { PercentageButton } from '../../../components';
import { AmountFieldsProps } from '../../lsd.type';

const AmountField: FC<AmountFieldsProps> = ({ balance }) => {
  const t = useTranslations();
  return (
    <Box mt="l">
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color="onSurface"
        mb="s"
        textTransform="uppercase"
      >
        {t('lsd.amountField.title')}
      </Typography>
      <Box
        px="m"
        pb="m"
        bg="surface.containerHigh"
        borderRadius="0.25rem"
        mb="3xl"
      >
        <TextField
          Prefix={
            <Box
              height="2.5rem"
              width="2.5rem"
              color="white"
              bg="#6FBCF0"
              borderRadius="0.34rem"
            >
              <SUISVG
                maxHeight="2.5rem"
                maxWidth="2.5rem"
                height="100%"
                width="100%"
              />
            </Box>
          }
          my="0" //Amount equivalent in USD
          Top="$0"
          fontSize="xl"
          placeholder="0"
          textAlign="right"
          fieldProps={{ border: 'none', p: '0' }}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap-reverse"
        >
          <Typography
            variant="extraSmall"
            fontSize="0.688rem"
            color="onSurface"
            textTransform="capitalize"
          >
            {t('lsd.amountField.wallet')}: {balance}
          </Typography>
          <Box display="flex" columnGap=".25rem">
            <PercentageButton
              value={25}
              total={100}
              onSelect={(parsedValue: any) => {
                console.log(parsedValue);
              }}
              isFilled
            />
            <PercentageButton
              value={50}
              total={100}
              onSelect={(parsedValue: any) => {
                console.log(parsedValue);
              }}
              isFilled
            />
            <PercentageButton
              value={75}
              total={100}
              onSelect={(parsedValue: any) => {
                console.log(parsedValue);
              }}
              isFilled
            />
            <PercentageButton
              value={100}
              total={100}
              onSelect={(parsedValue: any) => {
                console.log(parsedValue);
              }}
              isFilled
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AmountField;
