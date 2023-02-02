import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Typography } from '@/elements';

import InputBalance from './input-balance';
import {
  IRemoveLiquidityForm,
  RemoveLiquidityCardProps,
} from './remove-liquidity-card.types';
import RemoveLiquidityCardContent from './remove-liquidity-card-content';

const RemoveLiquidityCard: FC<RemoveLiquidityCardProps> = ({
  tokens,
  isStable,
  lpBalance,
  isFetchingInitialData,
  refetch,
}) => {
  const t = useTranslations();

  const { register, setValue, control } = useForm<IRemoveLiquidityForm>({
    defaultValues: {
      loading: false,
      removeLoading: false,
      lpAmount: '0.0',
      token0Amount: '0.0',
      token1Amount: '0.0',
    },
  });

  console.log(lpBalance);

  return (
    <Box bg="foreground" p="L" borderRadius="M" width="100%">
      <Box mb="L">
        <Typography
          width="100%"
          fontSize="S"
          variant="normal"
          textTransform="uppercase"
        >
          {t('dexPoolPairAddress.removeLiquidity')}
        </Typography>
      </Box>
      <InputBalance
        name="lpAmount"
        control={control}
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
        setValue={setValue}
        isStable={isStable}
        control={control}
        refetch={refetch}
        tokens={tokens}
        isFetchingInitialData={isFetchingInitialData}
        lpBalance={lpBalance}
      />
    </Box>
  );
};

export default RemoveLiquidityCard;
