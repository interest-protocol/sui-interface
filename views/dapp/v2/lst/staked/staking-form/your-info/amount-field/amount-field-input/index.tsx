import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { SUI_TYPE_ARG } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { propOr } from 'ramda';
import { ChangeEvent, FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { ISuiSVG, SUISVG } from '@/components/svg/v2';
import { ISUI_COIN_TYPE } from '@/constants/lst';
import { useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/lib';
import {
  formatDollars,
  parseInputEventToNumberString,
  ZERO_BIG_NUMBER,
} from '@/utils';
import { PercentageButton } from '@/views/dapp/v2/components';

import { useLstData } from '../../../../../lst.hooks';
import { AmountFieldProps } from '../../your-info.types';
import AmountFieldInputDollars from './amount-field-input-dollars';

const AmountFieldInput: FC<AmountFieldProps> = ({
  form,
  isStake,
  exchangeRate,
}) => {
  const t = useTranslations();
  const { coinsMap, isFetchingCoinBalances } = useWeb3();
  const sui = coinsMap[SUI_TYPE_ARG];
  const iSui = coinsMap[ISUI_COIN_TYPE];

  const { suiCoinInfo } = useLstData();

  const totalBalance: BigNumber = isStake
    ? propOr(ZERO_BIG_NUMBER, 'totalBalance', sui)
    : propOr(ZERO_BIG_NUMBER, 'totalBalance', iSui);

  isFetchingCoinBalances && <Skeleton width="100%" height="1.875rem" />;

  return (
    <Box
      px="m"
      pb="s"
      position="relative"
      borderRadius="0.25rem"
      bg="surface.containerHigh"
    >
      <Box position="absolute" right="0" pr="xl" pt="m" color="onSurface">
        <AmountFieldInputDollars control={form.control} />
      </Box>
      <TextField
        Prefix={
          <Box
            width="2.5rem"
            height="2.5rem"
            overflow="hidden"
            borderRadius="0.34rem"
          >
            {isStake ? (
              <SUISVG
                filled
                width="100%"
                height="100%"
                maxWidth="2.5rem"
                maxHeight="2.5rem"
              />
            ) : (
              <ISuiSVG
                filled
                width="100%"
                height="100%"
                maxWidth="2.5rem"
                maxHeight="2.5rem"
              />
            )}
          </Box>
        }
        my="0"
        fontSize="xl"
        placeholder="0"
        textAlign="right"
        fieldProps={{ border: 'none', p: '0' }}
        Top={<Box p="l" />}
        {...form.register('amount', {
          onChange: (v: ChangeEvent<HTMLInputElement>) => {
            form.setValue?.('amount', parseInputEventToNumberString(v));
            form.setValue?.(
              'amountUSD',
              formatDollars(
                Number(parseInputEventToNumberString(v)) *
                  (suiCoinInfo?.price ?? 1) *
                  (isStake ? 1 : exchangeRate)
              )
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
          {t('lst.amountField.wallet')}: {FixedPointMath.toNumber(totalBalance)}
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
              form.setValue?.(
                'amountUSD',
                formatDollars(
                  FixedPointMath.toNumber(
                    totalBalance.dividedBy(BigNumber(4))
                  ) *
                    (suiCoinInfo?.price ?? 1) *
                    (isStake ? 1 : exchangeRate)
                )
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
              form.setValue?.(
                'amountUSD',
                formatDollars(
                  FixedPointMath.toNumber(
                    totalBalance.dividedBy(BigNumber(2))
                  ) *
                    (suiCoinInfo?.price ?? 1) *
                    (isStake ? 1 : exchangeRate)
                )
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
              form.setValue?.(
                'amountUSD',
                formatDollars(
                  FixedPointMath.toNumber(
                    totalBalance
                      .multipliedBy(BigNumber(3))
                      .dividedBy(BigNumber(4))
                  ) *
                    (suiCoinInfo?.price ?? 1) *
                    (isStake ? 1 : exchangeRate)
                )
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
              form.setValue?.(
                'amountUSD',
                formatDollars(
                  FixedPointMath.toNumber(totalBalance) *
                    (suiCoinInfo?.price ?? 1) *
                    (isStake ? 1 : exchangeRate)
                )
              );
            }}
            isFilled
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AmountFieldInput;
