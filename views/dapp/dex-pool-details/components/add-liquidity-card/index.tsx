import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Box, InputBalance, Typography } from '@/elements';
import { FixedPointMath } from '@/sdk';

import { AddLiquidityCardProps, INPUT_NAMES } from './add-liquidity-card.types';
import AddLiquidityCardContent from './add-liquidity-card-content';
import AddLiquidityManager from './add-liquidity-manager';

const AddLiquidityCard: FC<AddLiquidityCardProps> = ({
  tokens,
  fetchingInitialData,
  refetch,
  pool,
  formAddLiquidity,
  loadingAddLiquidityState,
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
          key={v4()}
          register={formAddLiquidity.register}
          setValue={formAddLiquidity.setValue}
          name={INPUT_NAMES[index]}
          balance={FixedPointMath.toNumber(balance, decimals).toString()}
          max={FixedPointMath.toNumber(balance, decimals).toString()}
          Suffix={
            <Box
              px="M"
              width="4.5rem"
              lineHeight="0"
              display="flex"
              alignItems="center"
              borderLeft="1px solid"
              borderColor="bottomBackground"
            >
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
            </Box>
          }
          isLarge={false}
          buttonMaxPosition="left"
          customFunction={customInputFunction}
        />
      ))}
      <AddLiquidityCardContent
        tokens={tokens}
        refetch={refetch}
        control={formAddLiquidity.control}
        setValue={formAddLiquidity.setValue}
        fetchingInitialData={fetchingInitialData}
        getValues={formAddLiquidity.getValues}
        loadingAddLiquidityState={loadingAddLiquidityState}
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
