import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { SUI_TYPE_ARG } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { propOr } from 'ramda';
import { ChangeEvent, FC } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { ISUI_COIN_TYPE } from '@/constants/lst';
import { useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { parseInputEventToNumberString, ZERO_BIG_NUMBER } from '@/utils';
import { PercentageButton } from '@/views/dapp/v2/components';

import { AmountFieldProps } from './your-info.types';

const AmountField: FC<AmountFieldProps> = ({ isStake, form }) => {
  const t = useTranslations();
  const { coinsMap, isFetchingCoinBalances } = useWeb3();
  const sui = coinsMap[SUI_TYPE_ARG];
  const iSui = coinsMap[ISUI_COIN_TYPE];

  const totalBalance: BigNumber = isStake
    ? propOr(ZERO_BIG_NUMBER, 'totalBalance', sui)
    : propOr(ZERO_BIG_NUMBER, 'totalBalance', iSui);
  console.log(form);

  return (
    <Box mt="l">
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color="onSurface"
        mb="s"
        textTransform="uppercase"
      >
        {t('lst.amountField.title')}
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
          {...form?.register('amount', {
            onChange: (v: ChangeEvent<HTMLInputElement>) => {
              form.setValue?.('amount', parseInputEventToNumberString(v));
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
