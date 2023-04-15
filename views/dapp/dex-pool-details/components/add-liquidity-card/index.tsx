import { FixedPointMath } from 'lib';
import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Box, InputBalance, Typography } from '@/elements';

import { AddLiquidityCardProps, INPUT_NAMES } from './add-liquidity-card.types';
import AddLiquidityCardContent from './add-liquidity-card-content';
import AddLiquidityManager from './add-liquidity-manager';

const AddLiquidityCard: FC<AddLiquidityCardProps> = ({
  tokens,
  fetchingInitialData,
  refetch,
  pool,
  formAddLiquidity,
}) => {
  const t = useTranslations();

  const customInputFunction = (name: string) => {
    if (name === 'token0Amount') {
      formAddLiquidity.setValue('token0InputLocked', true);
      formAddLiquidity.setValue('token1InputLocked', false);
    } else {
      formAddLiquidity.setValue('token1InputLocked', true);
      formAddLiquidity.setValue('token0InputLocked', false);
    }
  };

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
          max
          key={v4()}
          name={INPUT_NAMES[index]}
          register={formAddLiquidity.register}
          setValue={formAddLiquidity.setValue}
          customFunction={customInputFunction}
          balance={FixedPointMath.toNumber(balance, decimals).toString()}
          Suffix={
            <Box px="M" lineHeight="0" display="flex" alignItems="center">
              <Box
                display="flex"
                maxHeight="1rem"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="normal" mr="M" maxHeight="1rem">
                  {symbol}
                </Typography>
                {Icon}
              </Box>
            </Box>
          }
        />
      ))}
      <AddLiquidityCardContent
        tokens={tokens}
        refetch={refetch}
        control={formAddLiquidity.control}
        setValue={formAddLiquidity.setValue}
        fetchingInitialData={fetchingInitialData}
        getValues={formAddLiquidity.getValues}
        stable={pool.stable}
      />
      {tokens.length == 2 && !isEmpty(pool) && (
        <AddLiquidityManager
          control={formAddLiquidity.control}
          setValue={formAddLiquidity.setValue}
          token0={tokens[0]}
          token1={tokens[1]}
          pool={pool}
        />
      )}
    </Box>
  );
};

export default AddLiquidityCard;
