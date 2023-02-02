import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Typography } from '@/elements';
import { getSafeTotalBalance } from '@/utils';

import InputBalance from './input-balance';
import {
  IRemoveLiquidityForm,
  RemoveLiquidityCardProps,
} from './remove-liquidity-card.types';
import RemoveLiquidityCardContent from './remove-liquidity-card-content';

const RemoveLiquidityCard: FC<RemoveLiquidityCardProps> = ({
  tokens,
  isStable,
  lpToken,
  isFetchingInitialData,
  refetch,
}) => {
  const t = useTranslations();

  const { register, setValue, control, getValues } =
    useForm<IRemoveLiquidityForm>({
      defaultValues: {
        lpAmount: '0.0',
      },
    });

  const resetLpAmount = () => setValue('lpAmount', '0');
  const getLpAmount = () => getValues('lpAmount');
  const lpBalance = getSafeTotalBalance(lpToken);

  return (
    <Box bg="foreground" p="L" borderRadius="M" width="100%">
      <Box mb="L">
        <Typography
          width="100%"
          fontSize="S"
          variant="normal"
          textTransform="uppercase"
        >
          {t('dexPoolPair.removeLiquidity')}
        </Typography>
      </Box>
      <InputBalance
        name="lpAmount"
        register={register}
        setValue={setValue}
        balance={lpBalance.decimalPlaces(0, BigNumber.ROUND_DOWN).toString()}
        disabled={lpBalance.isZero()}
        currencyPrefix={
          <Box display="flex" width="5rem">
            {tokens[0].Icon}
            {tokens[1].Icon}
            <Typography variant="normal" ml="M">
              LP
            </Typography>
          </Box>
        }
      />
      <RemoveLiquidityCardContent
        isStable={isStable}
        refetch={refetch}
        tokens={tokens}
        isFetchingInitialData={isFetchingInitialData}
        lpAmountControl={control}
        resetLpAmount={resetLpAmount}
        getLpAmount={getLpAmount}
        lpToken={lpToken}
      />
    </Box>
  );
};

export default RemoveLiquidityCard;
