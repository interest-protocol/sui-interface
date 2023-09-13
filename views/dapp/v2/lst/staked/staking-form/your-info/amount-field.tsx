import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { SUI_TYPE_ARG } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { propOr } from 'ramda';
import { ChangeEvent, FC } from 'react';
import { useWatch } from 'react-hook-form';

import { SUISVG } from '@/components/svg/v2';
import { ISUI_COIN_TYPE } from '@/constants/lst';
import { useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { ISuiSVG } from '@/svg';
import {
  formatDollars,
  parseInputEventToNumberString,
  ZERO_BIG_NUMBER,
} from '@/utils';
import { PercentageButton } from '@/views/dapp/v2/components';

import { useLstData } from '../../../lst.hooks';
import { AmountFieldDollarsProps, AmountFieldProps } from './your-info.types';

const AmountFieldInDollars: FC<AmountFieldDollarsProps> = ({
  control,
  usdPrice,
}) => {
  const amount = useWatch({ control, name: 'amount' });

  return <>{formatDollars(Number(amount) * usdPrice)}</>;
};

const AmountField: FC<AmountFieldProps> = ({ form, isStake, exchangeRate }) => {
  const t = useTranslations();
  const { coinsMap, isFetchingCoinBalances } = useWeb3();
  const sui = coinsMap[SUI_TYPE_ARG];
  const iSui = coinsMap[ISUI_COIN_TYPE];

  const { suiCoinInfo } = useLstData();

  const totalBalance: BigNumber = isStake
    ? propOr(ZERO_BIG_NUMBER, 'totalBalance', sui)
    : propOr(ZERO_BIG_NUMBER, 'totalBalance', iSui);

  console.log({ isFetchingCoinBalances });

  return (
    <Box mt="l">
      <Typography
        mb="s"
        color="onSurface"
        fontSize="0.688rem"
        variant="extraSmall"
        textTransform="uppercase"
      >
        {t('lst.amountField.title')}
      </Typography>
      <Box
        px="m"
        pb="m"
        mb="3xl"
        bg="surface.containerHigh"
        borderRadius="0.25rem"
      >
        <TextField
          Prefix={
            <Box
              bg="#6FBCF0"
              color="white"
              width="2.5rem"
              height="2.5rem"
              borderRadius="0.34rem"
            >
              {isStake ? (
                <SUISVG
                  maxHeight="2.5rem"
                  maxWidth="2.5rem"
                  height="100%"
                  width="100%"
                />
              ) : (
                <ISuiSVG
                  filled
                  maxHeight="2.5rem"
                  maxWidth="2.5rem"
                  height="100%"
                  width="100%"
                />
              )}
            </Box>
          }
          my="0"
          fontSize="xl"
          placeholder="0"
          textAlign="right"
          fieldProps={{ border: 'none', p: '0' }}
          Top={
            <AmountFieldInDollars
              control={form.control}
              usdPrice={
                (suiCoinInfo?.price ?? 1) * (isStake ? 1 : exchangeRate)
              }
            />
          }
          {...form?.register('amount', {
            onChange: (v: ChangeEvent<HTMLInputElement>) => {
              form.setValue?.('amount', parseInputEventToNumberString(v));
              form.setValue(
                'coinType',
                isStake ? SUI_TYPE_ARG : ISUI_COIN_TYPE
              );
            },
          })}
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
            {t('lst.amountField.wallet')}:{' '}
            {FixedPointMath.toNumber(totalBalance)}
          </Typography>
          <Box display="flex" columnGap=".25rem">
            <PercentageButton
              value={25}
              total={100}
              onSelect={() => {
                form.setValue?.(
                  'amount',
                  FixedPointMath.toNumber(
                    totalBalance.dividedBy(BigNumber(4))
                  ).toString()
                );
                form.setValue(
                  'coinType',
                  isStake ? SUI_TYPE_ARG : ISUI_COIN_TYPE
                );
              }}
              isFilled
            />
            <PercentageButton
              value={50}
              total={100}
              onSelect={() => {
                form.setValue?.(
                  'amount',
                  FixedPointMath.toNumber(
                    totalBalance.dividedBy(BigNumber(2))
                  ).toString()
                );
                form.setValue(
                  'coinType',
                  isStake ? SUI_TYPE_ARG : ISUI_COIN_TYPE
                );
              }}
              isFilled
            />
            <PercentageButton
              value={75}
              total={100}
              onSelect={() => {
                form.setValue?.(
                  'amount',
                  FixedPointMath.toNumber(
                    totalBalance
                      .multipliedBy(BigNumber(3))
                      .dividedBy(BigNumber(4))
                  ).toString()
                );
                form.setValue(
                  'coinType',
                  isStake ? SUI_TYPE_ARG : ISUI_COIN_TYPE
                );
              }}
              isFilled
            />
            <PercentageButton
              value={100}
              total={100}
              onSelect={() => {
                form.setValue?.(
                  'amount',
                  FixedPointMath.toNumber(totalBalance).toString()
                );
                form.setValue(
                  'coinType',
                  isStake ? SUI_TYPE_ARG : ISUI_COIN_TYPE
                );
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
