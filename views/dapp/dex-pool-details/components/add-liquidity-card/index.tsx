import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import { Box, Typography } from '@/elements';
import { FixedPointMath } from '@/sdk';

import {
  AddLiquidityCardProps,
  IAddLiquidityForm,
  INPUT_NAMES,
} from './add-liquidity-card.types';
import AddLiquidityCardContent from './add-liquidity-card-content';
import AddLiquidityManager from './add-liquidity-manager';
import InputBalance from './input-balance';

const AddLiquidityCard: FC<AddLiquidityCardProps> = ({
  tokens,
  fetchingInitialData,
  refetch,
  pool,
}) => {
  const t = useTranslations();

  const { register, setValue, control, getValues } = useForm<IAddLiquidityForm>(
    {
      defaultValues: {
        token0Amount: '0.0',
        token1Amount: '0.0',
        error: '',
        token0InputLocked: false,
        token1InputLocked: false,
      },
    }
  );

  return (
    <Box bg="foreground" p="L" borderRadius="M" width="100%">
      <Box mb="L">
        <Typography
          width="100%"
          fontSize="S"
          variant="normal"
          textTransform="uppercase"
        >
          {t('dexPoolPair.addLiquidity')}
        </Typography>
      </Box>
      {tokens.map(({ balance, Icon, symbol, decimals }, index) => (
        <InputBalance
          key={v4()}
          register={register}
          setValue={setValue}
          name={INPUT_NAMES[index]}
          balance={FixedPointMath.toNumber(balance, decimals).toString()}
          currencyPrefix={
            <Box
              display="flex"
              width="4.5rem"
              maxHeight="1rem"
              alignItems="center"
              justifyContent="center"
            >
              {Icon}
              <Typography variant="normal" ml="M" maxHeight="1rem">
                {symbol}
              </Typography>
            </Box>
          }
        />
      ))}
      <AddLiquidityCardContent
        tokens={tokens}
        refetch={refetch}
        control={control}
        setValue={setValue}
        fetchingInitialData={fetchingInitialData}
        getValues={getValues}
      />
      {tokens.length == 2 && !isEmpty(pool) && (
        <AddLiquidityManager
          control={control}
          setValue={setValue}
          token0={tokens[0]}
          token1={tokens[1]}
          pool={pool}
        />
      )}
    </Box>
  );
};

export default AddLiquidityCard;
