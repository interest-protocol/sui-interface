import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { Box, Typography } from '@/elements';

import {
  AddLiquidityCardProps,
  IAddLiquidityForm,
  INPUT_NAMES,
} from './add-liquidity-card.types';
import AddLiquidityCardContent from './add-liquidity-card-content';
import InputBalance from './input-balance';

const AddLiquidityCard: FC<AddLiquidityCardProps> = ({
  tokens,
  fetchingInitialData,
  refetch,
}) => {
  const [loading, setLoading] = useState(false);

  const t = useTranslations();

  const { register, setValue, control } = useForm<IAddLiquidityForm>({
    defaultValues: {
      token0Amount: '0.0',
      token1Amount: '0.0',
      error: '',
      locked: false,
    },
  });

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
          balance={balance.decimalPlaces(decimals).toString()}
          disabled={loading}
          currencyPrefix={
            fetchingInitialData ? (
              <Box height="1rem" display="flex" borderRadius="2rem">
                <Skeleton height="1rem" width="1rem" borderRadius="2rem" />
                <Box width="2.5rem" ml="L">
                  <Skeleton />
                </Box>
              </Box>
            ) : (
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
            )
          }
        />
      ))}
      <AddLiquidityCardContent
        loading={loading}
        setLoading={setLoading}
        tokens={tokens}
        refetch={refetch}
        control={control}
        setValue={setValue}
        fetchingInitialData={fetchingInitialData}
      />
    </Box>
  );
};

export default AddLiquidityCard;
